

// UserModel ............

import { sequelize } from "../connection.db.js";
import { DataTypes } from "sequelize";


// function

 // model name -- attributes -- options 
export const UserModel = sequelize.define('User' , {
    id:{
        type: DataTypes.INTEGER ,
        primaryKey:true , 
        autoIncrement:true ,
        field:'u_id' ,
        allowNull:false 
    },
    name:{
        type:DataTypes.STRING ,
        field:'u_name' ,
        allowNull:false 
    },
    email:{
        type:DataTypes.STRING ,
        field:"u_email" ,
        unique:true ,
        validate:{
            isEmail:{msg : "Invalid Email Format."}
        }
    },
    password:{
        type: DataTypes.STRING,
        field :'u_password',
        allowNull :false,
        validate:{
            // custom 
            checkPasswordLength(value){
                console.log(value);
                if(value.length<6){
                        throw new Error("Password Must be greater than 6 characters.")
                    }
            }
        }

    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:false ,
        field:'mobile',
        validate:{
            checkMobileLength(value){
                console.log(value);
                if(value.length!==11 ){
                        throw new Error("Mobile Must be equal  11 digits .")
                    }
            }
        }
        
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false ,
        field:'address',
    
        
    },

},{
     //option
     freezeTableName:false ,
     //hook
    validate:{
      checkNameLength(){
       if(!this.name || this.name.length <=2 ){
        throw new Error('User name must be longer than 2 characters.');
    }
}

    }
}


)







