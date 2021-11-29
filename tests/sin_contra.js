const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function sin_contra(){

    var username = "SusanaER";

    let driver = await new Builder().forBrowser("chrome").build();
     await driver.get("http://localhost:3000/log_in");
     await driver.findElement(By.name("Username")).sendKeys(username);
     setTimeout(function(){ 
        driver.findElement(By.name("button_log_in")).click();
     }, 3000);
     setTimeout(function(){  driver.quit(); }, 6000);
}

sin_contra()