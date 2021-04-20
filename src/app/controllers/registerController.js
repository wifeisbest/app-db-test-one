const User = require('../models/User');
const jwt = require('jsonwebtoken');


class registerController {
     // req.body : name, password, email
     async  index(req, res, next) {
        try {
            const user = await User.create(req.body);
            const token = jwt.sign({userID: user._id}, process.env.APP_SECRET);
            res.status(200).json({
                status: "success",
                data: {token, userName: user.name }
            })
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports =new registerController;
