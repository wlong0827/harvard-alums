// This is the main file

var request = require('request');
var cheerio = require('cheerio');
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
// client
//     .init()
//     .url('https://duckduckgo.com/')
//     .setValue('#search_form_input_homepage', 'WebdriverIO')
//     .click('#search_button_homepage')
//     .getTitle().then(function(title) {
//         console.log('Title is: ' + title);
//         // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
//     })
//     .end();

request('https://community.alumni.harvard.edu/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    //console.log(html);
  }


});

client
    .url('http://google.com')
    .setValue('#q', 'webdriver')
    .click('#btnG');
//

// username = ''
// password = ''


// driver = webdriver.Firefox()
// driver.get('https://webapps.fas.harvard.edu/course_evaluation_reports/fas/course_summary.html?course_id=' + str(i))
// if driver.title == 'HarvardKey Login':
//     user = driver.find_element_by_name('username')
//     user.send_keys(username)
//     pw = driver.find_element_by_name('password')
//     pw.send_keys(password)
//     pw.send_keys(Keys.RETURN)

// try:
//     el = driver.find_element_by_id('summaryStats') #trigger exception if not found
//     element = WebDriverWait(driver, 2).until(EC.presence_of_element_located((By.ID, "reportContent")))
