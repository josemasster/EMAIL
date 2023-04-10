const nodemailer = require('nodemailer')
const {Router} = require('express');
const router = Router();

router.post('/sendEmail', async (req,res)=>{
    const {name, email, phone, mesage} = req.body
    const transported =  nodemailer.createTransport({
        host:"192.168.196.34",
        port:587,
        secure:true, //aplicar ssl
        auth:{
            user:"Conglomerado@gnbsudameris.com.co",
            pass:"Iv#0BsT4"
        }
    })
    contentHtml = `
    <h1>USER INFORMATIONX</h1>
    <ul>
        <li>User Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <p>${mesage}</p>)
    `
    const info = await transported.sendMail({
        from:"'GNB' <Conglomerado@gnbsudameris.com.co>", //quien lo envia
        to: "joseh.jgvr55@gmail.com" ,//correo
        subject:"Formulario de Prueba",
        text:"hello world"

    })
    console.log('mesage,' +info.messageId)
    res.redirect('/success.html')
})

module.exports = router