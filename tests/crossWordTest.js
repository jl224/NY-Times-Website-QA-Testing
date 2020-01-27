var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    // 'LoginTest': browser => {
    //     pageObjects
    //         .waitForElementPresent('@mainLogin')
    //         .moveToElement('@mainLogin', 0, 0)
    //         .click('@userName')
    //         .setValue('@userName', 'Jana.Laney@gmail.com')
    //         .pause(2000)
    //         // .setValue('@username', "Jana.Laney@gmail.com")
    //         .click('@passWord')
    //         .setValue('@passWord', 'password1')
    //         .click('@loginBtn2')
    //         .pause(10000)
    // },

    'Cross-word Puzzle Functionality Test': browser => {
        pageObjects
            //Navigate to Crossword Puzzle
            .waitForElementPresent('@searchButton')
            .click('@searchButton')
            .pause(300)
            .click('@searchInput')
            .setValue('@searchInput', "crossword")
            .click('@searchSubmit')
            //Pick Puzzle
            .moveToElement('@crossLink4', 0, 0)
            .click('@crossLink')
            .waitForElementPresent('@puzLink6')
            .moveToElement('@puzLink6', 0, 0)
            .click('@mpuzLink6')
            .pause(100000)

        // //Navigate to Crossword Puzzle 2
        // .click('@logIn2')
        // .click('@userName')
        // .setValue('@userName', 'Jana.Laney@gmail.com')
        // .pause(2000)
        // // .setValue('@username', "Jana.Laney@gmail.com")
        // .click('@passWord')
        // .setValue('@passWord', 'password1')
        // .click('@loginBtn2')
        // .pause(10000)
        // .click('@popUp2')

        //Set Values in Crossword Puzzle
        //     .setValue('@cellOne', "T")
        //     .setValue('@cellTwo', "E")
        //     .setValue('@cellThree', "S")
        //     .setValue('@cellFour', "T")
        // Clear Values in Crossword Puzzle
        //     .click('@clearPuz1')
        //     .click('@clearPuz2')
        //     //Verify Values Have Been Cleared
        //     .verify.valueContains('@cellOne', " ")
        //     .verify.valueContains('@cellTwo', " ")
        //     .verify.valueContains('@cellThree', " ")
        //     .verify.valueContains('@cellFour', " ")
        //     //Pop-up
        //     .click('@popUPClear')
        //     //Reveal Answers to Puzzle
        //     .click('@revealPuz')
        //     .click('@revealPuz2')
        //     .verify.valueContains('@cellOne', " ")
        //     .verify.valueContains('@cellTwo', " ")
        //     .verify.valueContains('@cellThree', " ")
        //     .verify.valueContains('@cellFour', " ")
        //     //Pop-up
        //     .click('@popCongrats')
        //     //Reset Puzzle
        //     .click('@resetBtn')
        //     //Verify Puzzle has been reset
        //     .verify.valueContains('@cellOne', " ")
        //     .verify.valueContains('@cellTwo', " ")
        //     .verify.valueContains('@cellThree', " ")
        //     .verify.valueContains('@cellFour', " ")





    }


}

