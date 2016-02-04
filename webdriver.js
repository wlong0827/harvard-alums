var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);



var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('https://www.pin1.harvard.edu/cas/login?service=https%3A%2F%2Fcommunity.alumni.harvard.edu%2Flogin%2Fcas');

driver.getTitle()
.then(process);

function process(title) {
    console.log(title);
    if (title == 'HarvardKey Login') { /// change  later
        //user = driver.find_element_by_name('username');
        driver.findElement(webdriver.By.name('username')).sendKeys('wlong@college.harvard.edu');
        //user.send_keys("wlong@college.harvard.edu")
        driver.findElement(webdriver.By.name('password')).sendKeys('Wlong0827!');

        var login = driver.findElement(webdriver.By.id('submitLogin'));
        //   pw.sendKeys("ChromeDriver");
        login.submit();
          //element.submit();
        //pw = driver.find_element_by_name('password');
        //pw.send_keys("Wlong0827!");
        //pw.sendKeys(Keys.RETURN);
        console.log("submitted");
    }
}
//}
// if driver.getTitle().then(function(title) { == 'HarvardKey Login' {
//     user = driver.find_element_by_name('username');
//     user.send_keys("wlong@college.harvard.edu");
//     pw = driver.find_element_by_name('password');
//     pw.send_keys("Wlong0827!");
//     pw.send_keys(Keys.RETURN);
// }
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.wait(function() {
//  return driver.getTitle().then(function(title) {
//    return title === 'webdriver - Google Search';
//  });
// }, 1000);

setTimeout(function(){ driver.quit(); }, 10000);
