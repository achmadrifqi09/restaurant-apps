import createCardImageTemplate from '../templates/card-image';
import FavoriteRestaurant from '../../datas/favorite-restaurant';

const Favorite = {
    async render() {
        return `
        <div class="container">
            <div class="wrapper-main-content" id="mainContent" tabindex="0">
                <h2>Favorite Restaurant</h2>
                <div class="grid-large-items" id="favoriteWrapper"></div>
            </div>   
         </div>
    `;
    },

    async afterRender() {
        const preferredRestaurants = await FavoriteRestaurant.getAllRestaurant();
        const restaurantContainer = document.querySelector('#favoriteWrapper');

        preferredRestaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createCardImageTemplate(restaurant);
        });

        if (preferredRestaurants.length === 0) {
            const container = document.querySelector('.container');
            const toast = document.createElement('toast-component');
            toast.setAttribute('message', 'Empty favorites list');
            toast.setAttribute('aria-label', 'empty-list');
            container.appendChild(toast);
        }
    },
};

export default Favorite;
