export class loginexercise{
//login
    loginemail=('[data-qa="login-email"]')
    loginpassword=('[data-qa="login-password"]')
    loginbutton=('[data-qa="login-button"]')
    //logout
    logout=('.shop-menu > .nav > :nth-child(4) > a')
    //contact us
    contactname=('[data-qa="name"]')
    contactemail=('[data-qa="email"]')
    contactsubject=('[data-qa="subject"]')
    contactmessage=('[data-qa="message"]')
    contactfile=('input[type=file]')
    contactsubmit=('[data-qa="submit-button"]')
    //test case page
    Homepage=('.shop-menu > .nav > :nth-child(5) > a')
    Testcasebutton=('.shop-menu > .nav > :nth-child(5) > a')
    //search page
    products_button=('.shop-menu > .nav > :nth-child(2) > a')
    searchtext=('#search_product')
    searchbutton=('#submit_search')
//subscription home page
    subscriptiontext=('.single-widget > h2')
   subscriptionemail=('#susbscribe_email')
   subscribebutton=('#subscribe > .fa')
//add product in cart
productbutton=('.shop-menu > .nav > :nth-child(2) > a')
addtocartbutton=(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
continueshoppingbutton=('.modal-footer > .btn')
addtocartbutton_2=(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
viewcartbutton=('u')
product_1=('#product-1')
product_2=('#product-2')
//view category product
category=('.left-sidebar > :nth-child(1)')
womenbutton=(':nth-child(1) > .panel-heading > .panel-title > a')
womendress=('#Women > .panel-body > ul > :nth-child(1) > a')
womendress_product=('.title')
men_category=(':nth-child(2) > .panel-heading > .panel-title > a')
men_tshirt=('#Men > .panel-body > ul > :nth-child(1) > a')
//view &cart brand product
brands=('.brands_products > h2')
brand_name1=('.brands-name > .nav > :nth-child(1) > a')
brandname2=('.brands-name > .nav > :nth-child(3) > a')
//search product and veriy after login
productmenubutton=('.shop-menu > .nav > :nth-child(2) > a')
allproduct=('.title')
searchtext=('#search_product')
searchbutton=('#submit_search')
searchproducttitle=('.title')
addtocart=('.productinfo > .btn')
viewcart=('u')
productvisible=('#product-8')
signuploginbutton=(':nth-child(4) > a')
lemail=('[data-qa="login-email"]')
lpassword=('[data-qa="login-password"]')
loginbutton=('[data-qa="login-button"]')
cartpage=('.shop-menu > .nav > :nth-child(3) > a')
productshown=('#product-8')
//add review on product
clickon_product=('.shop-menu > .nav > :nth-child(2) > a')
allproduct_page=('.title')
viewproduct_button=(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
review_visible=('.active > a')
enter_name=('#name')
enter_email=('#email')
review_rate=('#review')
click_submitbutton=('#button-review')
thankyou_review=('.alert-success > span')
//Add to cart from Recommended items
Recommendeditems_visible=('.recommended_items > .title')
addtcart_Recommendedproduct=('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn')
viewcart_button=('u')
displayed_product=('#product-5')
//verify using scroll up arrow buttton and scroll down
subscriptiontext=('.single-widget > h2')
arrowbutton_rightside=('#scrollUp > .fa')
FullFledged=('.active > :nth-child(1) > h2')
//26 verify scroll up without arrow button and scroll down functionality
subscription_text=('.single-widget > h2')
FullFledgedpractice=('.active > :nth-child(1) > h2')

//login page function
enterlogin_info(loginemail,loginpassword){
cy.get(this.loginemail).type(loginemail)
cy.get(this.loginpassword).type(loginpassword)
cy.get(this.loginbutton).click()
cy.get(this.logout).click()
}
//contact us
entercontactus_info(cname,contactemail,csubject,cmessage,cfile){
    cy.get(this.contactname).type(cname)
    cy.get(this.contactemail).type(contactemail);
    cy.get(this.contactsubject).type(csubject);
    cy.get(this.contactmessage).type(cmessage);
    cy.get(this.contactfile).selectFile(cfile);
    cy.get(this.contactsubmit).click();
}
//Test case pgae
enterTestcase_page(){
    cy.get(this.Homepage).click().should('be.visible')
    cy.get(this.Testcasebutton).click()
}
//search page
search_info(stext){
    cy.get(this.products_button).click()
    cy.get(this.searchtext).type(stext)
    cy.get(this.searchbutton).click()
}
//subscription in home page
entersubscription_info(subemail){
    cy.get(this.subscriptiontext).should('be.visible')
    cy.get(this.subscriptionemail).type(subemail)
    cy.get(this.subscribebutton).click().should('be.visible')
}
//product add to cart
enterproduct_cart(){
cy.get(this.productbutton).click()
cy.get(this.addtocartbutton).click()
cy.get(this.continueshoppingbutton).click()
cy.get(this.addtocartbutton_2).click()
cy.get(this.viewcartbutton).click()
cy.get(this.product_1).should('exist')
cy.get(this.product_2).should('exist')

}
//view category product
viewproduct(){
    cy.get(this.category).click()
    cy.get(this.womenbutton).click()
    cy.get(this.womendress).click()
    cy.get(this.womendress_product).should('be.visible')
    cy.get(this.men_category).click()
    cy.get(this.men_tshirt).click()
}
//view &cart brand product
cartbrand_product(){
    cy.get(this.brands).should('be.visible')
    cy.get(this.brand_name1).should('be.visible')
    cy.get(this.brandname2).should('be.visible')
}
//search product and verify after login
search_product(fgt,lemail,lpass){
    cy.get(this.productmenubutton).click()
    cy.get(this.allproduct).should('be.visible')
    cy.get(this.searchtext).type(fgt)
    cy.get(this.searchbutton).click()
    cy.get(this.searchproducttitle).should('be.visible')
    cy.get(this.addtocart).click()
    cy.get(this.viewcart).click()
    cy.get(this.productvisible).should('be.visible')
    cy.get(this.signuploginbutton).click()
    cy.get(this.lemail).type(lemail)
    cy.get(this.lpassword).type(lpass)
    cy.get(this.loginbutton).click()
    cy.get(this.cartpage).click()
    cy.get(this.productshown).should('be.visible')

}
//add review on product
review_product(name,email,rate){
    cy.get(this.clickon_product).click()
    cy.get(this.allproduct_page).should('be.visible')
    cy.get(this.viewproduct_button).click()
    cy.get(this.review_visible).should('be.visible')
    cy.get(this.enter_name).type(name)
    cy.get(this.enter_email).type(email)
    cy.get(this.review_rate).type(rate)
    cy.get(this.click_submitbutton).click()
    cy.get(this.thankyou_review).should('be.visible')
}
//Add to cart from Recommended items
recommendeditems_info(){
    
    cy.get(this.Recommendeditems_visible).should('be.visible')
    cy.get(this.addtcart_Recommendedproduct).click()
    cy.get(this.viewcart_button).click()
    cy.get(this.displayed_product).should('be.visible')
}
//Download Invoice after purchase order
product=('.shop-menu > .nav > :nth-child(1) > a')
product_cart=(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
cartview=('u')
cart_button=('.shop-menu > .nav > :nth-child(3) > a')
cart_page=('#cart_info')
proceed_checkout=('.col-sm-6 > .btn')
clickonsignup=('.modal-body > :nth-child(2) > a > u')
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
account_created=('b')
continue_button=('[data-qa="continue-button"]')
logged_in=(':nth-child(10) > a')
cartbutton=('.shop-menu > .nav > :nth-child(3) > a')
checkout=('.col-sm-6 > .btn')
address_detail=('.col-sm-6 > .btn')
review_order=(':nth-child(4) > .heading')
text_area=('.form-control')
place_order=(':nth-child(7) > .btn')
card_name=('[data-qa="name-on-card"]')
card_number=('[data-qa="card-number"]')
cvc=('[data-qa="cvc"]')
expiration_month=('[data-qa="expiry-month"]')
expiration_year=('[data-qa="expiry-year"]')
confirmorder_button=('[data-qa="pay-button"]')
download_invoice=('.col-sm-9 > .btn-default')
continuebutton=('[data-qa="continue-button"]')
delete_account=('.shop-menu > .nav > :nth-child(5) > a')
account_delete=('b')
button_continue=('[data-qa="continue-button"]')

//Download Invoice after purchase order
downloadinvoice_info(){
    cy.get(this.product).should('be.visible')
    cy.get(this.product_cart).click()
    cy.get(this.cartview).click()
    cy.get(this.cart_button).click()
    cy.get(this.cart_page).should('be.visible')
    cy.get(this.proceed_checkout).click()

}
click_signup(){
    cy.get(this.clickonsignup).click()
}

entersignup_info(sname,semail,password,day,month,year,fname,lname,cname){
    cy.get(this.signupname).type(sname)
    cy.get(this.signupemail).type(semail)
    cy.get(this.sigupbutton).click()
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
}
download(text,caname,canum,cvc,emonth,eyear){
cy.get(this.account_created).should('be.visible')
cy.get(this.continue_button).click()
cy.get(this.logged_in).should('be.visible')
cy.get(this.cartbutton).click()
cy.get(this.checkout).click()
cy.get(this.address_detail).should('be.visile')
cy.get(this.review_order).should('be.visible')
cy.get(this.text_area).type(text)
cy.get(this.place_order).click()
cy.get(this.card_name).type(caname)
cy.get(this.card_number).type(canum)
cy.get(this.cvc).type(cvc)
cy.get(this.expiration_month).type(emonth)
cy.get(this.expiration_year).type(eyear)
cy.get(this.confirmorder_button).click()
cy.get(this.download_invoice).click()
cy.get(this.continuebutton).click()
cy.get(this.delete_account).click()
cy.get(this.account_delete).should('be.visible')
cy.get(this.button_continue).click()

}
//25 verify using scroll up arrow buttton and scroll down
scrolldown_functionalities(){
    cy.get(this.subscriptiontext).should('be.visible')
    cy.get(this.arrowbutton_rightside).click()
    cy.get(this.FullFledged).should('be.visible')
}
//26 verify scroll up without arrow button and scroll down functionality
scrollup_withoutarrow(){
    cy.get(this.subscription_text).should('be.visible')
    cy.get(this.FullFledgedpractice).should('be.visible')
}
}
























