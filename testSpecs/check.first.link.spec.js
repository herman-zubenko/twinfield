const SearchPage = require('../pageObjects/google.search.page');

describe('First result link', function() {
    const question = new SearchPage();

    it('should point to twinfield.co.uk', async function() { //this test case is failed constantly because the first link is a link to jobs.dou.ua

        await question.openPage('https://www.google.com/');
        await question.askQuestion('Twinfield');
        await question.pressEnterButton();
        const link = await question.getFirstLink();
        await question.assertLink(link);

    });
});