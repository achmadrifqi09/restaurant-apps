import '../card/card-image';

class Grid extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.itemStyle = this.getAttribute('itemStyle') || null;
        this.minWidthItem = this.getAttribute('minWidthItem') || null;
    }

    set contents(contents) {
        this._contents = contents;
        this.render();
    }

    render() {
        const styleCardList = document.createElement('style');
        this._shadowRoot.appendChild(styleCardList);
        styleCardList.innerHTML = `
           :host {
                width: 100%;
                display: grid;
                justify-items: center;
                align-items: center;
                gap: 16px;
                grid-template-columns: repeat(auto-fill, minmax(${this.minWidthItem}px, 1fr));
            }
        `;

        this._contents.forEach((content) => {
            const card = document.createElement(this.itemStyle);
            card.content = content;
            this._shadowRoot.appendChild(card);
        });
    }
}
customElements.define('grid-layout', Grid);
