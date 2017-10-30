const express = require('express');
const request = require('request');

const fs = require('fs');

let app = express();

app.get('/api', function(req, res) {
    let msg = req.query.msg;


    let phanhoi = {
        "messages": [
            {"text": ""}
        ]
    };
    console.log(msg)
    request.get({
        url: msg
    }, function(err, resp, body) {
        if (!err && resp.statusCode === 200) { 
            let m = body.match(/step1\?id\=([0-9]+)\"/);
            if (m && m[1] != undefined) {
                let url = "https://unica.vn/order/step1?id=" + m[1] + "&aff=18915&coupon=luan1996"
                phanhoi.messages[0].text = url
                res.end(JSON.stringify(phanhoi))
                return
            }
        }

        phanhoi.messages[0].text = "loi lay du lieu"
        res.end(JSON.stringify(phanhoi))
    
    });
	
    // if (msg == 'hello') {
    //     phanhoi.messages[0].text = 'hi there';
    //     res.end(JSON.stringify(phanhoi));
    //     return;
    // }

    // if (msg == 'xxx') {
    //     phanhoi.messages[0].text = 'ok';
    //     res.end(JSON.stringify(phanhoi));
    //     return;
    // }

    // phanhoi.messages[0].text = 'xam';
    // res.end(JSON.stringify(phanhoi));
});


app.listen(process.env.PORT || 8080);


