var orm = require("../config/orm")

var burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res)
        })
    },
    insertOne(val1, val2, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", val1, val2, (res) => {
            cb(res)
        })
    },
    updateOne() {
        orm.updateOne("burgers", obj, condition, (res) => {
            cb(res)
        })
    }
}

module.exports = burger