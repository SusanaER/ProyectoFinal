const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function correcta(){

    var username = "SusanaER";
    var pass = "holasusana";

    let driver = await new Builder().forBrowser("chrome").build();
     await driver.get("http://localhost:3000/log_in");
     await driver.findElement(By.name("Username")).sendKeys(username);
     await driver.findElement(By.name("Password")).sendKeys(pass);
     setTimeout(function(){ 
        driver.findElement(By.name("button_log_in")).click();
     }, 2000);
     setTimeout(function(){  driver.quit(); }, 6000);
     
}

correcta()