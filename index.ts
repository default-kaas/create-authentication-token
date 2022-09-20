import express from 'express'
import dotenv from 'dotenv'
import speakeasy from 'speakeasy'

dotenv.config()
const app = express();
const port = 4438;
app.use(express.json())

app.get('/token', (req, res) => {
    const token = speakeasy.totp({ 
        secret: process.env.ROOT_SECRET ?? "", 
        digits: 10, 
        step: 120 
    });
    res.send({ timebasedToken: process.env.ROOT_SECRET_ID + "-" + token})
})

app.listen(port, () => console.log(`Creat authentication token app listening on port ${port}!`))