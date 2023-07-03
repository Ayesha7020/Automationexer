
describe('verify products page', () => {
    //products page
    it('verify all products and product detailed page', () => {
        cy.visit('https://www.automationexercise.com/')
       cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
       cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click().should('be.visible')
       cy.get(':nth-child(5) > .btn').click()
        cy.wait(2000)
        cy.get('u').click()
       cy.get ('.breadcrumb > :nth-child(1) > a').click()
    })

    describe('search page', () => {
        //search page
        it('verify search page', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('#search_product').type('winter top')
        cy.get('#submit_search').click()

        })
    })

//subscription page
describe('subscription page', () => {
    it('verify subscription in home page', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })
    cy.get('.single-widget > h2').should('be.visible')
    cy.get('#susbscribe_email').type('ayesha234@gmail.com')
    cy.get('#subscribe > .fa').click().should('be.visible')
    })
})
//subscription in cart page
    describe('subscription page', () => {
       it('verify subscription in cart page', () =>{
       cy.visit('https://www.automationexercise.com/')
       cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
       cy.get('.single-widget > h2').should('be.visible')
       cy.get('#susbscribe_email').type('ashii134@gmail.com')
       cy.get('#subscribe > .fa').click().should('be.visible')
    
   })
})
//add product in cart

describe('add product page', () => {
    it.only('verify add product cart', () =>{
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click() //products buton
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add to cart button
    cy.get('.modal-footer > .btn').click() //continue shopping
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click() //view cart button
    cy.get('#product-1').should('exist')
    cy.get('#product-2').should('exist')
   })
})






})