class Review extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    set review(review) {
        this._review = review;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
            .wrapper-content-review{
                width: 100%;
                margin: 24px 0px;
                border-bottom: 1px solid grey;
                padding-bottom: 8px;
                  
            }
            .review-message{
                display:block;
                font-size:12pt;
            }
            .reviewer{
                color: grey;
            }
            </style>
            <div class="customer-review">
                <div class="wrapper-content-review">
                    <span class="reviewer">${this._review.name} • ${this._review.date}</span>
                    <span class="review-message">${this._review.review}</span>
                </div>
            </div>
                
        `;
    }
}

customElements.define('customer-reviews', Review);
