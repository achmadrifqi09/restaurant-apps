import CONFIG from '../../../globals/config';
import '../button/button-link';

class Card extends HTMLElement {
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
                    overflow: hidden;
                    color: white;
                }
                .card span {
                    display: block;
                }
                .card-body {
                    padding: 12px;
                }
                .card-img {
                    border-radius: 8px 8px 0px 0px;
                }
                .card-title {
                    font-size: 16pt;
                }
                .card-city {
                    position: absolute;
                    border-radius: 8px;
                    margin-top: 24px;
                    margin-left: 12px;
                    padding: 4px 8px;
                    width: min-content;
                    background-color: var(--primary-color);
                }
                .card-desc {
                    font-size: 10pt;
                    color: rgb(219, 217, 217);
                }
                img{
                    width: 100%;
                }
                a {
                    text-decoration: none;
                    display:block;
                    max-width: min-content;
                }
                .button-primary {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 12px 16px;
                    border-radius: 8px;
                    font-size: 12pt;
                    margin-top:16px;
                }
                .card-header{
                    min-height: 220px;
                }
                </style>
                
                 <div class="card">
                    <div class="card-header">
                        <span class="card-city">${this._content.city}</span>
                        <img class="card-image" alt="photo of ${this._content.name}" src="${CONFIG.BASE_IMAGE_URL + this._content.pictureId}">
                    </div>
                    <div class="card-body">
                        <span class="card-rating">⭐️${this._content.rating}</span>
                        <span class="card-title">${this._content.name}</a>
                        <span class="card-desc">${this._content.description.substr(0, 300)}...</span>
                        <button-link text="Detail" url=#/detail/${this._content.id}></button-link>
                    </div>
                </div>`;
        }
    }
}

customElements.define('card-image', Card);
