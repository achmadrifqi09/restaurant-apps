class ButtonSumbit extends HTMLElement {
    connectedCallback() {
        this.text = this.getAttribute('text') || null;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .button-link {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 12px 16px;
                    border-radius: 8px;
                    font-size: 12pt;
                    text-decoration: none;
                    margin: 8px 0px;
                    min-height: 44px;
                }
            </style>
            <button type="submit" class="button-link">${this.text}</button>
        `;
    }
}
customElements.define('button-submit', ButtonSumbit);
