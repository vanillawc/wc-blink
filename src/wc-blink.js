/* eslint no-undef: 0 */
export class WCBlink extends HTMLElement {
  constructor () {
    super();
    const template = document.createElement('template');
    template.innerHTML = WCBlink.default();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(document.importNode(template.content, true));
  }

  static default () {
    return `
      <style>
      .blink {
        -webkit-animation: 2s linear infinite condemned_blink_effect; // for Safari 4.0 - 8.0
        animation: 2s linear infinite condemned_blink_effect;
      }
      @-webkit-keyframes condemned_blink_effect { // for Safari 4.0 - 8.0
        0% {
          visibility: hidden;
        }
        50% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
      }
      @keyframes condemned_blink_effect {
        0% {
          visibility: hidden;
        }
        50% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
      }
      </style>
      <p class="blink" style="width: inherit;"><span><slot></slot></span></p>
    `;
  }
}

customElements.define('wc-blink', WCBlink);
