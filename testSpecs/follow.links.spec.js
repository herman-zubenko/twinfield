const SearchPage = require('../pageObjects/google.search.page');
const ResultsPage = require('../pageObjects/google.results.page');

describe('All links which contains Twinfield ', function() {
    const question = new SearchPage();
    const results = new ResultsPage();

    it('should be opened. First option is to find elements by css', async function() {

        await question.openPage('https://www.google.com/');
        await question.askQuestion('Twinfield');
        await question.pressEnterButton();
        const array = await results.getAllLinksByCss();
        const sortedArray = await results.sortLinksArray(array, 'twinfield');
        await results.followSortedLinks(sortedArray);
    });
});