var SearchPage = require('../pageObjects/google.search.page');

describe('First result link', function() {
    var question = new SearchPage();

    it('should point to twinfield.co.uk', async function() { //this scenario is failed constantly because the first link is a link to jobs.dou.ua

        await question.openPage('https://www.google.com/');
        await question.askQuestion('Twinfield');
        await question.pressEnterButton();
        let link = await question.getFirstLink();
        await question.assertLink(link);

    });
});