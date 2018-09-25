// feedreader.js
// All tests are within the #() function to ensure they do not run until the DOM is ready.

$(function () {
    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loops through each feed in the allFeeds object. Each feed must have and that URL cannot be empty.
        it('all feeds have an URL defined and the URL is not empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Loops through each feed in the allFeeds object. Each feed must have a name and that name cannot be empty.
        it('all feeds have a name defined and the name is not empty', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });

    describe('The Menu', () => {
        // Tests that menu element is hidden by default.
        it('menu is hidden by default', () => {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
        // Tests that the menu changes visibility when the menu item ti clicked. Toggles between visible and not visible when clicked.
        it('menu changes visibility on click', () => {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('Initial Entries', () => {
        // Tests that the loadFeed function is called and stops running there is at least one .entry element withing the .feed container.

        beforeEach(done => {
            loadFeed(0, done);
        });

        it('at least one entry found when loadFeed function is called and done', () => {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', () => {
        // Tests that when a new feed is loaded the content presented changes.
        let feedOne,
            feedTwo;

        beforeEach(done => {
            // load first feed
            loadFeed(0, function () {
                feedOne = $(".feed").html();
            });
            // load second feed
            loadFeed(1, function () {
                feedTwo = $(".feed").html();
                done();
            });
        });

        it('when a new feed is loaded by the loadFeed function that the content changes', () => {
            expect(feedOne === feedTwo).toBe(false);
        });
    });

}());