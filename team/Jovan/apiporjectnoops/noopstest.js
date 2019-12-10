var request = require('request')
const fs = require('fs')

const Pathbot = (task, callback) => {
    const url = `https://api.noopschallenge.com/pathbot/start`
    if (task === "1") {
        request.post({json: true, url: url}, (error, response, body) => {
            if (error) {
                callback('Unable to connect to service.', undefined)
                return
            }
            fs.writeFileSync('lastmessage.json', JSON.stringify(body))
            // TODO: return data
            callback(undefined, body)
        })
    } else if (task.startsWith("2")) {
        var lastmessage = fs.readFileSync("lastmessage.json", "UTF8")
        var lastmessagetrue = JSON.parse(lastmessage);
        var stuff = "https://api.noopschallenge.com" + lastmessagetrue.locationPath;
        var jsonString = "{\"direction\":\""+task.substring(1)+"\"}";
        var bodys = JSON.parse(jsonString);
        request.post({json: true, url: stuff, body:bodys}, (error, response, body) => {
            if (error) {
                callback('Unable to connect to service.', undefined)
                return
            }
            if(body.status!=undefined)
            {
                fs.writeFileSync('lastmessage.json', JSON.stringify(body))
            }
            // TODO: return data
            callback(undefined, body)
        })
    } else {
        callback('something went wrong.', undefined)
    }

}

module.exports = Pathbot