var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    'Main Search Bar Test': browser => {
        pageObjects
            //Navigate to Search Bar
            .waitForElementPresent('@searchButton')
            .click('@searchButton')
            .pause(300)
            .click('@searchInput')
            .setValue('@searchInput', "Times Machine")
            .click('@searchSubmit')
            .pause(300)
            //Search Results
            .moveToElement('@searchResults6', 0, 0)
            .click('@searchResults6')
            .pause(13000)
