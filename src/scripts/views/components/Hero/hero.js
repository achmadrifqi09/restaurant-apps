import '../button/button-link';

class HeroComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    set content(contents) {
        this._contents = contents;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            .hero {
                min-height: 100vh;
                background-image: url(${this._contents.urlImage});
                background-position: center;
                background-size: cover;
                background-attachment: fixed;
            }
            .hero-bg {
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-direction: column;
                box-sizing: border-box;
                padding: 0px var(--content-pading-xl);
            }

            .hero .title {
                font-size: 24pt;
                font-weight: 600;
                text-align: center;
            }

            .hero .sub-title {
                text-align: center;
                margin-bottom: 32px;
            }

            .hero button {
                 margin-top: 36px;
            }

            .button-primary {
                background-color: var(--primary-color);
                color: white;
                border: none;
                padding: 12px 16px;
                border-radius: 8px;
                font-size: 12pt;
                text-decoration: none;
            }
        </style>
        <section class="hero" id="hero">
            <div class="hero-bg">
                <span class="title">${this._contents.heading}</span>
                <span class="sub-title">
                   ${this._contents.subheading}
                </span>
                <button-link
                    text=" ${this._contents.cta_text}"
                    url="#restaurant"
                >
                </button-link>
            </div>
        </section>`;
    }
}

customElements.define('hero-component', HeroComponent);
