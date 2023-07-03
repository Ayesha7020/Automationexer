import { signupexercise } from "./signupauex";
const signup = new signupexercise()
let randomName= signup.randomName()
describe('Signup', () => {
    
//exsisiting email code
  it('Verify that account should not be created again with exisiting email', () => {
    cy.visit('https://www.automationexercise.com');
   // click on signup menu button
    signup.click_signup();
    //signup page start
    signup.signup_email('ayesha','ashii3@gmail.com')
    cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')
  })
//signup code
  it('Verfiy that user should be able to enter data in all required fields ', () => {
    cy.visit('https://www.automationexercise.com');
   // click on signup menu button
    signup.click_signup();
    //signup page start
    signup.signup_email(randomName, `${randomName}@gmail.com`)
    signup.entersignup_info('123456','25','November','20000','Ayesha','Arshad','InvoZone');
    signup.enter_address('johar town lahore','lahore','India','California','long beach','124','1-212-456-7890')
    // cy.get('b').should('contain.text','Account Created')
  })
})
