const createCardIconTemplate = (data) => `
  <div class="card-icon">
    <div class="card-icon-header">
        <img class="card-icon-image" alt="icon ${data.name}" src="/icons/food-drink.webp">
    </div>
    <div class="card-icon-body">
      <span class="card-icon-title">${data.name}</span>
      </div>
  </div>`;

export default createCardIconTemplate;