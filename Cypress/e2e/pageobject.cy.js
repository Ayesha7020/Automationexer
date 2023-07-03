import { Fb_signup } from "./pageobject"

const sign_up = new Fb_signup

it('signup page', () =>{
cy.visit('https://www.facebook.com/')
cy.get(':nth-child(2) > ._sv4').click()
cy.get('[data-testid="open-registration-form-button"]').click()
sign_up.enterfirstname('ayesha')
sign_up.enterlastname('arshad')
sign_up.enteremail('ashii78@gmail.com')
sign_up.enterConfrmEmail('ashii78@gmail.com')
sign_up.enterpassword('12345678')
})