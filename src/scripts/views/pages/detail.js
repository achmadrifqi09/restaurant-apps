import '../components/badge/badge';
import '../components/header/header-detail';
import '../components/layout/column-detail';
import DicodingRestaurant from '../../datas/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButton from '../../utils/like-button';

const Detail = {
    async render() {
        return `
        <div class="container">
            <div class="wrapper-main-content" id="mainContent" tabindex="0">
                <header-detail></header-detail>
                <column-detail></column-detail>
            </div>
        </div>
        <div class="button-container"></div>`;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        try {
            const response = await DicodingRestaurant.detailRestaurant(url.id);
            const restaurant = response.restaurant;
            const header = document.querySelector('header-detail');
            const column = document.querySelector('column-detail');

            column.contents = restaurant;
            header.contents = restaurant;
            const form = document
                .querySelector('column-detail')
                .shadowRoot.querySelector('form');

            form.addEventListener('submit', () => {
                const payload = {
                    id: `${url.id}`,
                    name: document
                        .querySelector('column-detail')
                        .shadowRoot.querySelector('#name').value,
                    review: document
                        .querySelector('column-detail')
                        .shadowRoot.querySelector('#message').value,
                };
                DicodingRestaurant.sendReview(payload);
            });
            LikeButton.init({
                likeButtonContainer:
                    document.querySelector('.button-container'),
                restaurant,
            });
        } catch {
            const container = document.querySelector('.wrapper-main-content');
            const toast = document.createElement('toast-component');
            toast.setAttribute('message', 'failed to load detail restaurant');
            container.appendChild(toast);
        }
    },
};

export default Detail;
