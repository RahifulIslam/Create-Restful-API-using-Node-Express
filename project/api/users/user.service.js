const  pool  = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO REGISTRATION(FIRST_NAME, LAST_NAME, GENDER, EMAIL, PASSWORD, NUMBER)
            VALUES(?, ?, ?, ?, ?, ?)`,
            [
                data.FIRST_NAME,
                data.LAST_NAME,
                data.GENDER,
                data.EMAIL,
                data.PASSWORD,
                data.NUMBER
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    }
}