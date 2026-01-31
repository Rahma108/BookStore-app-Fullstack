// Add Product..............
import {BooksModel} from '../../DB/model/index.js'
export const addProduct = async (inputs)=>{
    const {name , description , price} = inputs
    const product = BooksModel.build( {name , description , price} )
    await product.save()
    return product
}

export const getAllProducts = async ()=>{
    const products = await BooksModel.findAll()
    return products
}
// update 
export const updateProduct = async (inputs, id) => {
    const product = await BooksModel.findByPk(id)
    if (!product) return null

    product.name = inputs.name ?? product.name
    product.description = inputs.description ?? product.description
    product.price = inputs.price ?? product.price

    await product.save()
    return product
}
// soft delete............
export const deleteProduct = async (id) => {
    const product = await BooksModel.findByPk(id)
    if (!product) return null

    await product.destroy()
    return true
}

// soft delete............
export const restoreProduct = async (id) => {
    const product = await BooksModel.restore({where:{id}})
    if (!product) return null
    return product
}