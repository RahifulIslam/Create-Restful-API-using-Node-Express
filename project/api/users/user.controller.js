const { create } = require("./user.service")
const { genSaltSync, hashSync } = require('bcrypt');


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log("Inputed elements are: ", body)
        const salt = genSaltSync(10);
        //console.log( body.PASSWORD);
        body.PASSWORD = hashSync(body.PASSWORD, salt)
        create(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send({
                    success: 0,
                    message: "database connection error"
                })
            }
            return res.status(200).send({
                success: 1,
                data: results
            })
        })
    }
}