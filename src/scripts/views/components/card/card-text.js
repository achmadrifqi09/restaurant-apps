import '../button/button-link';

class CardText extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    set content(content) {
        this._content = content;
        this.render();
    }

    render() {
        if (this._content !== undefined) {
            this._shadowRoot.innerHTML = `
                <style>                
                    .card {
                        border: rgba(111, 111, 111, 0.373) solid 1px;
                        border-radius: 8px;
                        color: white;
                        padding: 8px;
                        width: 120px;
                        height: 140px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        
                    }
                    .card span {
                        display: block;
                    }
                    .card-header{
                        display:flex;
                        justify-content:center;
                        align-items: center
                    }
                    .card-body {
                        margin-top: 12px;
                    }
                    .card-img {
                        border-radius: 8px 8px 0px 0px;
                    }
            
                    .card-title {
                        font-size: 10pt;
                        text-align:center;
                    }
                
                    img{
                        max-width: 42px;
                        margin:auto 0px;
                    }
                </style>
                 <div class="card">
                    <div class="card-header">
                        <img class="card-image" alt="icon ${this._content.name}" src="/icons/food-drink.webp">
                    </div>
                    <div class="card-body">
                        <span class="card-title">${this._content.name}</span>
                    </div>
                </div>`;
        }
    }
}

customElements.define('card-text', CardText);
