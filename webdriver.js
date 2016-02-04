var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);



var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('https://www.pin1.harvard.edu/cas/login?service=https%3A%2F%2Fcommunity.alumni.harvard.edu%2Flogin%2Fcas');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
 return driver.getTitle().then(function(title) {
   return title === 'webdriver - Google Search';
 });
}, 1000);

driver.quit();
