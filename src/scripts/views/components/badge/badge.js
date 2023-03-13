class Badge extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    set value(value) {
        this._value = value;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                .badge{
                    background-color: #ed9338;
                    padding: 4px 12px;
                    margin-right: 8px;
                    border-radius: 8px
                }
            </style>
            <span class="badge">${this._value}</span>
        `;
    }
}

customElements.define('badge-component', Badge);
