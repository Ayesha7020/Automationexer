
const token=Cypress.env('token')
export class api{
getuser(){
return new Cypress.Promise((resolve,reject)=>{
    cy.request({
        method: 'get',
        url: 'https://gorest.co.in/public/v2/users',
        
        }).then((res) => {
        resolve(res)
        })

})
}

//post js

create_user(body){
   return new Cypress.Promise((resolve,reject)=>{
    cy.request({
        method: 'POST',
        url:'https://gorest.co.in/public/v2/users',
        failOnStatusCode: false,
  headers:{
        Authorization: token
       },
  body:
    body
  
}).then((rec)=>{
resolve(rec)

})
   })
}
//put js
update_user(id,body){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
            method: 'PUT',
            url:'https://gorest.co.in/public/v2/users/'+id,
            failOnStatusCode: false,
            headers:{
                Authorization: token
              },
              body:
                body
              
               }).then((res)=>{
                resolve(res)
   })         
      })
   }
//delete js
delete_user(id){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
                    method: 'Delete',
                    url:'https://gorest.co.in/public/v2/users/'+ id,
                    failOnStatusCode: false,
                    headers:{
                      Authorization: token
                    },
                }).then((res)=>{
                    resolve(res)
       })         
         })      
    
}
//function for random_name and email
randomName()
{    
    let res = ''; 
       for(let i = 0; i < 8; i++)
   { const random = Math.floor(Math.random() * 27);
           res += String.fromCharCode(97 + random);  
          };   
           return res;};
}
