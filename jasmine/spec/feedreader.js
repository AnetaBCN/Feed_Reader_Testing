/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


         /* TODO:The test loops over allFeeds array and URL´s properties.
         The length of the URL´s elements cannot be equal to 0.
         */
         it("should have a URL defined and ensure that is not empty", function() {
           allFeeds.forEach(function(element){
             feed=element.url;
             expect(feed).toBeDefined();
             expect(feed.length).not.toBe(0);
           });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         /* TODO:The test loops over allFeeds array and name´s properties.
         The length of the name´s elements cannot be equal to 0.
         */

         it("should have a name defined and ensure that is not empty", function() {
           allFeeds.forEach(function(element){
             feedName=element.name;
             expect(feedName).toBeDefined();
             expect(feedName.length).not.toBe(0);
           });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */

       /* TODO:At this place, a test looks within a body for a class "menu-hidden"
       that is "responsible" for hide the side menu.
       */

       it("ensure that the menu element is hidden", function(){
         expect($("body").hasClass("menu-hidden")).toBe(true);
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        /* TODO: The event is provided by clicking a menu icon in the left top corner.
        When a menu icon is clicked first time, a menu-hidden class is turned to the false
        (a class dissapears and menu is shown). When a menu icon is clicked again, the menu
        hides because of adding again menu-hidden class. 
        */

        it("ensure that changes visibility when the menu icon is clicked.", function(){
          $('.menu-icon-link').click();
          expect($("body").hasClass("menu-hidden")).toBe(false);
          $('.menu-icon-link').click();
          expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });



    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        it ("ensure that there is at least a single .entry element within the .feed container", function(){
          let numberElements=$('.feed .entry');
          expect(numberElements.length).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function(){
          /* TODO: Write a test that ensures when a new feed is loaded
           * by the loadFeed function that the content actually changes.
           * Remember, loadFeed() is asynchronous.
           */
          let oldFeed;
          beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, done);
            });
          });

          it("ensure that the new feed is loaded in the website", function(){
            let newFeed=$('.feed').html();
            expect(newFeed).not.toBe(oldFeed);
          });
    });
}());
