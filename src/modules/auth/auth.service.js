import { UserModel } from "../../DB/model/user.model.js"

export const signup =async (inputs)=>{
    const {name , email , password , mobile , address} = inputs 
    const checkEmailExist = await UserModel.findOne({where:{email } }) 
    if(checkEmailExist){
        throw new Error('Email Already Exists ! ' , {cause:{status:409}})
    }
    // build  & save 
    const user = UserModel.build({name , email , password , mobile , address} )
    await user.save()
    return user
}

export const login = async(inputs)=>{
    const {email , password} = inputs 
    const user = await UserModel.findOne({where:{email , password}})
    if(!user){
        throw new Error('Invalid login credentials 🫠' , {cause:{status:404}})  
    }
    return user
}    