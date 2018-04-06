const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({dumpio: true});
  const page = await browser.newPage();
  await page.goto("file:///D:/Codio/Warsztaty_JS/index.html");
  // await page.screenshot({path: 'example.png'});


  await page.screenshot({path: 'example.png'});
   const getCssProperty= async function(selector){
      return  await page.evaluate((selector) => {
            let ulElem = document.querySelector(selector);
            return  getComputedStyle(ulElem).color
	  }, selector);
   }
   
  const ul1Color = await getCssProperty("ul.list1");
	console.log(ul1Color)

  await browser.close();
})();
