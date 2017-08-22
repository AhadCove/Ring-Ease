import db from '../Models';
import {sendMail, askMail} from '../mail';

const quizController = {};

quizController.ask = (req, res) => {
        console.log("Asking to send email:", req.query.email)
        askMail(req.query.email)
        .then(response => {
            console.log("Sent successfully");
                return res.status(200).json({
                    success: true,
                    data: response
                });
        }).catch(err=>{
            console.log("Could not send email");
            return res.status(500).json({
                message: "Could not send email"
            })
        })
}

quizController.get = (req, res) => {
        console.log("Looking for ring:", req.query.code)
        db.Quiz.findOne({'code': req.query.code})
        .then(found => {
            if(found){
                console.log("Successfully found ring", found);
                return res.status(200).json({
                    success: true,
                    data: found
                });
            } else{
                console.log("Ring does not exist");
                return res.status(500).json({
                    message: "Ring does not exist"
                })
            }
        }).catch(err => {
            console.log("Failed to find ring", err);
            return res.status(500).json({
                message: "Could not find ring"
            })
        })
}

quizController.check = (req, res) => {
    db.Quiz.findOne({'code': req.query.code})
    .then(found => {
        console.log(found, "code", req.query.code);
        if(found){
            console.log("Not allowed", found)
            return res.status(200).json({
                success: false,
                data: false
            })
        } else{
            console.log("Allowed");
            return res.status(200).json({
                success: true,
                data: true
            })
        }
    }).catch(err => {
        console.log("Checking Error", err);
        return res.status(500).json({
            message: err
        })
    })
    
}

quizController.find = (req, res) => {
    db.Quiz.findOne({'code': req.query.code})
    .then(found => {
        console.log(found, "code", req.query.code);
        if(found){
            console.log("Found the ring")
            return res.status(200).json({
                success: true,
                data: true
            })
        } else{
            console.log("Did not Find ring", found);
            return res.status(500).json({
                message: "Could not find ring"
            })
        }
    }).catch(err => {
        console.log("Checking Error", err);
        return res.status(500).json({
            message: err
        })
    })
    
}

quizController.add = (req, res) => {
    const {code, name, email, so_email, ring_color, ring_metal, ring_size, ring_type, ring_stone, ring_stone_shape, ring_stone_style, ring_stone_color, ring_choices} = req.body;
    console.log("Post code", req.body);

    // Validation
    
    const quiz = new db.Quiz({
        code, name, email, so_email, ring_color, ring_metal, ring_size, ring_type, ring_stone, ring_stone_shape, ring_stone_style, ring_stone_color, ring_choices
    });

    quiz.save().then(newQuiz => {
        console.log("Successfully posted quiz", newQuiz );
        const {code, email, name, so_email} = newQuiz
        sendMail({code, email, name, so_email})
        .then(response => {
            console.log("Success");
            res.status(200).json({
                success:true,
                data: newQuiz,
            })
        }).catch(err => {
            console.log("Failed at sending email");
            res.status(200).json({
                success:false,
                data: newQuiz,
            })
        })
    }).catch(err => {
        console.log("Error posting quiz", err);
        res.status(500).json({
            message: err,
        });
    });
}

export default quizController;