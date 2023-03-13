import CONFIG from './config';

const API_ENDPOINT = {
    LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
    POST_REVIEW: `${CONFIG.BASE_URL}/review`,
    DETAIL_OF_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    URL_IMAGE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/${pictureId}`,
};

export default API_ENDPOINT;
