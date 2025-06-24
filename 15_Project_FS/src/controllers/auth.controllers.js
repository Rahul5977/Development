import { asyncHandler } from "../utils/async-handler.js"

const registerUser= asyncHandler(async (req,res)=>{
    //get user data
    const {email,username,password,role}=req.body
    //validation
    
})
export {registerUser}