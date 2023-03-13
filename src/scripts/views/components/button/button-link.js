class Button extends HTMLElement {
    connectedCallback() {
        this.text = this.getAttribute('text') || null;
        this.url = this.getAttribute('url') || null;
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
                }
            </style>
            <a href="${this.url}" class="button-link">${this.text}</a>
        `;
    }
}
customElements.define('button-link', Button);
