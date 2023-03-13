import '../components/layout/grid';
import FavoriteRestaurant from '../../datas/favorite-restaurant';

const Favorite = {
    async render() {
        return `
        <style>
        .container{
            min-height: 100vh;
            padding-top: 88px;
        }
        </style>
        <div class="container">
            <div class="wrapper-main-content" id="mainContent" tabindex="0">
                <h2>Favorite Restaurant</h2>
                <grid-layout itemStyle="card-image" minWidthItem="300"></grid-layout>
            </div>   
         </div>
    `;
    },

    async afterRender() {
        const preferredRestaurants =
            await FavoriteRestaurant.getAllRestaurant();
        const listOfRestaurant = document.querySelector('grid-layout');

        listOfRestaurant.contents = preferredRestaurants;

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
