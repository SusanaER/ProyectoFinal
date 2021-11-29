const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
let basic =require('./basic');
let assert = require('assert');

var username = basic.userCorrect;
let response;

describe('Login con usuario incorrecta', function(){
    it('Regresa mensaje ingresar la información correcta', async function(){
        this.timeout(50000); 
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/log_in");
        await driver.findElement(By.name("Username")).sendKeys(username);
        driver.findElement(By.name("button_log_in")).click();
        response = basic.d;
        assert.strictEqual(response, 'Please complete the data!');
        driver.quit();
    });
});