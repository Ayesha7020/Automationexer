import { luma_signup } from "./lumasignobject";
const luma = new luma_signup();describe('luma signup', () => {
  it('luma signup cases', () => {

    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.panel > .header > :nth-child(3) > a').click();
    luma.enterfirstname('Musa')
    luma.enterlastname('arshad');
   luma.enteremail('nida89@gmail.com')
  luma.enterpassword('Ayesha@89');
  luma.enterconfirmpassword('Ayesha@89');
 luma.entercreateaccount()
  }); 
});






