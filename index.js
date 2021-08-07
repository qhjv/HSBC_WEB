const express = require('express')
const bodyParser = require('body-parser')
const nodemailer =require('nodemailer')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello from server!')
 })

app.post('/sent',(req,res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 587,
        secure: false, 
        auth:{
            user:'vuquanghuy978@gmail.com',
            pass:'Vuquanghuy910'
        }
    })


    let mailOptions ={
        from:'"HSBC" <foo@example.com>',
        to:'vuquanghuy978@gmail.com',
        subject:`Tin nhắn từ ${data.name}`,
        html:`
            <ul>
                <li>Họ tên : ${data.name}</li>
                <li>Sđt : ${data.tel}</li>
                <li>Địa chỉ : ${data.andress}</li>
                <li>Công việc : ${data.working}</li>
                <li>Số tiền vay : ${data.money}</li>
                <li>Hình thức vay : ${data.type}</li>
            </ul>



            <p>Tư vấn thiết kế , làm Website , liên hệ : 0358839559</p>
        `
    }
    smtpTransport.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    smtpTransport.close()
})
})
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`server strarting at port ${PORT}`)
})