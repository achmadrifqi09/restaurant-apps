import DicodingRestaurant from '../../datas/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButton from '../../utils/like-button';
import createCardIconTemplate from '../templates/card-icon';
import '../components/form/form-review';
import '../components/header/header-detail';
import '../components/list/list-review';
import '../components/toast/toast';

const Detail = {
    async render() {
        return `
        <div class="container">
            <div class="wrapper-main-content" id="mainContent" tabindex="0">
                <header-detail></header-detail>
                <div class="wrapper-column">
                    <div class="wrapper-left-content">
                        <div class="wrapper-desc">
                            <h2>Description</h2>
                            <span class="desc"></span>
                        </div>
                        <div class="wrapper-food">
                            <h2>Food Menu</h2>
                            <div class="grid-small-items" id="wrapperFood"></div>
                        </div>
                        <div class="wrapper-drink">
                            <h2>Drink Menu</h2>
                            <div class="grid-small-items" id="wrapperDrink"></div>
                    </div>
                </div>
                <div class="wrapper-right-content">
                    <h2>Customer Review</h2>
                    <div class="review-container"></div>
                </div>
            <div>
            </div>
        </div>
        <div class="button-container"></div>`;
    },

    async afterRender() {
        const header = document.querySelector('header-detail');
        const desc = document.querySelector('.desc');
        const drinkContainer = document.querySelector('#wrapperDrink');
        const foodContainer = document.querySelector('#wrapperFood');
        const reviewConteiner = document.querySelector('.wrapper-right-content');
        const likeButtonContainer = document.querySelector('.button-container');

        try {
            const url = UrlParser.parseActiveUrlWithoutCombiner();
            const response = await DicodingRestaurant.detailRestaurant(url.id);
            const { restaurant } = response;

            header.contents = restaurant;
            desc.innerHTML = restaurant.description;

            restaurant.menus.foods.forEach((food) => {
                foodContainer.innerHTML += createCardIconTemplate(food);
            });

            restaurant.menus.drinks.forEach((drink) => {
                drinkContainer.innerHTML += createCardIconTemplate(drink);
            });

            restaurant.customerReviews.forEach((review) => {
                const reviewBox = document.createElement('customer-reviews');
                reviewBox.review = review;
                reviewConteiner.appendChild(reviewBox);
            });

            const formReview = document.createElement('form-review');
            reviewConteiner.appendChild(formReview);
            formReview.addEventListener('submit', () => {
                const payload = {
                    id: `${url.id}`,
                    name: document.querySelector('#name').value,
                    review: document.querySelector('#message').value,
                };
                DicodingRestaurant.sendReview(payload);
            });
            LikeButton.init({
                likeButtonContainer,
                restaurant,
            });
        } catch {
            const container = document.querySelector('.wrapper-main-content');
            const toast = document.createElement('toast-component');
            toast.setAttribute('message', 'failed to load detail restaurant');
            container.appendChild(toast);
            const failedText = document.createElement('span');
            failedText.textContent = 'No content is served';

            desc.innerHTML = 'No content is served';
            foodContainer.innerHTML = 'No content is served';
            drinkContainer.innerHTML = 'No content is served';
            reviewConteiner.appendChild(failedText);
        }
    },
};

export default Detail;
