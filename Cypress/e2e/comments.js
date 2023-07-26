const token=Cypress.env('token')
export class comments{
user_get(){
return new Cypress.Promise((resolve,reject)=>{
    cy.request({
        method:'GET',
        url:"https://gorest.co.in/public/v2/comments",
}).then((res1)=>{
    resolve(res1)
})
})
}
//post js
post_user(body){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
            method:'POST',
            url:"https://gorest.co.in/public/v2/comments",
            failOnStatusCode: false,
                headers:{
                  Authorization: token
                },
      body:
                body
    }).then((res1)=>{
        resolve(res1)
    })
    })
    }
//put js
user_update(body,id){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
            method:'PUT',
            url:"https://gorest.co.in/public/v2/comments/"+id,
            failOnStatusCode: false,
                headers:{
                  Authorization: token
                },
      body:
                body
    }).then((res1)=>{
        resolve(res1)
    })
    })
    }
//delete js

user_delete(id){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
            method:'PUT',
            url:"https://gorest.co.in/public/v2/comments/"+id,
            failOnStatusCode: false,
                headers:{
                  Authorization: token
                },
   
    }).then((res1)=>{
        resolve(res1)
    })
    })
    }

}








