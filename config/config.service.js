
import {resolve} from 'node:path'
import {config} from 'dotenv'



// لازم اعمل install ===> npm i cross-env 
export const NODE_ENV = process.env.NODE_ENV

const envPath = {
    development : `.env.dev`,
    production :`.env.prod`
}

config({path:resolve(`./config/${envPath[NODE_ENV]}`)})

console.log({port:process.env.PORT});
console.log({DB:process.env.DB_NAME});
console.log({DB:process.env.DB_HOST});

export const port = process.env.PORT ?? 7000
export const DB_HOST = process.env.DB_HOST ?? '127.0.0.1'
export const DB_PORT= process.env.DB_PORT?? 3306
export const DB_NAME = process.env.DB_NAME ?? "saturdaydb"
export const DB_USER = process.env.DB_USER ?? 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD?? ''