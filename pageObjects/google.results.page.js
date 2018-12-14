class ResultsPage {

    async getAllLinks() { //getting all links from search results
        let linksArray = await browser.findElements(by.xpath('//h3[@class="LC20lb"]/..'));
        let newArray = [];
        for (let i = 0; i < linksArray.length; i++)
        {
            let text = await linksArray[i].getAttribute('href');
            newArray.push(text);
        }

        return newArray;
    }

    async sortLinksArray(array, word) { //sorting links which contains special word
        let sortedArray = [];
        for (let i = 0; i < array.length;i++)
        {
            if (array[i].toLowerCase().includes(word)) sortedArray.push(array[i]);
        }
        return sortedArray;
    }

    async followSortedLinks(linksArray) { //opening blank tab and following links
        for (let i = 0; i< linksArray.length; i++){

            await browser.executeScript("return window.open(arguments[0], '_blank')", linksArray[i]);
        }
    }


}

module.exports = ResultsPage;