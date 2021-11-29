const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function user_incorrecto(){

    var username = "Susana";
    var pass = "holasusana";

    let driver = await new Builder().forBrowser("chrome").build();
     await driver.get("http://localhost:3000/log_in");
     await driver.findElement(By.name("Username")).sendKeys(username);
     await driver.findElement(By.name("Password")).sendKeys(pass);
     setTimeout(function(){ 
         driver.findElement(By.name("button_log_in")).click(); 
     }, 3000);
     setTimeout(function(){  driver.quit(); }, 6000);
}

user_incorrecto()