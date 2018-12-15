const expect = require('chai').expect;

class GooglePage {

    async openPage(pageURL){ //opens google.com page
        await browser.waitForAngularEnabled(false);
        await browser.get(pageURL)
    }

    async askQuestion(question) { //typing question in search field
        this.queryField = await element(by.name('q'));
        await this.queryField.sendKeys(question);
    }

    async pressEnterButton() { //pressing enter button
        await browser.actions().sendKeys(protractor.Key.ENTER).perform()
    }

    async getFirstLink() { //getting the first link
        let firstLink = element(by.css('cite'));
        return await firstLink.getText();
    }

    async assertLink(link){ //checking that link is as expected
        try {
            expect(link).to.equal('https://www.twinfield.co.uk');
        }
        catch (e) {
            console.log('Link isnt equal to expected. Real link is ' + link);
            throw e;
        }
    }


}

module.exports = GooglePage;