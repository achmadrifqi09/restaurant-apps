import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurant from '../src/scripts/datas/favorite-restaurant';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurant.getAllRestaurant()).forEach(
            async (restaurant) => {
                await FavoriteRestaurant.deleteRestaurant(restaurant.id);
            }
        );
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
