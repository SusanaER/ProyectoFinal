const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
let basic =require('./basic');
let assert = require('assert');

var username = basic.userCorrect;
var pass = basic.passCorrect;
let response;

describe('Login Correcto', function(){
    it('Regresa mensaje de login correcto', async function(){
        this.timeout(50000); 
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/log_in");
        await driver.findElement(By.name("Username")).sendKeys(username);
        await driver.findElement(By.name("Password")).sendKeys(pass);
        driver.findElement(By.name("button_log_in")).click();
        response = basic.bien;
        assert.strictEqual(response, 'Successful log in');
        driver.quit();
    });
});