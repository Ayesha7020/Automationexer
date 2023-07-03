export class Fb_signup {

    firstname= 'input[name="firstname"]'
    lastname='input[name="lastname"]'
    email='input[name="reg_email__"]'
    confirmemail='input[name="reg_email_confirmation__"]'
    password='input[name="reg_passwd__"]'

    enterfirstname(fname){
        cy.get(this.firstname).type(fname)
    }

    enterlastname(lname){
        cy.get(this.lastname).type(lname)
    }

    enteremail(email){
        cy.get(this.email).type(email)
    }

    enterConfrmEmail(cemail){
        cy.get(this.confirmemail).type(cemail)
    }

    enterpassword(password){
        cy.get(this.password).type(password)
    }

}
