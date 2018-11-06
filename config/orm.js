var connection = require("./connection")

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    selectAll(table, cb) {
        var queryString = "SELECT * FROM ??;"
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    insertOne(table, col1, col2, val1, val2, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (??,??);"
        connection.query(queryString, [table, col1, col2, val1, val2], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    updateOne(table, obj, condition, cb) {
        var queryString = "UPDATE ?? SET " + objToSql(obj) + " WHERE ??"
        connection.query(queryString, [table, condition], (err, result) => {
            if(err) throw err
            cb(result)
        })
    }
}

module.exports = orm