var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    'Main Login Test': browser => {
        pageObjects