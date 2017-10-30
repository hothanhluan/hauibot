const express = require('express');
const fs = require('fs');

let app = express();

app.get('/api', function(req, res) {
    let msg = req.query.msg;
    let source = req.query.source;

    let phanhoi = {
        "messages": [
            {"text": ""}
        ]
    };
    
    if (msg == 'hello') {
        phanhoi.messages[0].text = 'hi there';
        res.end(JSON.stringify(phanhoi));
        return;
    }

    if (msg == 'xxx') {
        phanhoi.messages[0].text = 'ok';
        res.end(JSON.stringify(phanhoi));
        return;
    }

    phanhoi.messages[0].text = 'xam';
    res.end(JSON.stringify(phanhoi));
});

app.listen(process.env.PORT || 8080);
