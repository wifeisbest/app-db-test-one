


class siteController  {
    home ( req, res, next){
        res.json({
            name : "duong"
        })
    }
}

module.exports = new siteController;
