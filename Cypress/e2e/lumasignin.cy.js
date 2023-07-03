import { words } from "cypress/types/lodash";
import { luma_signup } from "./lumasignobject";
const lm = new luma_signup()
// const wp = new luma_signup()

describe('lumasignin', () =>{
beforeEach('signin', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
})
    it('signin', () =>{
        lm.signin_email('nida89@gmail.com')
        lm.signin_password('Ayesha@89')
        lm.signin_button()

        // wp.clickwoman().click()
        // wp.clicktopfeature().click()
        // wp.clicktop().click()
        // wp.clicksize().click()
        // wp.clickcolor().click()
        // wp.addto_cart().click()
        // wp.show_cart().click()
        // wp.remove_button().click()
        // wp.remove_okbutton().click()
        // wp.again_addcart().click()
        // wp.again_womanfeature().click()
        // wp.selecttopfeature.click()
        // wp.selecttop.click()
        // wp.selectsize.click()
        // wp.selectcolor.click()
        // wp.clickaddtocart.click()
        // wp.clickshowcart.click()
        // wp.clickremovebutton.click()
        // wp.clickokreomvebutton.click()
        // wp.againaddtocart.click()
        // wp.againclickwomanfeature.click()
        
        //cy.visit('https://magento.softwaretestingboard.com/')
        //cy.get('.panel > .header > .authorization-link > a').click()
        // cy.get('#email').type('nida89@gmail.com')
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Ayesha@89')
        // cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        //select woman
    //     cy.get('.nav-2 > .level-top').click()
    //     //side menu select top feature
    //     cy.get('dd > .items > :nth-child(1) > a').click()
    //     //select top 
    //     cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    //     //select size
    //     cy.get('#option-label-size-143-item-168').click()
    //     //select color
    //     cy.get('#option-label-color-93-item-59').click()
    //     //click on add to cart
    //     cy.get('#product-addtocart-button').click()
    //    //click on showcart
    //     cy.get('.showcart > .counter').click()
    //     //click on remove button
    //     cy.get('.product-item-details > .actions > .secondary > .action').click()
    //     //click on remove ok button
    //     cy.get('.action-primary').click()
    //     //again click on add to cart
    //     cy.get('#product-addtocart-button').click()
    //     //again click on woman feature on top menu
    //     cy.get('.items > :nth-child(2) > a').click()
        
       

    })

})

