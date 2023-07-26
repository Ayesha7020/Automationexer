import { post } from "./postapi"
let user1= new post()
let token= Cypress.env('token')
//get method
describe('get method',()=>{
it('get user',async()=>{
const response=await user1.get_user()
expect(response.status).to.eq(200)
expect(response.body.length).to.eq(10)

    })
})
    //post method
    describe('post method',()=>{
        it('should create a user',async()=>{
            let body={
                "user_id":"3810914",
                "title":"Virga voluptates defessus quos ut supra",
                "body":"what is this"
                
            }
            const response=await user1.createuser(body)
       
        expect(response.status).to.eq(201)
        expect(response.body.user_id).to.eq(3810914)
        expect(response.body.title).to.eq('Virga voluptates defessus quos ut supra')
        })

    
//without user_id
it('should create user without user_id',async()=>{
    let body={
        // "user_id":"3810914",
        "title":"Virga voluptates defessus quos ut supra",
        "body":"what is this"
        
    }
    const response=await user1.createuser(body)   
    expect(response.status).to.eq(422)
    expect(response.body[0]).has.property('message','must exist')
    expect(response.body[1]).has.property('field','user_id')
    })
    })
//put method
describe('put method',()=>{
it('should update the user',async()=>{
    let body={
        "user_id":"3810914",
        "title":"Virga voluptates defessus quos ut supra",
        "body":"what is this"
        
    }
    const response=await user1.createuser(body)
    expect(response.status).to.eq(201)
    // cy.request({
    //         method: 'PUT',
    //         url:'https://gorest.co.in/public/v2/posts/'+response.body.id,
    //         failOnStatusCode: false,
    //         headers:{
    //           Authorization: token
    //         },
       
        // }).then((response)=>{
        //     expect(response.status).to.eq(200)
        // })
        body={
            "user_id":response.body.user_id,
            "title":"software quality assurance engineer",
            "body":"testing purpose"
      }
const res=await user1.updateuser(body,response.body.id)
expect(res.status).to.eq(200)
})
})
//delete method
describe('delete method',()=>{
    it('should delete the user',async()=>{
        let body={
            "user_id":"3810914",
            "title":"Virga voluptates defessus quos ut supra",
            "body":"what is this"
            
        }
        const response=await user1.createuser(body)
        expect(response.status).to.eq(201)

      const res=await user1.deletepost(response.body.id)
    expect(res.status).to.eq(204)

    })
})