var SearchPage = require('../pageObjects/google.search.page');

describe('First result link', function() {
    var question = new SearchPage();

    it('should point to twinfield.co.uk', async function() {

        await question.openPage();
        await question.askQuestion('Twinfield');
        await question.pressEnterButton();
        let link = await question.getFirstLink();
        await question.assertLink(link);

    });
});