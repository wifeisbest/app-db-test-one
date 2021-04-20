const site = require('./siteRouter');
const Register = require('./register');
const Login = require('./login');

function router (app) {
    app.use('/',site)
    app.use('/api/v1/register', Register);
    app.use('/api/v1/login', Login)
}


module.exports = router;
