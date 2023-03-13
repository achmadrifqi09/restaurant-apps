class Toast extends HTMLElement {
    connectedCallback() {
        this.message = this.getAttribute('message') || null;
        this.ariaLabel = this.getAttribute('aria-label') || null;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .toast{
                    padding: 24px;
                    border: rgba(111, 111, 111, 0.373) solid 1px;
                    background-color: #0a0b0d;
                    position: fixed;
                    z-index: 3;
                    bottom: 24px;
                    left: 24px;
                    border-radius: 8px;
                    color:white;
                }
            </style>
            <div class="toast">
                <span aria-lable="${this.ariaLabel}">${this.message}</span>
            </div>
        `;
    }
}
customElements.define('toast-component', Toast);
