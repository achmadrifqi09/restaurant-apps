import LikeButton from '../../src/scripts/utils/like-button';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButton.init({
        likeButtonContainer: document.querySelector('.button-container'),
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
