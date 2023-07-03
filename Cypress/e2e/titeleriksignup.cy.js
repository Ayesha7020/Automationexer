/// <reference types="cypress" />

describe('titelerik signup page', () =>{
    
    it('titelerik signup', () => {
        cy.visit('https://www.telerik.com/')
        cy.get('#ContentPlaceholder1_C457_Col00 > .Btn').click()
        cy.get('#email').type('ayesha12@gmail.com')
        cy.get('.btn').click()
        cy.get('#password').type('123456')
        cy.get('#fist-name').type('ayesha')
        cy.get('#last-name').type('arshad')
        cy.get('#company').type('invozone')
        cy.get('#phone').type('03215463218')
        cy.get('#country > .k-input-button > .k-button-icon').type('Pakistan','{enter}')
        cy.get('.btn').click()
        cy.get('.btn').click()

        

    })
})