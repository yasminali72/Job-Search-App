import  bootstrap  from './src/app.controller.js'
import path from "node:path"
import * as dotenv from "dotenv"
dotenv.config(
    {path:path.resolve('./src/config/.env.dev')}
)
import  express  from 'express'
const app = express()
const port = 3000

bootstrap(app , express)

  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))