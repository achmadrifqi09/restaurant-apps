const assert = require('assert');
Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('displays an empty favorites page', ({ I }) => {
    I.see('Empty favorites list', '[aria-label="empty-list"]');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Empty favorites list', '[aria-label="empty-list"]');

    I.amOnPage('/');

    I.seeElement('.card');

    const firstCard = locate('.card-title').first();
    const firstCardTitle = await I.grabTextFrom(firstCard);

    const firstRestaurant = locate('[aria-label="button-detail"]').first();
    I.click(firstRestaurant);

    I.seeElement('[aria-label="like"]');
    I.click('[aria-label="like"]');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.card-title');

    assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unlike one restaurant', async ({ I }) => {
    I.see('Empty favorites list', '[aria-label="empty-list"]');

    I.amOnPage('/');

    I.seeElement('.card');

    const firstCard = locate('.card-title').first();
    const firstCardTitle = await I.grabTextFrom(firstCard);

    const firstRestaurant = locate('[aria-label="button-detail"]').first();
    I.click(firstRestaurant);

    I.seeElement('[aria-label="like"]');
    I.click('[aria-label="like"]');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.card-title');

    assert.strictEqual(firstCardTitle, likedCardTitle);

    const firstLikedRestaurant = locate('[aria-label="button-detail"]').first();
    I.click(firstLikedRestaurant);

    I.seeElement('[aria-label="unlike"]');
    I.click('[aria-label="unlike"]');

    I.amOnPage('/#/favorite');
    I.see('Empty favorites list', '[aria-label="empty-list"]');
});
