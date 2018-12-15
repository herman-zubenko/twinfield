class ResultsPage {

    async getAllLinks() { //getting all links from search results
        const linksArray = await browser.findElements(by.xpath('//h3[@class="LC20lb"]/..'));
        const newArray = [];
        for (let i = 0; i < linksArray.length; i++)
        {
            const text = await linksArray[i].getAttribute('href');
            newArray.push(text);
        }

        return newArray;
    }

    async sortLinksArray(array, word) { //sorting links which contains special word
        const sortedArray = [];
        array.forEach((link, i) => {
            if (array[i].toLowerCase().includes(word)) {
                sortedArray.push(array[i]);
            }
        });

        return sortedArray;
    }

    async followSortedLinks(linksArray) { //opening blank tab and following links
        for (let i = 0; i< linksArray.length; i++){

            await browser.executeScript("return window.open(arguments[0], '_blank')", linksArray[i]);
        }
    }


}

module.exports = ResultsPage;