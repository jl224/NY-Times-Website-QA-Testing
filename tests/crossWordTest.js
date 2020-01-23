var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    // 'Cross-word Puzzle Functionality Test': browser => {
    //     pageObjects
    //Navigate to Crossword Puzzle
    // .waitForElementPresent('@searchButton')
    // .click('@searchButton')
    // .pause(300)
    // .click('@searchInput')
    // .setValue('@searchInput', "crossword")
    // .click('@searchSubmit')

    //Pick Puzzle
    // .click('@crossLink')
    // .click('@minipuzLink')
    //Pop-up
    // .click('@popUpBox')
    // //Set Values in Crossword Puzzle
    // .setValue('@cellOne', "T")
    // .setValue('@cellTwo', "E")
    // .setValue('@cellThree', "S")
    // .setValue('@cellFour', "T")
    // //Clear Values in Crossword Puzzle
    // .click('@clearPuz1')
    // .click('@clearPuz2')
    // //Verify Values Have Been Cleared
    // .verify.valueContains('@cellOne', " ")
    // .verify.valueContains('@cellTwo', " ")
    // .verify.valueContains('@cellThree', " ")
    // .verify.valueContains('@cellFour', " ")
    // //Pop-up
    // .click('@popUPClear')
    // //Reveal Answers to Puzzle
    // .click('@revealPuz')
    // .click('@revealPuz2')
    // .verify.valueContains('@cellOne', " ")
    // .verify.valueContains('@cellTwo', " ")
    // .verify.valueContains('@cellThree', " ")
    // .verify.valueContains('@cellFour', " ")
    // //Pop-up
    // .click('@popCongrats')
    // //Reset Puzzle
    // .click('@resetBtn')
    // //Verify Puzzle has been reset
    // .verify.valueContains('@cellOne', " ")
    // .verify.valueContains('@cellTwo', " ")
    // .verify.valueContains('@cellThree', " ")
    // .verify.valueContains('@cellFour', " ")


    'Times Machine Functionality Test': browser => {
        // Click on language tabs and ensure contains verbiage relating to language
        pageObjects
            .waitForElementPresent('@burgerButton')
            .click('@burgerButton')
            .click('@toolServices')
            .click('@timesMachine')
            .click('@tminputField')
            .setValue('@tminputField', "04201985")
            .click('@tmsubmitBtn')
            .verify.containsText('@tmdate', '04201985')
            .api.back()

    }




    // 'Language Links Functionality Test': browser => {
    //     // Click on language tabs and ensure contains verbiage relating to language
    //     pageObjects
    //         .waitForElementPresent('@spanish')
    //         .click('@spanish')
    //         .verify.containsText('@spanishVerb', 'COMENTARIO')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@chinese')
    //         .click('@chinese')
    //         .verify.containsText('@chineseVerb', '观点与评论 • OPINION')
    //         .api.back()
    // },

    // 'Section Links Functionality Test': browser => {
    //     pageObjects
    //         .waitForElementPresent('@worldTab')
    //         .click('@worldTab')
    //         .verify.containsText('@sectionHeader', 'World')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@usTab')
    //         .click('@usTab')
    //         .verify.containsText('@sectionHeader', 'U.S.')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@politicsTab')
    //         .click('@politicsTab')
    //         .verify.containsText('@sectionHeader', 'Politics')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@nyTab')
    //         .click('@nyTab')
    //         .verify.containsText('@sectionHeader', 'New York')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@busTab')
    //         .click('@busTab')
    //         .verify.containsText('@sectionHeader', 'Business')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@opinionTab')
    //         .click('@opinionTab')
    //         .verify.containsText('@sectionHeader', 'Opinion')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@techTab')
    //         .click('@techTab')
    //         .verify.containsText('@sectionHeader', 'Tech')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@scienceTab')
    //         .click('@scienceTab')
    //         .verify.containsText('@sectionHeader', 'Science')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@healthTab')
    //         .click('@healthTab')
    //         .verify.containsText('@sectionHeader', 'Health')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@sportsTab')
    //         .click('@sportsTab')
    //         .verify.containsText('@sectionHeader', 'Sports')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@artsTab')
    //         .click('@artsTab')
    //         .verify.containsText('@sectionHeader', 'Arts')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@booksTab')
    //         .click('@booksTab')
    //         .verify.containsText('@sectionHeader', 'Books')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@styleTab')
    //         .click('@styleTab')
    //         .verify.containsText('@sectionHeader', 'Style')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@foodTab')
    //         .click('@foodTab')
    //         .verify.containsText('@sectionHeader', 'Food')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@travelTab')
    //         .click('@travelTab')
    //         .verify.containsText('@sectionHeader', 'Travel')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@magTab')
    //         .click('@magTab')
    //         .verify.containsText('@sectionHeader', 'Magazine')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@tmagTab')
    //         .click('@tmagTab')
    //         .verify.containsText('@sectionHeader', 'The New York Times Style Magazine')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@realestTab')
    //         .click('@realestTab')
    //         .verify.containsText('@sectionHeader', 'Real Estate')
    //         .api.back()

    //     pageObjects
    //         .waitForElementPresent('@videoTab')
    //         .click('@videoTab')
    //         .verify.containsText('@sectionHeader', 'Video')
    //         .api.back()
    // }
}