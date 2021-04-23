const site = require('./siteRouter');
const Register = require('./register');
const Login = require('./login');

const Posts = require('./postRouter');

const verify = require('../midleware/veryfyToken');


function router (app) {
    app.use('/',site)
    app.use('/api/v1/register', Register);
    app.use('/api/v1/login', Login);

    app.use('/post', Posts );
}


module.exports = router;
