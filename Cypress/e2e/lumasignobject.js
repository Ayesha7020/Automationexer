export class luma_signup {

    //signup locator
    firstname = '#firstname';
    lastname = '#lastname';
    email = '#email_address';
    password = '#password';
    confirmpassword = '#password-confirmation';
    createaccount = '#form-validate > .actions-toolbar > div.primary > .action > span';

//signin locator

    signinemail='#email'
    signinpassword='.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    signinbutton='.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
//woman page locator

    selectwomanbutton=('.nav-2 > .level-top')
    selecttopfeature=('dd > .items > :nth-child(1) > a')
    selecttop=(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
    selectsize=('#option-label-size-143-item-168')
    selectcolor=('#option-label-color-93-item-59')
    clickaddtocart=('#product-addtocart-button')
    clickshowcart=('.showcart > .counter')
    clickremovebutton=('.product-item-details > .actions > .secondary > .action')
    clickokreomvebutton=('.action-primary')
    againaddtocart=('#product-addtocart-button')
    againclickwomanfeature=('.items > :nth-child(2) > a')


//signup pom
    enterfirstname(fname) {
      cy.get(this.firstname).type(fname);
    }
    enterlastname(lname) {
      cy.get(this.lastname).type(lname);
    }
    enteremail(email) {
      cy.get(this.email).type(email);
    }
    enterpassword(password) {
      cy.get(this.password).type(password);
    }
    enterconfirmpassword(cnfpassword) {
      cy.get(this.confirmpassword).type(cnfpassword);
    }
    entercreateaccount() {
      cy.get(this.createaccount).click();
    }

    //sinin pom
    signin_email(semail){
      cy.get(this.signinemail).type(semail)
    }
    signin_password(spassword){
      cy.get(this.signinpassword).type(spassword)
    }
    signin_button(){
      cy.get(this.signinbutton).click()
    }
//woman page pom

clickwoman(cwoman){
  cy.get(this.selectwomanbutton).type(cwoman)
}
clicktopfeature(cftop){
  cy.get(this.selecttopfeature).type(cftop)
}
clicktop(ctop){
  cy.get(this.selecttop).type(ctop)
}
clicksize(csize){
  cy.get(this.selectsize).type(csize)
}
clickcolor(ccolor){
  cy.get(this.selectcolor).type(ccolor)
}
addto_cart(addcart){
  cy.get(this.clickaddtocart).type(addcart)
}
show_cart(scart){
  cy.get(this.clickshowcart),type(scart)
}
remove_button(rbutton){
  cy.get(this.clickremovebutton).type(rbutton)
}
remove_okbutton(okbutton){
  cy.get(this.clickokreomvebutton).type(okbutton)
}
again_addcart(agcart){
  cy.get(this.againaddtocart).type(agcart)
}
again_womanfeature(agwoman){
  cy.get(this.againclickwomanfeature).type(agwoman)
}
  }