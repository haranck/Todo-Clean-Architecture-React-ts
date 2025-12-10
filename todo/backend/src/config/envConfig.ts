import dotenv from 'dotenv';

dotenv.config()

export interface EnvConfig{
    port:number;
    mongoUri:string
}

export const envConfig : EnvConfig = {
    port:Number(process.env.PORT)||4000,
    mongoUri:process.env.MONGODB_URI||"mongodb://localhost:27017/todo_clean"
}
