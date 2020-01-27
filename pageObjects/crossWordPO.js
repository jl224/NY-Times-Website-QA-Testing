module.exports = {

    // url: 'https://cooking.nytimes.com/',

    url: 'https://nytimes.com',

    // url: 'https://www.nytimes.com/crosswords/game/daily/2020/01/23',

    elements: {

        burgerButton2: '#desktop-sections-button',
        foodButton: 'a[data-name="Food"]',
        cookingButton: 'a[data-name="Cooking"]',
        moreButton: 'a[data-name="More"]',
        toolsServices: 'a[data-name="Tools & Services"]',
        timesMachine2: 'a[href="https://timesmachine.nytimes.com/browser/"]',
        tmdateBtn2: 'input[name="change-date-input"]',
        tmsubmitBtn2: 'button[id="select_date_button"]',
        paper: 'div[id="modal_sample_issue"]',
        tmLogIn: 'button[data-element-type="button"]',
        tmLogin2: 'button[class = "class="modal_action nyt5_button large_button modal_component"]',

        //Cooking
        cookSearch: '.nytc---sitesearchbar---searchInput',

        dietFilter: '."category-name-text"',

        glutenFree: {
            selector: '(//div[term="gluten-free"])',
            locateStrategy: 'xpath'
        },


        //Front Page Navigation Button 
        searchButton: {
            selector: '(//button[@data-test-id="search-button"])',
            locateStrategy: 'xpath'
        },

        searchInput: {
            selector: '(//input[@data-testid="search-input"])',
            // selector: '(//div[@class="css-1j9evst"])',
            locateStrategy: 'xpath'
        },

        searchSubmit: {
            selector: '(//button[@data-test-id="search-submit"])',
            locateStrategy: 'xpath'
        },

        //Crossword Puzzle Link
        crossLink: {
            selector: '(//a[text()="Play the New York Times Crossword"])',
            locateStrategy: 'xpath'
        },

        crossLink2: '.css-64rr3l',

        crossLink3: '(//a[href="https://www.nytimes.com/crosswords?searchResultPosition=0"])',

        crossLink4: 'a[href="https://www.nytimes.com/crosswords?searchResultPosition=0"]',


        //MiniPuzzle Link
        minipuzLink: '[href="https:// /crosswords/game/daily/"]',

        puzLink: '.index-puzzleAction--3mS92',

        puzLink2: '.index-featured--2k-ot index-button--2qw1K index-primary--2miW- index-puzzleInfo--1a8VS',

        puzLink3: '.index-puzzleInfoContent--3va-N',

        puzLink4: '.Welcome-section--13SEE Welcome-daily--1SZOK',

        puzLink5: '.index-title--zXwue',

        puzLink6: 'a[href="/subscription/games/lp897H9.html?campaignId=4QHQ8"]',

        mpuzLink6: 'a[href="/subscription/games/lp897H9.html?campaignId=4QHQ8"]',

        //Pop-Up Button 
        popupBox: {
            selector: '(//div[@class="index-byline--1IE55"])',
            locateStrategy: 'xpath'
        },


        //Log-in
        logIn: '.AccountActions-link--WQC1x AccountActions-logIn--3DY3C',
        logIn2: {
            selector: '(//a[text()="Log in"])',
            locateStrategy: 'xpath'
        },

        mainLogin: '#login-button',

        userName: '#username',
        passWord: '#password',
        loginBtn: '#login-button',
        loginBtn2: '.css-1696vl4-buttonWrapper-Button',
        popUp2: '.buttons-modalButton--1REsR buttons-startBtn--3OK72',

        userName2: {
            selector: '(//a[text()="Email Address"])',
            locateStrategy: 'xpath'
        },

        userName3: '.css-107yqek-FieldBox e1e6zg663',

        userName4: '.css-1g8s7vj-FieldWrapper e1e6zg662',

        //Mini-crossword puzzle cells
        cellOne: '#cell-id-0',
        cellTwo: '#cell-id-1',
        cellThree: '#cell-id-2',
        cellFour: '#cell-id-3',

        //clear button
        clearPuz1: '[aria-label="clear"]',

        //clear Puzzle
        clearPuz2: {
            selector: '(//a[text()="Puzzle"])[1])',
            locateStrategy: 'xpath'
        },

        popUPClear: '[aria-label="Erase"]',


        revealPuz: {
            selector: '(//button[text()="reveal"])',
            locateStrategy: 'xpath'
        },

        revealPuz2: {
            selector: '(//a[text()="Puzzle"])[2])',
            locateStrategy: 'xpath'
        },

        popUpReveal: '[aria-label="Reveal"]',

        popCongrats: '.ModalBody-closeX--2Fmp7',

        resetBtn: '[aria-label="reset"]',

        //Times Machine

        burgerButton: '#desktop-sections-button',

        moreServices: '#MORE-MENU',

        searchResults: '.css-o0qk87',

        searchResults2: {
            selector: '(//div[@class=“css-o0qk87”])',
            locateStrategy: 'xpath'
        },

        searchResults3: {
            selector: '(//a[text() =“The New York Times Archive”])',
            locateStrategy: 'xpath'
        },

        searchResults4: {
            selector: '(//a[href="https://timesmachine.nytimes.com/browser?searchResultPosition=0"])',
            locateStrategy: 'xpath'
        },

        searchResults5: {
            selector: '(//div[@class=“css-414c4i”])',
            locateStrategy: 'xpath'
        },

        searchResults6: '.css-64rr3l',

        moreOption: '#MORE-MENU',


        toolServices: {
            selector: '(//li[@class="css-4583qh"])[48]',
            // selector: '(//a[text()="tools & services"])[3])',
            // selector: '[href="http://www.nytimes.com/marketing/tools-and-services"]',
            locateStrategy: 'xpath'
        },

        toolServices2: {
            selector: '(//a[@class=“css-kwpx34”])[54])',
            locateStrategy: 'xpath'
        },





        // timesMachine: {

        tmsubmitBtn: {
            selector: '//button[@id="select_date_button"])',
            locateStrategy: 'xpath'
        },


        // tmdateBtn: {
        //     selector: '//span[@id="dateText"]',
        //     locateStrategy: 'xpath'
        // },

        //Language tabs
        spanish: {
            selector: '(//a[@lang="es-ES"])',
            locateStrategy: 'xpath'
        },

        spanishVerb: {
            selector: '(//h3[text()="Comentario"])',
            locateStrategy: 'xpath'
        },

        chinese: {
            selector: '(//a[@lang="zh-CN"])',
            // selector: '(//a[text()="中文"])',
            locateStrategy: 'xpath'
        },

        chineseVerb: {
            selector: '(//a[@href="/opinion"])',
            locateStrategy: 'xpath'
        },



        //Section tabs
        worldTab: {
            selector: '(//a[text()="World"])[2]',
            locateStrategy: 'xpath'
        },

        usTab: {
            selector: '(//a[text()="U.S."])[2]',
            locateStrategy: 'xpath'
        },

        politicsTab: {
            selector: '(//a[text()="Politics"])[2]',
            locateStrategy: 'xpath'
        },

        nyTab: {
            selector: '(//a[text()="N.Y."])[2]',
            locateStrategy: 'xpath'
        },

        busTab: {
            selector: '(//a[text()="Business"])[2]',
            locateStrategy: 'xpath'
        },

        opinionTab: {
            selector: '(//a[text()="Opinion"])[2]',
            locateStrategy: 'xpath'
        },

        techTab: {
            selector: '(//a[text()="Tech"])[2]',
            locateStrategy: 'xpath'
        },

        scienceTab: {
            selector: '(//a[text()="Science"])[2]',
            locateStrategy: 'xpath'
        },
        healthTab: {
            selector: '(//a[text()="Health"])[2]',
            locateStrategy: 'xpath'
        },

        sportsTab: {
            selector: '(//a[text()="Sports"])[2]',
            locateStrategy: 'xpath'
        },

        artsTab: {
            selector: '(//a[text()="Arts"])[2]',
            locateStrategy: 'xpath'
        },

        booksTab: {
            selector: '(//a[text()="Books"])[2]',
            locateStrategy: 'xpath'
        },

        styleTab: {
            selector: '(//a[text()="Style"])[2]',
            locateStrategy: 'xpath'
        },

        foodTab: {
            selector: '(//a[text()="Food"])[2]',
            locateStrategy: 'xpath'
        },

        travelTab: {
            selector: '(//a[text()="Travel"])[2]',
            locateStrategy: 'xpath'
        },

        magTab: {
            selector: '(//a[text()="Magazine"])[2]',
            locateStrategy: 'xpath'
        },

        tmagTab: {
            selector: '(//a[text()="T Magazine"])[2]',
            locateStrategy: 'xpath'
        },

        realestTab: {
            selector: '(//a[text()="Real Estate"])[2]',
            locateStrategy: 'xpath'
        },

        videoTab: {
            selector: '(//a[text()="Video"])[2]',
            locateStrategy: 'xpath'
        },

        //Follow-Up News Tab after World News, U.S. News, etc...
        sectionHeader: {
            selector: '(//h1[@data-component-name="collection-header"])',
            locateStrategy: 'xpath'
        },
    }
}

