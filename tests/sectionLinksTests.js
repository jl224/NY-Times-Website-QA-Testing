var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    'Section Links Functionality Test': browser => {
        pageObjects
            .waitForElementPresent('@worldTab')
            .pause(300)
            .moveToElement('@worldTab', 0, 0)
            .click('@worldTab')
            .verify.containsText('@sectionHeader', 'World')
            .api.back()

        pageObjects
            .waitForElementPresent('@usTab')
            .click('@usTab')
            .verify.containsText('@sectionHeader', 'U.S.')
            .api.back()

        pageObjects
            .waitForElementPresent('@politicsTab')
            .click('@politicsTab')
            .verify.containsText('@sectionHeader', 'Politics')
            .api.back()

        pageObjects
            .waitForElementPresent('@nyTab')
            .click('@nyTab')
            .verify.containsText('@sectionHeader', 'New York')
            .api.back()

        pageObjects
            .waitForElementPresent('@busTab')
            .click('@busTab')
            .verify.containsText('@sectionHeader', 'Business')
            .api.back()

        pageObjects
            .waitForElementPresent('@opinionTab')
            .click('@opinionTab')
            .verify.containsText('@sectionHeader', 'Opinion')
            .api.back()

        pageObjects
            .waitForElementPresent('@techTab')
            .click('@techTab')
            .verify.containsText('@sectionHeader', 'Tech')
            .api.back()

        pageObjects
            .waitForElementPresent('@scienceTab')
            .click('@scienceTab')
            .verify.containsText('@sectionHeader', 'Science')
            .api.back()

        pageObjects
            .waitForElementPresent('@healthTab')
            .click('@healthTab')
            .verify.containsText('@sectionHeader', 'Health')
            .api.back()

        pageObjects
            .waitForElementPresent('@sportsTab')
            .click('@sportsTab')
            .verify.containsText('@sectionHeader', 'Sports')
            .api.back()

        pageObjects
            .waitForElementPresent('@artsTab')
            .click('@artsTab')
            .verify.containsText('@sectionHeader', 'Arts')
            .api.back()

        pageObjects
            .waitForElementPresent('@booksTab')
            .click('@booksTab')
            .verify.containsText('@sectionHeader', 'Books')
            .api.back()

        pageObjects
            .waitForElementPresent('@styleTab')
            .click('@styleTab')
            .verify.containsText('@sectionHeader', 'Style')
            .api.back()

        pageObjects
            .waitForElementPresent('@foodTab')
            .click('@foodTab')
            .verify.containsText('@sectionHeader', 'Food')
            .api.back()

        pageObjects
            .waitForElementPresent('@travelTab')
            .click('@travelTab')
            .verify.containsText('@sectionHeader', 'Travel')
            .api.back()

        // pageObjects
        //     .waitForElementPresent('@magTab')
        //     .click('@magTab')
        //     .verify.containsText('@sectionHeader', 'Magazine')
        //     .api.back()

        // pageObjects
        //     .waitForElementPresent('@tmagTab')
        //     .click('@tmagTab')
        //     .verify.containsText('@sectionHeader', 'The New York Times Style Magazine')
        //     .api.back()

        // pageObjects
        //     .waitForElementPresent('@realestTab')
        //     .click('@realestTab')
        //     .verify.containsText('@sectionHeader', 'Real Estate')
        //     .api.back()

        // pageObjects
        //     .waitForElementPresent('@videoTab')
        //     .click('@videoTab')
        //     .verify.containsText('@sectionHeader', 'Video')
        //     .api.back()
    }
}
