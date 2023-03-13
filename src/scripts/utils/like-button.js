import FavoriteRestaurant from '../datas/favorite-restaurant';
import '../views/components/button/floating-button';

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
        this._likeButtonContainer.innerHTML =
            '<floating-button id="likeButton" urlIcon="/icons/unlike.webp" aria-label="like-button"></floating-button>';

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML =
            '<floating-button id="likeButton" urlIcon="/icons/like.webp" aria-label="unlike-button"></floating-button>';

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButton;