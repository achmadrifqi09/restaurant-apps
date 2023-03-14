import FavoriteRestaurant from '../src/scripts/datas/favorite-restaurant';
import * as TestFactories from './helper/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = ' <div class="button-container"></div>';
};

describe('like restaurant', () => {
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });
        expect(document.querySelector('[aria-label="like"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        expect(document.querySelector('[aria-label="unlike"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurant.getRestaurant(
            'rqdv5juczeskfw1e867'
        );

        expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });
        FavoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');
    });
    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        await FavoriteRestaurant.putRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        FavoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        await FavoriteRestaurant.putRestaurant({
            id: 'rqdv5juczeskfw1e867',
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([
            { id: 'rqdv5juczeskfw1e867' },
        ]);

        FavoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');
    });

    it('should not add a restaurant when it has no id', async () => {
        const button =
            await TestFactories.createLikeButtonPresenterWithRestaurant({});
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });
});
