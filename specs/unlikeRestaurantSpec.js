import FavoriteRestaurant from '../src/scripts/datas/favorite-restaurant';
import * as TestFactories from './helper/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = ' <div class="button-container"></div>';
};

describe('unlike restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurant.putRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });
    });

    afterEach(async () => {
        await FavoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        expect(
            document.querySelector('[aria-label="unlike"]')
        ).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        expect(
            document.querySelector('[aria-label="like"]')
        ).toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        document
            .querySelector('[aria-label="unlike"]')
            .dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        await FavoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });
});
