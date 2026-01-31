// Connect to db .........................

import { Sequelize } from 'sequelize'
import { DB_HOST , DB_PORT , DB_NAME ,DB_USER , DB_PASSWORD} from '../../config/config.service.js'
export const sequelize = new Sequelize(DB_NAME , DB_USER , DB_PASSWORD , {
    host:DB_HOST , 
    dialect:'mysql' ,
    port:DB_PORT
})

// Testing Connection..........
export const checkConnectionDB = async()=>{

    try {
        await sequelize.authenticate()
        console.log(`Connection has been established successfully 😎`);
        
        
    } catch (error) {
        console.log(`Unable to connect to the database 🫠` , error);
    }

}
// 3- test.......................
export const asyncDBConnection=  async()=>{
    try {
    await sequelize.sync({alter:true, force:false, match: /_test$/ });
    console.log('Connection SYNC  has been established successfully.😊');
    } catch (error) {
    console.error('Unable  SYNC to connect to the database:🫠', error);
    }

}