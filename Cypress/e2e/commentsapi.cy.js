import { comments } from "./comments"
let user2=new comments
let token= Cypress.env('token')
//get method
describe('get method',()=>{
    it('get the users',async()=>{
        const res1= await user2.user_get()
          expect(res1.status).to.eq(200)
            expect(res1.body.length).to .eq(10)
        })
    })

//post method
describe('post method',()=>{
    it('create a user',async()=>{
        let body={
                    "post_id":"55321",
                    "name":"Harita Adiga",
                    "email":"adiga_harita@hamill.example",
                    "body":"Autem qui molestias"
                }
           
        const res1=await user2.post_user(body)
  
                expect(res1.status).to.eq(201)
                expect(res1.body.post_id).to.eq(55321)
            })

            it('create a user without name',async()=>{
                let body={
                            "post_id":"55321",
                            // "name":"Harita Adiga",
                            "email":"adiga_harita@hamill.example",
                            "body":"Autem qui molestias"
                        }
                   
                const res1=await user2.post_user(body)
                expect(res1.status).to.eq(422)
                // expect(res1.body.post_id).to.eq(55321)
                expect(res1.body[0].message).to.eq("can't be blank")
            })

    })
//put method
describe('put method',()=>{
    it('should update the user information',async()=>{
        let body={
            "post_id":"55321",
            "name":"Harita Adiga",
            "email":"adiga_harita@hamill.example",
            "body":"Autem qui molestias"
        }
   
const res1=await user2.post_user(body)
expect(res1.status).to.eq(201)

body={
           "post_id":res1.body.post_id,
            "name":"musa arshad",
            "email":"musa@hamill.example",
            "body":"what's up"
}
const res=await user2.user_update(body,res1.body.id)
expect(res.status).to.eq(200)



    })
})
//delete method
describe('delete method',()=>{
    it.only('should delete the user',async()=>{
        let body={
            "post_id":"55321",
            "name":"Harita Adiga",
            "email":"adiga_harita@hamill.example",
            "body":"Autem qui molestias"
        }
   
const res1=await user2.post_user(body)
expect(res1.status).to.eq(201)
const res=await user2.user_delete(res1.body.id)
expect(res.status).to.eq(200)



    })
})