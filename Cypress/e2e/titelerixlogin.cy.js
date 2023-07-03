describe('titelerik signup page', () =>{
    
    it('titelerik signup', () => {
        cy.visit('https://www.telerik.com/')
        cy.get('#ContentPlaceholder1_C457_Col00 > .Btn').click()
        cy.get('#email').type('ayesha12@gmail.com')
        cy.get('.btn').click()
        cy.get('#password').type('123456')
        cy.get('.btn').click()
    })
})