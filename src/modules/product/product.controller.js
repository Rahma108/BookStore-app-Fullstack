
import {Router} from 'express'
import { addProduct, deleteProduct, getAllProducts, restoreProduct, updateProduct } from './product.service.js'
const router = Router() // app


//Add Product
router.post('/' , async(req , res,next)=>{
    const result = await addProduct(req.body)
    return res.status(201).json({message:"Add Product Successfully" , result })

})

//Get All Products
router.get('/' , async(req , res,next)=>{
    const result = await getAllProducts()
    return res.status(200).json( result )
})

// update by id ..
router.patch('/:id' , async(req , res,next)=>{
    const result = await updateProduct(req.body , req.params.id)
    if (!result)
    return res.status(404).json({ message: "Product not found" })
    return res.status(200).json( result )
})

// delete by id 
router.delete('/:id' , async(req , res,next)=>{
    const result = await deleteProduct(req.params.id)
    if (!result)
        return res.status(404).json({ message: "Product not found" })
    return res.status(200).json( {message:"Deleted successfully"})
})


router.post('/:id' , async(req , res,next)=>{
    const result = await restoreProduct(req.params.id)
    if (!result)
        return res.status(404).json({ message: "Product not found" })
    return res.status(200).json( {message:"Restored successfully" , result})
})

export default router
