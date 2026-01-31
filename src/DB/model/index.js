import { BooksModel } from './product.model.js'
import { UserModel } from './user.model.js'

export * from './user.model.js'
export * from './product.model.js'


// relationships ..
//---------user ➕➕➕ products -------------------

UserModel.hasMany(BooksModel , {
        foreignKey:'userId' ,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'

})

BooksModel.belongsTo(UserModel , {
        foreignKey:'userId' 
})

//------------------------------------------------------------








