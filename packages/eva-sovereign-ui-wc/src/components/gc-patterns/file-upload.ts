import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/**
 * File metadata structure
 */
export interface FileMetadata {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
  progress?: number;
  status?: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

/**
 * EVA GC File Upload Pattern
 * 
 * Drag-and-drop file upload with multi-file support,
 * preview, validation, and progress indicators.
 * 
 * @element eva-gc-file-upload
 * 
 * @fires files-selected - Dispatched when files are selected
 * @fires upload-start - Dispatched when upload starts
 * @fires upload-progress - Dispatched when upload progresses
 * @fires upload-complete - Dispatched when upload completes
 * @fires upload-error - Dispatched when upload fails
 * @fires file-remove - Dispatched when a file is removed
 */
@customElement('eva-gc-file-upload')
export class EvaGCFileUpload extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .upload-container {
      border: 2px dashed var(--gc-color-border-default, #e0e0e0);
      border-radius: 8px;
      padding: 40px 20px;
      text-align: center;
      background: var(--gc-color-background-light, #f5f5f5);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .upload-container:hover {
      border-color: var(--gc-color-primary, #26374A);
      background: white;
    }

    .upload-container.drag-over {
      border-color: var(--gc-color-primary, #26374A);
      background: var(--gc-color-primary-light, #e8f4ff);
      transform: scale(1.02);
    }

    .upload-container:focus-within {
      outline: 3px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .upload-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      fill: var(--gc-color-primary, #26374A);
    }

    .upload-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 8px 0;
    }

    .upload-subtitle {
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
      margin: 0 0 16px 0;
    }

    .upload-button {
      padding: 10px 24px;
      background: var(--gc-color-primary, #26374A);
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .upload-button:hover {
      background: var(--gc-color-primary-dark, #1a2633);
    }

    .upload-button:focus-visible {
      outline: 3px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .file-input {
      display: none;
    }

    .upload-constraints {
      font-size: 12px;
      color: var(--gc-color-text-secondary, #666666);
      margin-top: 16px;
    }

    .files-list {
      margin-top: 24px;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      margin-bottom: 12px;
    }

    .file-icon {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 4px;
      background: var(--gc-color-primary-light, #e8f4ff);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .file-icon svg {
      width: 24px;
      height: 24px;
      fill: var(--gc-color-primary, #26374A);
    }

    .file-preview {
      width: 60px;
      height: 60px;
      flex-shrink: 0;
      border-radius: 4px;
      object-fit: cover;
    }

    .file-info {
      flex: 1;
      min-width: 0;
    }

    .file-name {
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .file-size {
      font-size: 12px;
      color: var(--gc-color-text-secondary, #666666);
    }

    .file-progress {
      width: 100%;
      height: 8px;
      background: var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
      margin-top: 8px;
    }

    .file-progress-bar {
      height: 100%;
      background: var(--gc-color-success, #2e7d32);
      transition: width 0.3s ease;
    }

    .file-status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      margin-top: 4px;
    }

    .file-status.completed {
      color: var(--gc-color-success, #2e7d32);
    }

    .file-status.error {
      color: var(--gc-color-error, #d32f2f);
    }

    .file-remove {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: transparent;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      color: var(--gc-color-text-secondary, #666666);
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .file-remove:hover {
      background: var(--gc-color-error, #d32f2f);
      color: white;
      border-color: var(--gc-color-error, #d32f2f);
    }

    .file-remove:focus-visible {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .error-message {
      color: var(--gc-color-error, #d32f2f);
      font-size: 14px;
      margin-top: 12px;
      padding: 12px;
      background: #ffebee;
      border-radius: 4px;
      border-left: 4px solid var(--gc-color-error, #d32f2f);
    }

    @media (max-width: 768px) {
      .upload-container {
        padding: 24px 16px;
      }

      .file-item {
        flex-wrap: wrap;
      }

      .file-info {
        flex-basis: 100%;
      }
    }

    @media print {
      .upload-container,
      .file-remove {
        display: none;
      }
    }
  `;

  @property({ type: String })
  accept = '';

  @property({ type: Number, attribute: 'max-size' })
  maxSize = 10485760; // 10MB default

  @property({ type: Number, attribute: 'max-files' })
  maxFiles = 10;

  @property({ type: Boolean })
  multiple = true;

  @property({ type: Boolean, attribute: 'show-preview' })
  showPreview = true;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @state()
  private files: FileMetadata[] = [];

  @state()
  private isDragOver = false;

  @state()
  private error = '';

  @query('input[type="file"]')
  private fileInput!: HTMLInputElement;

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = this.lang === 'fr' 
      ? ['Octets', 'Ko', 'Mo', 'Go']
      : ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }

  private validateFile(file: File): string | null {
    if (this.maxSize && file.size > this.maxSize) {
      return this.lang === 'fr'
        ? `Le fichier est trop volumineux. Taille maximale : ${this.formatFileSize(this.maxSize)}`
        : `File is too large. Maximum size: ${this.formatFileSize(this.maxSize)}`;
    }

    if (this.accept) {
      const acceptedTypes = this.accept.split(',').map(t => t.trim());
      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type.match(type.replace('*', '.*'));
      });

      if (!isAccepted) {
        return this.lang === 'fr'
          ? `Type de fichier non accepté. Types acceptés : ${this.accept}`
          : `File type not accepted. Accepted types: ${this.accept}`;
      }
    }

    return null;
  }

  private handleFiles(fileList: FileList) {
    this.error = '';
    const newFiles = Array.from(fileList);

    if (this.files.length + newFiles.length > this.maxFiles) {
      this.error = this.lang === 'fr'
        ? `Nombre maximum de fichiers dépassé (${this.maxFiles})`
        : `Maximum number of files exceeded (${this.maxFiles})`;
      return;
    }

    const validatedFiles: FileMetadata[] = [];

    for (const file of newFiles) {
      const error = this.validateFile(file);
      if (error) {
        this.error = error;
        continue;
      }

      validatedFiles.push({
        id: `${Date.now()}-${Math.random()}`,
        name: file.name,
        size: file.size,
        type: file.type,
        file,
        status: 'pending'
      });
    }

    if (validatedFiles.length > 0) {
      this.files = [...this.files, ...validatedFiles];
      this.dispatchEvent(new CustomEvent('files-selected', {
        detail: { files: validatedFiles },
        bubbles: true,
        composed: true
      }));
    }
  }

  private handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    this.isDragOver = true;
  };

  private handleDragLeave = () => {
    this.isDragOver = false;
  };

  private handleDrop = (e: DragEvent) => {
    e.preventDefault();
    this.isDragOver = false;
    
    if (e.dataTransfer?.files) {
      this.handleFiles(e.dataTransfer.files);
    }
  };

  private handleFileSelect = (e: Event) => {
    const input = e.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
      input.value = ''; // Reset input
    }
  };

  private handleBrowseClick = () => {
    this.fileInput.click();
  };

  private removeFile(fileId: string) {
    this.files = this.files.filter(f => f.id !== fileId);
    this.dispatchEvent(new CustomEvent('file-remove', {
      detail: { fileId },
      bubbles: true,
      composed: true
    }));
  }

  private isImageFile(type: string): boolean {
    return type.startsWith('image/');
  }

  private getFilePreview(file: FileMetadata): string | null {
    if (!this.showPreview || !this.isImageFile(file.type)) {
      return null;
    }
    return URL.createObjectURL(file.file);
  }

  override render() {
    const title = this.lang === 'fr' 
      ? 'Glissez-déposez vos fichiers ici'
      : 'Drag and drop your files here';
    const subtitle = this.lang === 'fr'
      ? 'ou cliquez pour parcourir'
      : 'or click to browse';
    const browseButton = this.lang === 'fr' ? 'Parcourir' : 'Browse';
    const removeLabel = this.lang === 'fr' ? 'Supprimer' : 'Remove';

    return html`
      <div>
        <div
          class="upload-container ${this.isDragOver ? 'drag-over' : ''}"
          @dragover="${this.handleDragOver}"
          @dragleave="${this.handleDragLeave}"
          @drop="${this.handleDrop}"
          @click="${this.handleBrowseClick}"
        >
          <svg class="upload-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
          </svg>
          
          <h3 class="upload-title">${title}</h3>
          <p class="upload-subtitle">${subtitle}</p>
          
          <button 
            class="upload-button"
            @click="${(e: Event) => e.stopPropagation()}"
          >
            ${browseButton}
          </button>

          ${this.accept || this.maxSize ? html`
            <div class="upload-constraints">
              ${this.accept ? html`
                ${this.lang === 'fr' ? 'Types acceptés' : 'Accepted types'}: ${this.accept}<br>
              ` : ''}
              ${this.maxSize ? html`
                ${this.lang === 'fr' ? 'Taille maximale' : 'Maximum size'}: ${this.formatFileSize(this.maxSize)}
              ` : ''}
            </div>
          ` : ''}

          <input
            type="file"
            class="file-input"
            ?multiple="${this.multiple}"
            accept="${this.accept}"
            @change="${this.handleFileSelect}"
            aria-label="${title}"
          />
        </div>

        ${this.error ? html`
          <div class="error-message" role="alert">
            ${this.error}
          </div>
        ` : ''}

        ${this.files.length > 0 ? html`
          <div class="files-list">
            ${this.files.map(file => {
              const preview = this.getFilePreview(file);
              return html`
                <div class="file-item">
                  ${preview ? html`
                    <img src="${preview}" alt="${file.name}" class="file-preview" />
                  ` : html`
                    <div class="file-icon">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                    </div>
                  `}
                  
                  <div class="file-info">
                    <p class="file-name">${file.name}</p>
                    <span class="file-size">${this.formatFileSize(file.size)}</span>
                    
                    ${file.progress !== undefined ? html`
                      <div class="file-progress">
                        <div class="file-progress-bar" style="width: ${file.progress}%"></div>
                      </div>
                    ` : ''}
                    
                    ${file.status && file.status !== 'pending' ? html`
                      <div class="file-status ${file.status}">
                        ${file.status === 'completed' ? '✓' : file.status === 'error' ? '✗' : ''}
                        ${file.error || ''}
                      </div>
                    ` : ''}
                  </div>

                  <button
                    class="file-remove"
                    aria-label="${removeLabel} ${file.name}"
                    @click="${() => this.removeFile(file.id)}"
                  >
                    ✕
                  </button>
                </div>
              `;
            })}
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-file-upload': EvaGCFileUpload;
  }
}
