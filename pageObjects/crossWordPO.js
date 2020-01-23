module.exports = {

    url: 'https://nytimes.com',
    elements: {

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

        //MiniPuzzle Link
        minipuzLink: '[href="https:// /crosswords/game/daily/"]',

        //Pop-Up Button 
        popupBox: {
            selector: '(//div[@class="index-byline--1IE55"])',
            locateStrategy: 'xpath'
        },

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

        toolServices: {
            selector: '(//a[text()="tools & services"])[3])',
            locateStrategy: 'xpath'
        },

        timesMachine: {
            selector: '[href="https://timesmachine.nytimes.com/browser/"]',
            locateStrategy: 'xpath'
        },

        tminputField: {
            selector: '(//input[@name="change-date-input"])',
            locateStrategy: 'xpath'
        },

        tmsubmitBtn: {
            selector: '//button[@id="select_date_button"])',
            locateStrategy: 'xpath'
        },

        tmdateBtn: {
            selector: '//span[@id="dateText"]',
            locateStrategy: 'xpath'
        },

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

