const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
class loginController {
    async  index(req, res, next) {
        try {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                // Error : Email not found
            }
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({userId: user._id},process.env.APP_SECRET);
                res.status(200).json({
                    status: "success",
                    data:{
                        token, userName : user.name
                    }
                })
            }else{
                // Error : Password is not correct
            }
        } catch (error) {
           res.json(error)
        }
    }
}

module.exports = new loginController;
