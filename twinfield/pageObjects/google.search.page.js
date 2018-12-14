var expect = require('chai').expect;

class GooglePage {

    async openPage(){
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.google.com/')
    }

    async askQuestion(question) {
        this.queryField = await element(by.name('q'));
        await this.queryField.sendKeys(question);
    }

    async pressEnterButton() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform()
    }

    async getFirstLink() {
        var firstLink = element(by.xpath('//cite'));
        let text = await firstLink.getText();
        console.log(text);
        return text;
    }

    async assertLink(link){
        try {
            expect(link).to.equal('https://www.twinfield.co.uk');
        }
        catch (e) {
            console.log('Link isnt equal to expected. Real link is' + link);
            throw e;
        }
    }


}

module.exports = GooglePage;