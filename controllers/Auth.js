
const Auth = require('../models/Auth')
const bcrypt = require('bcrypt');
const passport = require('passport');


exports.logIn =  (req, res, next)=>{
    const { Email, password, password2,  FirstName, LastName, PhoneNumber} = req.body;
    let errors = [];

   if ( !Email || !password || !password2) {
        errors.push({ msg: 'Please enter all fields' });
      }


      Auth.findOne({ Email: Email }, (err, user) => {

        if (!Auth) {

         return res.status(404).json({ 
             success: false, 
             message: 'User email not found!'
             });
         } else {

            Auth.findOne({password: password}, (err, isMatch) => {
            console.log(isMatch);
            //isMatch is eaither true or false
            if (!isMatch) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'Wrong Password!'
                 });
        } else {

         user.console.log((err, user) => {
         if (!err) {
         return res.status(400).send({ err });
        } else {
         
         //saving token to cookie
         res.status(200).json({
         
            success: true,
            message: "Successfully Logged In!",
            
         })
        }
        });
        }
        });
         }
        });
        
       
        

}

exports.Register = async (req, res, next)=>{ 
    try{
        const { Email, password, password2,  FirstName, LastName, PhoneNumber} = req.body;
        let errors = [];

        if ( !Email || !password || !password2) {
            errors.push({ msg: 'Please enter all fields' });
          }
        
          if (password != password2) {
            errors.push({ msg: 'Passwords do not match' });
          }
        
          if (password.length < 6) {
            errors.push({ msg: 'Password must be at least 6 characters' });
          }
        
          if (errors.length > 0) {
            res.send('register', {
              errors,
              
              Email,
              password,
              password2
            });
          } else {
            Auth.findOne({ Email: Email }).then(user => {
              if (user) {
                errors.push({ msg: 'Email already exists' });
                res.status(201).json({
                success: false,
                  errors,
                  
                  
                });
              } else {
                const newUser = new Auth({
                  
                  Email,
                  password,
                  FirstName,
                  LastName
                });
        
                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                      .save()
                      .then(user => {
                        return res.status(201).json({
                            success: true,
                            message: "Account Created Successfully You can login"
                            
                        })
                      })
                      .catch(err => console.log(err));
                  });
                });
              }
            });
        }

       

       // const auth = await Auth.create(req.body);

            
    }catch (err){
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages,
            })
        }else{
            return res.status(500).json({
                success: false,
                error: 'server error'
            }) 
        }
    }
}

exports.Changepswd = async (req, res, next)=>{
    res.send('Change Password');
}

exports.getUsers = async (req, res, next)=>{
    try{
        const accounts = await Auth.find();

        return res.status(200).json({ 
            success: true,
            count: accounts.length,
            data: accounts
        })
    }catch (err){
        return res.status(500).json({
            success: false,
            error: 'server error'
        }) 
    }
}
