/// <reference types="cypress" />

describe('facebook signup page', () =>{
    
it('verify user name with blank field', () => {

    cy.visit('https://www.facebook.com/')
    cy.get(':nth-child(2) > ._sv4').click().should('be.visible')
    cy.get('[data-testid="open-registration-form-button"]').click().should('have.text','Create new account')
    cy.get('input[name="firstname"]').type('ayesha')
    cy.get('input[name="lastname"]').type('arshad ');
    cy.get('input[name="reg_email__"]').type('ayesha@12gmail.com')
    cy.get('input[name="reg_email_confirmation__"]').type('ayesha@12gmail.com')
    cy.get('input[name="reg_passwd__"]').type('12345678')
    cy.get('#day').select('12')
    cy.get('#month').select('Nov')
    cy.get('#year').select('2000')
    cy.get('input[type="radio"]').check('1')
    cy.get('#u_2_s_n9').click()




})
})