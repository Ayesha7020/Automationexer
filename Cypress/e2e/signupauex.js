export class signupexercise {
clickonsignup=('.shop-menu > .nav > :nth-child(4) > a')
signupname=('[data-qa="signup-name"]')
signupemail=('[data-qa="signup-email"]')
sigupbutton=('[data-qa="signup-button"]')
selectgender=('#id_gender2')
enterpassword=('[data-qa="password"]')
selectday=('[data-qa="days"]')
selectmonth=('[data-qa="months"]')
selectyear=('[data-qa="years"]')
enterfirstname=('[data-qa="first_name"]')
enterlastname=('[data-qa="last_name"]')
entercompanyname=('[data-qa="company"]')
enteraddress=('[data-qa="address"]')
enter_readdress=('[data-qa="address2"]')
selectcountry=('[data-qa="country"]')
selectstate=('[data-qa="state"]')
selectcity=('[data-qa="city"]')
enterzipcode=('[data-qa="zipcode"]')
enter_mobilenumber=('[data-qa="mobile_number"]')
clickon_createaccount=('[data-qa="create-account"]')
accountcreated=('b')
click_signup(){
    cy.get(this.clickonsignup).click()
}
signup_email(sname,semail){
    cy.get(this.signupname).type(sname)
    cy.get(this.signupemail).type(semail)
    cy.get(this.sigupbutton).click()
}
entersignup_info(password,day,month,year,fname,lname,cname){

    cy.get(this.selectgender).click()
    cy.get(this.enterpassword).type(password)
    cy.get(this.selectday).type(day)
    cy.get(this.selectmonth).type(month)
    cy.get(this.selectyear).type(year)
    cy.get(this.enterfirstname).type(fname)
    cy.get(this.enterlastname).type(lname)
    cy.get(this.entercompanyname).type(cname)
}

enter_address(address,raddress,country,state,city,zcode,mnumber){
    cy.get(this.enteraddress).type(address)
    cy.get(this.enter_readdress).type(raddress)
    cy.get(this.selectcountry).type(country)
    cy.get(this.selectstate).type(state)
    cy.get(this.selectcity).type(city)
    cy.get(this.enterzipcode).type(zcode)
    cy.get(this.enter_mobilenumber).type(mnumber)
    cy.get(this.clickon_createaccount).click()
    cy.get(this.accountcreated).should('contain.text','Account Created')
}
randomName(){
    let res = '';
    for(let i = 0; i < 8; i++){
       const random = Math.floor(Math.random() * 27);
       res += String.fromCharCode(97 + random);
    };
    return res;
    };
 









}

