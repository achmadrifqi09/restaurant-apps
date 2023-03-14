import FavoriteRestaurant from '../datas/favorite-restaurant';
import createLikeButtonTemplate from '../views/templates/like-button';

const LikeButton = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;
        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate('like');

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate('unlike');
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButton;
