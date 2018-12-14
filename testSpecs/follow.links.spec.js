var SearchPage = require('../pageObjects/google.search.page');
var ResultsPage = require('../pageObjects/google.results.page');

describe('All links which contains Twinfield ', function() { //this test case opens new tabs with links which contains "Twinfield"
    var question = new SearchPage();
    var results = new ResultsPage();

    it('should be opened', async function() {
        await question.openPage('https://www.google.com/');
        await question.askQuestion('Twinfield');
        await question.pressEnterButton();
        let array = await results.getAllLinks();
        let sortedArray = await results.sortLinksArray(array, 'twinfield');
        await results.followSortedLinks(sortedArray);
    });
});