const assert = require('assert');

describe('Amazon', () => {
    describe('Find and print first 15 tablet names which cost less than 70$', () =>{

        it('"Hello. Sign in" text is Correct', () => {
            browser.url("/");
            const helloSignInText = browser.element("//a/span[contains(@class,'nav-line-1')]").getText();
            assert.equal(helloSignInText, 'Hello. Sign in');
            browser.element("//*[@id = 'nav-link-accountList']").click();
        })

        it('Email lable text is correct', () =>{
            browser.waitForExist('//*[@for="ap_email"]', 10000);
            const emailLabel = browser.element("//label[@for = 'ap_email']").getText();
            assert.equal(emailLabel, 'Email (phone for mobile accounts)');
            browser.setValue('//*[@id="ap_email"]', "mane.poghosian@gmail.com");
        })         

        it('Password label text is correct', ()=> {
            browser.waitForExist('//*[@id="ap_password"]', 10000);
            const passwordLabel = browser.element("//label[@for = 'ap_password']").getText();
            browser.setValue('//*[@id="ap_password"]', "Amaz0nDranic");
            assert.equal(passwordLabel, 'Password');
            browser.waitForExist(".a-button-input", 10000);
            browser.element("//*[@class = 'a-button-input']").click();
        })  
        
        it('Search result exists,', () => {
            browser.waitForExist("#twotabsearchtextbox", 10000);
            browser.setValue('//*[@id = "twotabsearchtextbox"]', 'tadwrewd3a34dtf45let');
            browser.element("//*[@class = 'nav-input']").click(); 
            let exist = browser.isExisting('#atfResults');
            console.log('Search result existing status: ' + exist);
            assert.equal(exist, true);
        })
    })
})