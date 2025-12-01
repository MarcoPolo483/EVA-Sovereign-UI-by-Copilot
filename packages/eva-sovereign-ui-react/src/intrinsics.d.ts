import './types';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'eva-gc-button': any;
      'eva-gc-header': any;
      'eva-gc-footer': any;
      'eva-language-switcher': any;
      'eva-chat-panel': any;
    }
  }
}
