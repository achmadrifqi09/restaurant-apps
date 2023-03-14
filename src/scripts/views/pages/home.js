import '../components/Hero/hero';
import heroContent from '../../../hero-data.json';
import DicodingRestaurant from '../../datas/restaurant-source';
import '../components/toast/toast';
import createCardImageTemplate from '../templates/card-image';

const Home = {
    async render() {
        return `
            <div class="container">
                <hero-component></hero-component>
                <div class="wrapper-main-content" id="mainContent" tabindex="0">
                    <h2>Explore Restaurant</h2>
                    <div class="grid-large-items"></div>
                </div>   
            </div>
    `;
    },

    async afterRender() {
        const hero = document.querySelector('hero-component');
        const wrapperCardRestaurant = document.querySelector('.grid-large-items');
        hero.content = heroContent;
        try {
            const dataRestaurant = await DicodingRestaurant.listRestaurant();
            dataRestaurant.forEach((restaurant) => {
                wrapperCardRestaurant.innerHTML +=
                    createCardImageTemplate(restaurant);
            });
        } catch {
            const container = document.querySelector('.container');
            const toast = document.createElement('toast-component');
            toast.setAttribute('message', 'failed to load restaurant');
            toast.setAttribute('aria-label', 'failed-fetch');
            container.appendChild(toast);
        }
    },
};

export default Home;
