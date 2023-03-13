import CONFIG from '../../../globals/config';
import '../badge/badge';

class HeroDetail extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    set contents(contents) {
        this._contents = contents;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                .wrapper-header{
                    width: 100%;
                    height: 30vh;
                    padding-top:120px;
                    background: url('${CONFIG.BASE_IMAGE_URL}/${this._contents.pictureId}');
                    background-repeat: no-repeat;
                    background-size:cover;
                    background-position:center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index:0;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    flex-direction: column;
                }
                .wrapper-header::before{
                    content: " "; 
                    width: 100%;
                    height: 50vh;
                    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(10,11,13,1) 75%);
                    top: 0;
                    left: 0;
                    right:0;
                    position: absolute;
                    z-index:-1;
                }
                .title{
                    color:white;
                    font-size: 24pt;
                    font-weight:600;
                    margin:0px;
                    margin-bottom:12px;
                }
                .address{
                    margin-top: 16px;
                }
                .rating{
                    font-weight: 500;
                    color: #ed9338;
                }
                
            </style>
                
            <div class="wrapper-header">
                <h1 class="title">${this._contents.name}</h1>
                <div class="badge-wrapper"></div>
                <span class="address">${this._contents.address} ${this._contents.city}</span>
                <span class="rating">⭐️ ${this._contents.rating}</span>
            </div>`;
        this._contents.categories.forEach((category) => {
            const badge = document.createElement('badge-component');
            badge.value = category.name;
            this._shadowRoot.querySelector('.badge-wrapper').appendChild(badge);
        });
    }
}

customElements.define('header-detail', HeroDetail);
