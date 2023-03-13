class FloatingButton extends HTMLElement {
    connectedCallback() {
        this.urlIcon = this.getAttribute('urlIcon') || null;
        this.id = this.getAttribute('id') || null;
        this.ariaLabel = this.getAttribute('aria-label') || null;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .floating-button {
                    background-color: var(--primary-color);
                    width: 44px;
                    height: 44px;
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 100%;
                    text-decoration: none;
                    box-sizing:border-box;
                    position: fixed;
                    z-index: 2;
                    bottom: 32px;
                    right: 32px;
                }
                .floating-button img{
                    width: 100%;
                }
            </style>
            <button type="button" class="floating-button" id="${this.id}" aria-label="${this.ariaLabel}">
                <img src="${this.urlIcon}" alt="icon button">
            </button>
        `;
    }
}
customElements.define('floating-button', FloatingButton);
