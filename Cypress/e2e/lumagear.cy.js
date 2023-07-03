describe('lumasignin', () =>{

    it('signin', () =>{
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('ayesha89@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Ayesha@89')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        //select gear on side menu
        cy.get('#ui-id-6 > :nth-child(2)').click()
        //select bag category
        cy.get('dd > .items > :nth-child(1) > a').click()
        //select bag
        cy.get(':nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        //add to cart bag
        cy.get('#product-addtocart-button > span').click()
       //click on review
        cy.get('.view').click()
        //move to home
        cy.get('.home > a').click()
        //show add to cart
        cy.get('.showcart > .counter').click()
        // //edit cart
        cy.get('.product > .primary > .action').click()
        // //remove 
        // cy.get('.odd > :nth-child(1) > .product-item-details > .product > .secondary > .action').click()
        // //click on ok button
        // cy.get('.action-primary').click()
        
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').select("Sign Out")

    })
})