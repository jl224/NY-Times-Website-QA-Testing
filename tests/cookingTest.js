var pageObjects = {}

module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },


    'Cooking Functionality Test': browser => {
        pageObjects

            //Navigate
            .waitForElementPresent('@burgerButton2')
            .moveToElement('@burgerButton2', 0, 0)
            .click('@burgerButton2')
            .pause(300)
            .moveToElement('@foodButton', 0, 0)
            .click('@cookingButton')

        //Cooking Website Search
        // .click('@cookSearch')
        // .setValue('@cookSearch', ['chicken', browser.Keys.ENTER])
        // .pause(3000)
        // .click('@dietFilter')
        // .select["dietFilter"], option[value =“glutenFree”]
        // .click('@dietFilter')
    }
}