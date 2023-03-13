import '../list/list-review';
import '../card/card-text';
import '../form/form-review';

class ColumnComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.itemStyle = this.getAttribute('itemStyle') || null;
    }

    set contents(contents) {
        this._contents = contents;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                .wrapper-column {
                    width: 100%;
                    display: flex;
                    gap: 32px;
                    padding:32px 90px;
                    box-sizing: border-box;
                    position: relative;
                    z-index: 0;
                    margin-top: 40vh;
                   
                }
                .wrapper-right-content{
                    font-size: 10pt;
                    width: 3 0%;
                    
                }
                .wrapper-left-content{
                    width: 70%;
                }
                @media (max-width: 768px) {
                    .wrapper-column {
                        flex-direction:column;
                        padding: 0px 46px;
                    }
                    .wrapper-review{
                        max-width: 100%;
                    }
                    .wrapper-left-content{
                        width: 100%;
                    }
                     .wrapper-right-content{
                        max-width: 100%;
                    }
                }
                @media (max-width: 576px) {
                    .wrapper-column {
                        padding: 0px 24px;
                    }
                }
               
            </style>
            
            <div class="wrapper-column">
                <div class="wrapper-left-content">
                    <div class="wrapper-desc">
                        <h2>Description</h2>
                        <span>${this._contents.description}</span>
                    </div>
                    <div class="wrapper-food">
                        <h2>Food Menu</h2>
                        <grid-layout itemStyle="card-text" minWidthItem="120"></grid-layout>
                    </div>
                    <div class="wrapper-drink">
                        <h2>Drink Menu</h2>
                        <grid-layout itemStyle="card-text" minWidthItem="120"></grid-layout>
                    </div>
                </div>
                <div class="wrapper-right-content">
                    <h2>Customer Review</h2>
                </div>
            <div>
        `;
        const reviewConteiner = this._shadowRoot.querySelector('.wrapper-right-content');
        this._contents.customerReviews.forEach((review) => {
            const reviewBox = document.createElement('customer-reviews');
            reviewBox.review = review;
            reviewConteiner.appendChild(reviewBox);
        });
        const formReview = document.createElement('form-review');
        reviewConteiner.appendChild(formReview);

        const food = this._shadowRoot.querySelector('.wrapper-food').querySelector('grid-layout');
        food.contents = this._contents.menus.foods;

        const drink = this._shadowRoot.querySelector('.wrapper-drink').querySelector('grid-layout');
        drink.contents = this._contents.menus.drinks;
    }
}

customElements.define('column-detail', ColumnComponent);
