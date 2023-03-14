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
            }
            .bg{
                width : 100vw;
                height : 100vh;
                object-fit: cover;
                position: absolute;
                z-index: 0;
            }

            .hero-content{
                position: relative;
                z-index: 1;
                width : 100vw;
                height : 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0px var(--content-pading-xl);
                box-sizing: border-box;
                background: rgba(0, 0, 0, 0.6);
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
             <picture>
                <source
                    class="bg"
                    media="(max-width: 600px)"
                    srcset="${this._contents.urlImageSmall}"/>
                <img
                     class="bg"
                    src="${this._contents.urlImageLarge}"
                    alt="logo RestoX"/>
            </picture>
            <div class="hero-content">
                <span class="title">${this._contents.heading}</span>
                <span class="sub-title">
                ${this._contents.subheading}
                </span>
                <button-link
                    text=" ${this._contents.cta_text}"
                    url="#mainContent">
                </button-link>
            <div>
        </section>`;
    }
}

customElements.define('hero-component', HeroComponent);
