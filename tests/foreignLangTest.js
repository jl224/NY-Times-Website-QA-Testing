var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    'Language Links Functionality Test': browser => {
        // Click on language tabs and ensure contains verbiage relating to language
        pageObjects
            .waitForElementPresent('@spanish')
            .click('@spanish')
            .verify.containsText('@spanishVerb', 'COMENTARIO')
            .api.back()

        pageObjects
            .waitForElementPresent('@chinese')
            .click('@chinese')
            .verify.containsText('@chineseVerb', '观点与评论 • OPINION')
            .api.back()
    }
}
