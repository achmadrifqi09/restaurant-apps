import '../components/Hero/hero';
import heroContent from '../../../hero-data.json';
import DicodingRestaurant from '../../datas/restaurant-source';
import '../components/toast/toast';

const Home = {
    async render() {
        return `
            <div class="container">
                <hero-component></hero-component>
                <div class="wrapper-main-content" id="mainContent" tabindex="0">
                    <h2>Explore Restaurant</h2>
                    <grid-layout itemStyle="card-image" minWidthItem="300"></grid-layout>
                </div>   
            </div>
    `;
    },

    async afterRender() {
        const hero = document.querySelector('hero-component');
        const listOfRestaurant = document.querySelector('grid-layout');
        hero.content = heroContent;
        try {
            const dataRestaurant = await DicodingRestaurant.listRestaurant();
            listOfRestaurant.contents = dataRestaurant;
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
