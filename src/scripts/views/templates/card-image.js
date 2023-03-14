import CONFIG from '../../globals/config';

const createCardImageTemplate = (data) => `
  <div class="card">
    <div class="card-header">
      <span class="card-city">${data.city}</span>
      <img class="card-image lazyload" alt="photo of ${data.name}" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}">
    </div>
    <div class="card-body">
      <span class="card-rating">⭐️${data.rating}</span>
      <span class="card-title">${data.name}</span>
      <span class="card-desc">${data.description.substr(0,300)}...</span>
      <a class="button-primary" href=#/detail/${data.id} aria-label="button-detail" id="buttonDetail">Detail</a>
    </div>
  </div>
`;

export default createCardImageTemplate;