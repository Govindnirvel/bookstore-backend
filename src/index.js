import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/authRoutes.js'
import { connectDb } from './lib/db.js'
const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/auth' ,authRoutes)
connectDb()
app.listen(PORT,()=>{
    console.log(`server is running on port  ${PORT}`)
    console.log("URI -->", process.env.MONGO_DB_URI)

})