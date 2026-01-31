// BookModel 
import { sequelize } from "../connection.db.js";
import { DataTypes, Model } from "sequelize";
import { UserModel } from "./user.model.js";

// init ....

export class BooksModel extends Model{}


BooksModel.init(
    {
        id:{
            type: DataTypes.INTEGER ,
            primaryKey:true , 
            autoIncrement:true , 
            field :'B_id',
            allowNull :false
        },
        name:{
            type: DataTypes.STRING ,
            field :'productName',
            allowNull :false
        },
        description:{
            type: DataTypes.STRING ,
            field :'Description',
            allowNull :false
        },
        price:{
            type:DataTypes.INTEGER ,
            field:"price" ,
            allowNull:false
        },
        userId:{
            type: DataTypes.INTEGER,
            references: {
            model: UserModel,
            key: "u_id",

        },
        allowNull:true
    }

    },{
        sequelize , 
        paranoid:true,
        tableName:"books" ,
        // soft-delete (paranoid) to post table. 
    }
)