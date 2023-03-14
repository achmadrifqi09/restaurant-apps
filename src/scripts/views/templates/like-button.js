const createLikeButtonTemplate = (action) => `
 <button type="button" class="floating-button" id="likeButton" aria-label="${action}">
    <img src="/icons/${
        action === 'like' ? 'unlike' : 'like'
    }.webp" alt="icon button">
  </button>
`;

export default createLikeButtonTemplate;
