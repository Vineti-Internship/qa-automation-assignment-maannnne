const assert = require('assert');

describe('Amazon', () => {
    describe('Find and print first 15 tablet names which cost less than 70$', () => {

        it('"Hello. Sign in" text is Correct.', () => {
            browser.url("/");
            const helloSignInText = browser.element("//a/span[contains(@class,'nav-line-1')]").getText();
            assert.equal(helloSignInText, 'Hello. Sign in');
            browser.element("//*[@id='nav-link-accountList']").click();
        });

        it('Email lable text is correct.', () => {
            browser.waitForExist('//*[@for="ap_email"]', 10000);
            const emailLabel = browser.element("//label[@for='ap_email']").getText();
            assert.equal(emailLabel, 'Email (phone for mobile accounts)');
            browser.setValue('//*[@id="ap_email"]', "testester00001@gmail.com");
        });         

        it('Password label text is correct.', () => {
            browser.waitForExist('//*[@id="ap_password"]', 10000);
            const passwordLabel = browser.element("//label[@for='ap_password']").getText();
            browser.setValue('//*[@id="ap_password"]', "Tester00001");
            assert.equal(passwordLabel, 'Password');
            browser.waitForExist(".a-button-input", 10000);
            browser.element("//*[@class='a-button-input']").click();
        });
        
        it('Search result exists.', () => {
            browser.waitForExist("#twotabsearchtextbox", 10000);
            browser.setValue('//*[@id="twotabsearchtextbox"]', 'tablet');
            browser.element("//*[@class='nav-input']").click(); 
            const exists = browser.isExisting('#atfResults');
            console.log('Search result exists: ' + exists);
            assert.equal(exists, true);
        });

        it('Find and print first 15 tablet names, which cost less than 70$.', () => {
            browser.waitForExist('#atfResults', 10000);
            const wholePrices = browser.elements('.sx-price-whole').getText();     
            const tabletNames = browser.elements('.s-access-title').getText();

            let count = 15;
            
            for(let i = 0; i < wholePrices.length; i++){
                if(parseInt(wholePrices[i]) < 70 && count > 0){
                    console.log(`${i+1}. ${tabletNames[i]}`);
                    count--;
                }
            }
        });
    });
});     