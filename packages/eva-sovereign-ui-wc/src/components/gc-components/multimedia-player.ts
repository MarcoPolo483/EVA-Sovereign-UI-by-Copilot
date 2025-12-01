import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/**
 * Media type
 */
export type MediaType = 'video' | 'audio';

/**
 * Caption track interface
 */
export interface CaptionTrack {
  src: string;
  srcFr?: string;
  label: string;
  labelFr?: string;
  language: string;
  default?: boolean;
}

/**
 * Transcript interface
 */
export interface Transcript {
  text: string;
  textFr?: string;
}

/**
 * EVA GC Multimedia Player Component
 * 
 * WCAG 2.1 AA compliant video/audio player with captions and transcripts.
 * Follows GC Design System patterns for multimedia content.
 * 
 * @element eva-gc-multimedia-player
 * 
 * @fires play - Fired when media starts playing
 * @fires pause - Fired when media is paused
 * @fires ended - Fired when media playback ends
 * 
 * @example
 * ```html
 * <eva-gc-multimedia-player
 *   type="video"
 *   src="/video.mp4"
 *   poster="/poster.jpg"
 *   lang="en">
 * </eva-gc-multimedia-player>
 * ```
 */
@customElement('eva-gc-multimedia-player')
export class EvaGCMultimediaPlayer extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .player-container {
      background: black;
      border-radius: 4px;
      overflow: hidden;
      max-width: 100%;
    }

    video,
    audio {
      width: 100%;
      display: block;
    }

    .controls {
      background: var(--gc-color-background-dark, #26374A);
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
    }

    .control-button {
      background: transparent;
      border: 2px solid white;
      color: white;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      transition: all 0.2s ease;
    }

    .control-button:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .control-button:focus {
      outline: 3px solid white;
      outline-offset: 2px;
    }

    .control-button svg {
      width: 24px;
      height: 24px;
    }

    .progress-container {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .progress-bar {
      flex: 1;
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
    }

    .progress-filled {
      height: 100%;
      background: white;
      border-radius: 4px;
      transition: width 0.1s ease;
    }

    .time-display {
      font-size: 14px;
      font-weight: 400;
      white-space: nowrap;
      min-width: 100px;
      text-align: center;
    }

    .volume-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .volume-slider {
      width: 80px;
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
    }

    .volume-filled {
      height: 100%;
      background: white;
      border-radius: 4px;
    }

    .captions-menu {
      position: relative;
    }

    .captions-dropdown {
      position: absolute;
      bottom: 100%;
      right: 0;
      background: white;
      color: var(--gc-color-text-primary, #333333);
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      margin-bottom: 8px;
      min-width: 200px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .captions-dropdown button {
      width: 100%;
      padding: 12px 16px;
      border: none;
      background: transparent;
      text-align: left;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.2s ease;
    }

    .captions-dropdown button:hover {
      background: var(--gc-color-background-hover, #f0f0f0);
    }

    .captions-dropdown button.active {
      background: var(--gc-color-primary-light, #e8f4ff);
      font-weight: 700;
    }

    .transcript-section {
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      margin-top: 16px;
      padding: 20px;
    }

    .transcript-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 12px 0;
    }

    .transcript-text {
      font-size: 16px;
      color: var(--gc-color-text-primary, #333333);
      line-height: 1.6;
      white-space: pre-wrap;
    }

    .error-message {
      background: var(--gc-color-error-background, #f8d7da);
      border: 1px solid var(--gc-color-error-border, #f5c6cb);
      color: var(--gc-color-error-text, #721c24);
      padding: 16px;
      border-radius: 4px;
      margin: 16px 0;
    }

    @media (max-width: 640px) {
      .controls {
        padding: 8px;
        gap: 8px;
      }

      .control-button {
        min-width: 40px;
        min-height: 40px;
        padding: 6px;
      }

      .time-display {
        font-size: 12px;
        min-width: 80px;
      }

      .volume-container {
        display: none;
      }
    }
  `;

  @query('video, audio')
  private mediaElement?: HTMLVideoElement | HTMLAudioElement;

  /** Language (en or fr) */
  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  /** Media type */
  @property({ type: String })
  type: MediaType = 'video';

  /** Media source URL */
  @property({ type: String })
  src = '';

  /** Video poster image (video only) */
  @property({ type: String })
  poster = '';

  /** Caption tracks */
  @property({ type: Array })
  captions: CaptionTrack[] = [];

  /** Transcript */
  @property({ type: Object })
  transcript?: Transcript;

  /** Show transcript */
  @property({ type: Boolean, attribute: 'show-transcript' })
  showTranscript = false;

  /** Playing state */
  @state()
  private isPlaying = false;

  /** Current time */
  @state()
  private currentTime = 0;

  /** Duration */
  @state()
  private duration = 0;

  /** Volume (0-1) */
  @state()
  private volume = 1;

  /** Muted state */
  @state()
  private isMuted = false;

  /** Show captions menu */
  @state()
  private showCaptionsMenu = false;

  /** Active caption track */
  @state()
  private activeCaptionIndex = -1;

  /** Error message */
  @state()
  private errorMessage = '';

  override firstUpdated() {
    if (this.mediaElement) {
      this.mediaElement.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
      this.mediaElement.addEventListener('loadedmetadata', this.handleLoadedMetadata.bind(this));
      this.mediaElement.addEventListener('ended', this.handleEnded.bind(this));
      this.mediaElement.addEventListener('error', this.handleError.bind(this));
      this.mediaElement.addEventListener('play', this.handlePlay.bind(this));
      this.mediaElement.addEventListener('pause', this.handlePause.bind(this));
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.mediaElement) {
      this.mediaElement.removeEventListener('timeupdate', this.handleTimeUpdate.bind(this));
      this.mediaElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata.bind(this));
      this.mediaElement.removeEventListener('ended', this.handleEnded.bind(this));
      this.mediaElement.removeEventListener('error', this.handleError.bind(this));
      this.mediaElement.removeEventListener('play', this.handlePlay.bind(this));
      this.mediaElement.removeEventListener('pause', this.handlePause.bind(this));
    }
  }

  private handlePlay() {
    this.isPlaying = true;
    this.dispatchEvent(new CustomEvent('play', { bubbles: true, composed: true }));
  }

  private handlePause() {
    this.isPlaying = false;
    this.dispatchEvent(new CustomEvent('pause', { bubbles: true, composed: true }));
  }

  private handleTimeUpdate() {
    if (this.mediaElement) {
      this.currentTime = this.mediaElement.currentTime;
    }
  }

  private handleLoadedMetadata() {
    if (this.mediaElement) {
      this.duration = this.mediaElement.duration;
    }
  }

  private handleEnded() {
    this.isPlaying = false;
    this.dispatchEvent(new CustomEvent('ended', { bubbles: true, composed: true }));
  }

  private handleError(e: Event) {
    const mediaError = (e.target as HTMLMediaElement).error;
    this.errorMessage = this.lang === 'fr'
      ? 'Erreur lors du chargement du média'
      : 'Error loading media';
  }

  private togglePlayPause() {
    if (!this.mediaElement) return;

    if (this.isPlaying) {
      this.mediaElement.pause();
    } else {
      this.mediaElement.play();
    }
  }

  private handleProgressClick(e: MouseEvent) {
    if (!this.mediaElement) return;

    const progressBar = e.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.mediaElement.currentTime = percent * this.duration;
  }

  private handleVolumeClick(e: MouseEvent) {
    if (!this.mediaElement) return;

    const volumeBar = e.currentTarget as HTMLElement;
    const rect = volumeBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.volume = Math.max(0, Math.min(1, percent));
    this.mediaElement.volume = this.volume;
    this.isMuted = this.volume === 0;
  }

  private toggleMute() {
    if (!this.mediaElement) return;

    this.isMuted = !this.isMuted;
    this.mediaElement.muted = this.isMuted;
  }

  private toggleCaptionsMenu() {
    this.showCaptionsMenu = !this.showCaptionsMenu;
  }

  private selectCaption(index: number) {
    this.activeCaptionIndex = index;
    this.showCaptionsMenu = false;

    if (this.mediaElement && this.mediaElement instanceof HTMLVideoElement) {
      const tracks = this.mediaElement.textTracks;
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = i === index ? 'showing' : 'hidden';
      }
    }
  }

  private formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  override render() {
    const currentTranscript = this.transcript
      ? (this.lang === 'fr' && this.transcript.textFr ? this.transcript.textFr : this.transcript.text)
      : '';

    return html`
      <div class="player-container">
        ${this.type === 'video' ? html`
          <video
            src="${this.src}"
            poster="${this.poster}"
            crossorigin="anonymous"
            preload="metadata">
            ${this.captions.map(caption => {
              const src = this.lang === 'fr' && caption.srcFr ? caption.srcFr : caption.src;
              const label = this.lang === 'fr' && caption.labelFr ? caption.labelFr : caption.label;
              return html`
                <track
                  kind="captions"
                  src="${src}"
                  srclang="${caption.language}"
                  label="${label}"
                  ?default=${caption.default} />
              `;
            })}
          </video>
        ` : html`
          <audio
            src="${this.src}"
            preload="metadata">
          </audio>
        `}

        ${this.errorMessage ? html`
          <div class="error-message" role="alert">
            ${this.errorMessage}
          </div>
        ` : ''}

        <div class="controls">
          <button
            class="control-button"
            @click=${this.togglePlayPause}
            aria-label="${this.isPlaying 
              ? (this.lang === 'fr' ? 'Pause' : 'Pause')
              : (this.lang === 'fr' ? 'Lecture' : 'Play')}">
            ${this.isPlaying ? html`
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ` : html`
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            `}
          </button>

          <div class="progress-container">
            <div
              class="progress-bar"
              @click=${this.handleProgressClick}
              role="slider"
              aria-label="${this.lang === 'fr' ? 'Barre de progression' : 'Progress bar'}"
              aria-valuemin="0"
              aria-valuemax="${this.duration}"
              aria-valuenow="${this.currentTime}">
              <div
                class="progress-filled"
                style="width: ${this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0}%">
              </div>
            </div>

            <div class="time-display">
              ${this.formatTime(this.currentTime)} / ${this.formatTime(this.duration)}
            </div>
          </div>

          <div class="volume-container">
            <button
              class="control-button"
              @click=${this.toggleMute}
              aria-label="${this.isMuted 
                ? (this.lang === 'fr' ? 'Rétablir le son' : 'Unmute')
                : (this.lang === 'fr' ? 'Muet' : 'Mute')}">
              ${this.isMuted || this.volume === 0 ? html`
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ` : html`
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
              `}
            </button>

            <div
              class="volume-slider"
              @click=${this.handleVolumeClick}
              role="slider"
              aria-label="${this.lang === 'fr' ? 'Volume' : 'Volume'}"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="${this.volume * 100}">
              <div
                class="volume-filled"
                style="width: ${this.volume * 100}%">
              </div>
            </div>
          </div>

          ${this.captions.length > 0 && this.type === 'video' ? html`
            <div class="captions-menu">
              <button
                class="control-button"
                @click=${this.toggleCaptionsMenu}
                aria-label="${this.lang === 'fr' ? 'Sous-titres' : 'Captions'}"
                aria-expanded="${this.showCaptionsMenu}">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/>
                </svg>
              </button>

              ${this.showCaptionsMenu ? html`
                <div class="captions-dropdown">
                  <button @click=${() => this.selectCaption(-1)}>
                    ${this.lang === 'fr' ? 'Désactivé' : 'Off'}
                  </button>
                  ${this.captions.map((caption, index) => {
                    const label = this.lang === 'fr' && caption.labelFr ? caption.labelFr : caption.label;
                    return html`
                      <button
                        class="${this.activeCaptionIndex === index ? 'active' : ''}"
                        @click=${() => this.selectCaption(index)}>
                        ${label}
                      </button>
                    `;
                  })}
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>

      ${this.showTranscript && currentTranscript ? html`
        <div class="transcript-section">
          <h3 class="transcript-title">
            ${this.lang === 'fr' ? 'Transcription' : 'Transcript'}
          </h3>
          <div class="transcript-text">${currentTranscript}</div>
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-multimedia-player': EvaGCMultimediaPlayer;
  }
}
