import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurant {
    static async listRestaurant() {
        const res = await fetch(API_ENDPOINT.LIST_RESTAURANT);
        const resJSON = await res.json();
        return resJSON.restaurants;
    }

    static async detailRestaurant(id) {
        const res = await fetch(API_ENDPOINT.DETAIL_OF_RESTAURANT(id));
        return res.json();
    }

    static async sendReview(payload) {
        await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
    }
}

export default DicodingRestaurant;
