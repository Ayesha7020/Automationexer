import { api } from "./api"
let user =new api()
const token=Cypress.env('token')
let userName = user.randomName();
let userEmail = `${userName}@testing.com`;

//Get Method
describe('get method', () => {
it('get user',async () =>{
    const res = await user.getuser()
    expect(res.status).equal(200)
})
})
//Post method
describe('post method', () => {
it('create user',async() => {
  let body={
    "name":"ahmed",
    "email":"ahmed3@testing.com",
    "gender":"male",
    "status":"inactive"
  }
  const res = await user.create_user(body)
  expect(res.status).equal(201)
    expect(res.body).has.property('name','ahmed')
    expect(res.body).has.property('email','ahmed3@testing.com')
    expect(res.body).has.property('gender','male')
    expect(res.body).has.property('status','inactive')

})
})
//user without name
it('should not create a user without name',async() => {
  let body={
    // "name":"ahmed",
      "email":"ahmed32@testing.com",
      "gender":"male",
      "status":"inactive"
    }
const res= await user.create_user(body)
expect(res.status).to.eq(422)

  })
  
  //user without email
  it('should not create a user without email',async() => {
    let body={
      "name":"ayesha",
        // "email":"ahmed32@testing.com",
        "gender":"female",
        "status":"inactive"
    }
    const res= await user.create_user(body)
   
        expect(res.status).to.eq(422)
     
        expect(res.body[0]).has.property('message',"can't be blank")
        expect(res.body[0]).has.property('field',"email")
    
    })
    
    //user without selecting gender
    it('A user should not be created without selecting a gender',async() => {
      let body={
        "name":"ayesha",
        "email":"ahmed32@testing.com",
        // "gender":"female",
        "status":"inactive"
      }
      const res= await user.create_user(body)
      
          expect(res.status).to.eq(422)
     
  
          expect(res.body[0]).has.property('message',"can't be blank, can be male of female")
          
      })
      
      //user without status
      it('A user should not be created without selecting a status',async() => {
        let body={
          "name":"ayesha",
            "email":"ahmed32@testing.com",
            "gender":"female",
            // "status":"inactive"
        }
        const res= await user.create_user(body)
       
            expect(res.status).to.eq(422)
           
            
            expect(res.body[0]).has.property('message',"can't be blank")
        
        })
        
        //put method
        it('should update the user information',async()=>{
          let body={
            "name":"ahmed",
            "email":"ahmed7@testing.com",
            "gender":"male",
            "status":"inactive"
          }
          const res = await user.create_user(body)
          expect(res.status).equal(201)
        body={
               "name":"ayesha arshad",
                "email":"ayesha01@testing.com",
                "gender":"female",
                "status":"active"
       }
         const res2= await user.update_user(res.body.id,body)
         expect (res2.status).to.eq(200)
  
//         cy.request({
//         method: 'PUT',
//         url:'https://gorest.co.in/public/v2/users/'+res.body.id,
//         failOnStatusCode: false,
//         headers:{
//           Authorization: token
//         },
//         body:{
//           "name":"ayesha arshad",
//             "email":"ayesha9@testing.com",
//             "gender":"female",
//             "status":"active"

//         }
//  }).then((res)=>{
//     expect(res.status).to.eq(200)
 })

it('should update the user name',async()=>{
  let body={
    "name":"ahmed",
    "email":"ahmed101@testing.com",
    "gender":"male",
    "status":"inactive"
  }
  const res = await user.create_user(body)
  expect(res.status).equal(201)
body={
       "name":"ashii",
        // "email":"ayesha5@testing.com",
        // "gender":"female",
        // "status":"active"
}
 const res2= await user.update_user(res.body.id,body)
 expect (res2.status).to.eq(200)



 })
 it('should update the user email',async()=>{
  let body={
    "name":"ahmed",
    "email":"ahmed201@testing.com",
    "gender":"male",
    "status":"inactive"
  }
  const res = await user.create_user(body)
  expect(res.status).equal(201)
body={
      //  "name":"ashii",
        "email":"ashii088@testing.com",
        // "gender":"female",
        // "status":"active"
}
 const res2= await user.update_user(res.body.id,body)
 expect (res2.status).to.eq(200)
 })
      
  //delete user

  it.only('create the user',async()=>{
    let body={
      "name":"musa",
      "email":userEmail,
      "gender":"male",
      "status":"active"
    }
    const res = await user.create_user(body)
    expect(res.status).equal(201)
 
    const res1 =await user.delete_user(res.body.id)
    
//         cy.request({
//         method: 'DELETE',
//         url:'https://gorest.co.in/public/v2/users/'+res.body.id,
//         failOnStatusCode: false,
//         headers:{
//           Authorization: token
//         }
       
//  }).then((res)=>{
//     expect(res.status).to.eq(204)
// })

  })

