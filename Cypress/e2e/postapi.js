
const token=Cypress.env('token')
export class post{
    //get
    get_user(){
        return new Cypress.Promise((resolve,reject)=>{
            cy.request({
                method: 'GET',
                url:'https://gorest.co.in/public/v2/posts',
                headers:{
                    Authorization: token
                },        
    }).then((response)=>{
        resolve(response)
    })
   

    })

}

//post
createuser(body){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
            method: 'POST',
            url:'https://gorest.co.in/public/v2/posts',
            failOnStatusCode: false,
    
            headers:{
                Authorization: token
            },
   body:
   body
        }).then((response)=>{
            resolve(response)
        })
    })

}
//put js
updateuser(body,id){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
            method: 'PUT',
            url:'https://gorest.co.in/public/v2/posts/'+id,
            failOnStatusCode: false,
    
            headers:{
                Authorization: token
            },
   body:
   body
        }).then((response)=>{
            resolve(response)
        })
        
    })
}

//delete js
deletepost(id){
    return new Cypress.Promise((resolve,reject)=>{
        cy.request({
                    method: 'Delete',
                    url:'https://gorest.co.in/public/v2/posts/'+ id,
                    failOnStatusCode: false,
                    headers:{
                      Authorization: token
                    },
                }).then((res)=>{
                    resolve(res)
       })         
         })      
}


}