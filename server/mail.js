import nodemailer from 'nodemailer';

const service = process.env.MAIL_SERVICE
const email = process.env.MAIL_EMAIL
const pass = process.env.MAIL_PASSWORD
const host = process.env.CLIENT_HOST
const baseHost = process.env.CLIENT_BASE

const transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: email,
    pass: pass
  }
});

const formatPostings = ({code, sender_email, name, so_email}) => {
    return new Promise((resolve, reject) =>{
        let formatted = `
            <h3>Your SO, ${name}, just took the Ring Ease quiz to make your life easier</h3>
            <h4>Just enter the code below, or click the link to Review their answers</h4>
            <div style="font-size:1.7rem"><a href=${host+code}>${code}</a></div>
            </br>
            <div>Or just go here <a href=${host}>Here</a> enter the code above</div>
        `;

        let mailOptions = {
            from: email,
            to: so_email,
            subject: `${name} Ring Ease selection`,
            html: formatted,
        };
            // html: '<h1>Welcome</h1><p>That was easy!</p>'
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject("Error",error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        });
    })
}

export const sendMail = (config) => {
    return new Promise((resolve, reject) => {
        console.log("Sending Mail");
        formatPostings(config)
        .then(res=>{
            resolve(true);
        }).catch(err=>{
            reject("Error sending email");
        })
    })
}   

export const askMail = (so_email) => {
    return new Promise((resolve, reject) => {
        console.log("Sending Mail");
         let formatted = `
            <h3>Your SO, ${so_email}, Want's you to take the Ring Ease Quiz</h3>
            <h2>Click <a href=${baseHost+'/quiz'}>Here</a> to start</h2>
            <h4>Or navigate to: <a href=${baseHost+'/quiz'}>${baseHost+'/quiz'}</a> and press start quiz</div>
        `;

        let mailOptions = {
            from: email,
            to: so_email,
            subject: `Ring Ease Request`,
            html: formatted,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject("Error",error);
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        });
    })
}   