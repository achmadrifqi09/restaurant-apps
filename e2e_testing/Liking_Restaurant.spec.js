Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

// Scenario('displays an empty favorites page', ({ I }) => {
//     I.see('Empty favorites list', '[aria-label="empty-list"]');
// });

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Empty favorites list', '[aria-label="empty-list"]');

    I.amOnPage('/');
    pause();
    I.waitForElement('card-image', 5);
});
