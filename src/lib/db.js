import mongoose from 'mongoose'

export const connectDb =async()=>{
    try {
      const conn =  await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`connected to DataBase successfully.., ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}