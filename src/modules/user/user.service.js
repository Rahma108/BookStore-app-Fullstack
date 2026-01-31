// logic


import { UserModel } from "../../DB/model/user.model.js"
export const getProfile= async()=>{
    const user = await UserModel.findOne({order: [['id' , 'DESC']]})  // اخر user 
   
    if (!user) return null
    return {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        address: user.address,
    }

}

// Update profile...

export const UpdateProfile= async(inputs)=>{
    const {name , mobile , address} = inputs
    const user = await UserModel.findOne({order: [['id' , 'DESC']]})  // اخر user 
    if (!user) return null
    //Update 
    user.name = name || user.name;
    user.mobile = mobile || user.mobile;
    user.address = address || user.address;

    await user.save();

    return {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        address: user.address,
    }

}








