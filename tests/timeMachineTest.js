var pageObjects = {}
module.exports = {
    before: browser => {
        pageObjects = browser.page.crossWordPO()
            .navigate()
            .maximizeWindow()
    },

    after: browser => { pageObjects.end() },

    'Times Machine Functionality Test': browser => {
        //Click on language tabs and ensure contains verbiage relating to language
        pageObjects
            //Navigate
            .waitForElementPresent('@burgerButton2')
            .moveToElement('@burgerButton2', 0, 0)
            .click('@burgerButton2')
            .pause(300)
            .moveToElement('@moreButton', 0, 0)
            .click('@toolsServices')
            .moveToElement('@timesMachine2', 0, 0)
            .click('@timesMachine2')
            .pause(10000)
            .moveToElement('@tmdateBtn2', 0, 0)
            .click('@tmdateBtn2')
            .setValue('@tmdateBtn2', "04201985")
            .moveToElement('@tmsubmitBtn2', 0, 0)
            .click('@tmsubmitBtn2')
            .pause(100)

            .moveToElement('@tmLogIn', 0, 0)
            .click('@tmLogIn')
            .click('@userName')
            .setValue('@userName', 'Jana.Laney@gmail.com')
            .pause(100)
            .click('@passWord')
            .setValue('@passWord', 'password1')
            .click('@loginBtn2')
            .pause(100)
            .verify.containsText('@paper', '04201985')
    }
}