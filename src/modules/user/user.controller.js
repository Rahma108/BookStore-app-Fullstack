import {Router} from 'express'
import { getProfile, UpdateProfile } from './user.service.js'

const router = Router() // app
router.get('/profile' , async (req , res , next )=>{
    const result = await getProfile()
    if (!result) 
        return res.status(404).json({ message: "User not found" });
    return res.status(200).json(result)
})


// put

router.put('/profile' , async (req , res , next )=>{
    const result = await UpdateProfile(req.body)
    if (!result) 
        return res.status(404).json({ message: "User not found" });
    return res.status(200).json(result)
})
export default router










