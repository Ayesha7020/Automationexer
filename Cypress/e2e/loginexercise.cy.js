import { loginexercise } from "./automationlogin";
const login= new loginexercise

describe('login', () => {
    it('Visits the website', () => {
    cy.visit('https://www.automationexercise.com');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //invalid credentails
    login.enterlogin_info('yaya123@gmail.com','@!#$%',)
   
    })

//login with valid credentails
    it('Visits website', () => {
            cy.visit('https://www.automationexercise.com');
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
            login.enterlogin_info('fiza321@gmail.com','123456')
            //logout 
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    })  

})
   
        //Contact Us Form

        describe('contact us', () => {
            it('Visits the website', () => {
            cy.visit('https://www.automationexercise.com');
            cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
            login.entercontactus_info('Ayesha','ayeshachaudhry786@gmail.com','SQA','SQA stands for software quality assurance','package.json')
        
            
            })
        })
            //verify test cases page

            describe('Test Cases ', () => {
             it('Visits the website', () => {
             cy.visit('https://www.automationexercise.com')
             login.enterTestcase_page()

    })
    
    
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
        login.search_info('winter top')
        
        })
    })

//subscription page
describe('subscription page', () => {
    it('verify subscription in home page', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })
    login.entersubscription_info('ayesha234@gmail.com')
    })
})
//subscription in cart page
    describe('subscription page', () => {
       it('verify subscription in cart page', () =>{
       cy.visit('https://www.automationexercise.com/')
       cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
       login.entersubscription_info('ashii134@gmail.com')

    
   })
})
//add product in cart

describe('add product page', () => {
    it('verify add product cart', () =>{
    cy.visit('https://www.automationexercise.com/')
    login.enterproduct_cart()
   })
})
//product quantity in cart
it('product quantity page',() => {
        cy.visit('https://www.automationexercise.com/')
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click() //view product
        cy.get('#quantity').clear().type('4')
        // .clear()
        // .type('4')
        cy.get(':nth-child(5) > .btn').click() //addtocartbutton
        cy.get('u').click() //view cart  
})
  }) 

//remove product from cart
describe('remove product from cart', () => {
        it('remove product from cart', () =>{
            cy.visit('https://www.automationexercise.com/')
            cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //pr.add to cart
             cy.get('u').click() //view cart
             cy.get('.cart_quantity_delete').click().should('not.exist')//x button
        })
    })

//view category product
describe('remove product from cart', () => {
    it('remove product from cart', () =>{
        cy.visit('https://www.automationexercise.com/')
        login.viewproduct()
    })
})
//view &cart brand product


describe('view and cart brand product', () => {
    it('verify view and cart product', () =>{
        cy.visit('https://www.automationexercise.com/')
        login.cartbrand_product() //brand
        // cy.get('.brands-name > .nav > :nth-child(1) > a').click().should('be.visible')//polo
        // cy.get('.brands-name > .nav > :nth-child(3) > a').click().should('be.visible') //madame

    })
})
//20 search product and verify after login

describe('search product', () => {
    it('search product and after login', () =>{
        cy.visit('https://www.automationexercise.com/')
        login.search_product('Fancy Green Top','fiza321@gmail.com','123456')

    })
})
//21 Add Review on Product
describe('Add Review on Product', ()=> {
    it('Add Review on Product',()=> {
    cy.visit('https://automationexercise.com/')
    login.review_product('ayesha','fiza321@gmail.com','average')
    
    })
})
//22 Add to cart from Recommended items
describe('cart from recommended items', ()=> {
it('verify Add to cart from Recommended items',()=> {
    cy.visit('https://automationexercise.com/')
    login.recommendeditems_info()
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    // cy.get('.recommended_items > .title').should('be.visible')  //Verify 'RECOMMENDED ITEMS' are visible
    // cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //Click on 'Add To Cart' on Recommended product
    // cy.get('u').click()  //Click on 'View Cart' button
    // cy.get('#product-5').should('be.visible')  //Verify that product is displayed in cart page
    
})
})
//Test Case 24: Download Invoice after purchase order
describe('download invoice after purchase order', ()=> {
it.skip('verify Download Invoice after purchase order',()=> {
    cy.visit('https://automationexercise.com/')
    // cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
    // cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add product to cart
    // cy.get('u').click()
    // cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //Click 'Cart' button
    // cy.get('#cart_info').should('be.visible')  //Verify that cart page is displayed
    // cy.get('.col-sm-6 > .btn').click() //Click Proceed To Checkout
    login.downloadinvoice_info()
    login.click_signup()
    login.entersignup_info('usman','usman2@gmail.com','123456','25','November','2000','Ayesha','chaudhary','InvoZone')
    login.enter_address('johar town lahore','lahore','United States','California','long beach','124','1-202-456-7890')
    login.download('thats good','Ayesha','123498765','28','o4','2025')
    // cy.get('.modal-body > :nth-child(2) > a > u').click() //Click 'Register / Login' button
    // cy.get('[data-qa="signup-name"]').type('bushra') //sigunup name
    // cy.get('[data-qa="signup-email"]').type('bushra43@gmail.com') //Fill all details in Signup and create account
    // cy.get('[data-qa="signup-button"]').click()
    // cy.get('#id_gender2').click()
    // cy.get('[data-qa="password"]').type('123456')
    // cy.get('[data-qa="days"]').select('25');
    // cy.get('[data-qa="months"]').select('February');
    // cy.get('[data-qa="years"]').select('2000');
    // cy.get(':nth-child(7) > label').click();
    // cy.get('[data-qa="first_name"]').type('Ayesha');
    // cy.get('[data-qa="last_name"]').type('chaudhary');
    // cy.get('[data-qa="company"]').type('InvoZone');
    // cy.get('[data-qa="address"]').type('johar town lahore');
    // cy.get('[data-qa="address2"]').type('lahore');
    // cy.get('[data-qa="country"]').select('United States');
    // cy.get('[data-qa="state"]').type('California');
    // cy.get('[data-qa="city"]').type('long beach');
    // cy.get('[data-qa="zipcode"]').type('124');
    // cy.get('[data-qa="mobile_number"]').type('1-202-456-7890');
    // cy.get('[data-qa="create-account"]').click();
    // cy.get('b').should('be.visible')// Verify 'ACCOUNT CREATED!
    // cy.get('[data-qa="continue-button"]').click() //continue button
    // cy.get(':nth-child(10) > a').should('be.visible') //Verify ' Logged in as username' at top
    // cy.get('.shop-menu > .nav > :nth-child(3) > a').click() //click cart button
    // cy.get('.col-sm-6 > .btn').click() //Click 'Proceed To Checkout' button
    // cy.get(':nth-child(2) > .heading').should('be.visible') //verify address detail
    // cy.get(':nth-child(4) > .heading').should('be.visible') //review your order
    // cy.get('.form-control').type('thats good') // Enter description in comment text area
    // cy.get(':nth-child(7) > .btn').click() //click 'Place Order'
    // cy.get('[data-qa="name-on-card"]').type('Ayesha') //Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // cy.get('[data-qa="card-number"]').type('123498765')
    // cy.get('[data-qa="cvc"]').type('28')
    // cy.get('[data-qa="expiry-month"]').type('04')
    // cy.get('[data-qa="expiry-year"]').type('2025')
    // cy.get('[data-qa="pay-button"]').click() //Click 'Pay and Confirm Order' button
    // cy.get('.col-sm-9 > .btn-default').click() //Click 'Download Invoice' button
    // cy.get('[data-qa="continue-button"]').click() //click continue button
    // cy.get('.shop-menu > .nav > :nth-child(5) > a').click() //click delete account buuton
    // cy.get('b').should('be.visible') //verify account deleted
    // cy.get('[data-qa="continue-button"]').click() //click continue button
})
})
//25 verify using scroll up arrow buttton and scroll down
describe('scroll up arrow button and scoll down', ()=> {
    it('verify scroll up arrow button and scroll down functionality',()=> {
    cy.visit('https://automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    login.scrolldown_functionalities() //subscription text
    
    })
})

//26 verify scroll up without arrow button and scroll down functionality
describe('scroll up without arrow button and scoll down', ()=> {
    it('verify scroll up without arrow button and scroll down functionality',()=> {
    cy.visit('https://automationexercise.com/')
    cy.scrollTo('bottom',{ duration: 2000 })  //Scroll to bottom of page
    login.scrollup_withoutarrow() //subscription text
    cy.scrollTo('top')
    
})
 })

  })
















 