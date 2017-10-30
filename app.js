const express = require('express');
const fs = require('fs');

let app = express();

app.get('/api', function(req, res) {
    let msg = req.query.msg;
    let source = req.query.source;
    let userid = req.querry.userid;
    let email = req.querry.email;
    let sdt = req.querry.sdt;
    let sothich = req.querry.sothich;

    let phanhoi = {
        "messages": [
            {"text": ""}
        ]
    };
    
    let luudulieuuser = {
	"root" : [
		{"name" : ""},	
		{"email " : ""},
		{"sdt" : ""},
		{"id" : ""}, 
		{"sothich" : ""}
		]
	};
	
	luudulieuuser.root['id'] = userid;
	luudulieuuser.root['email'] = email;
	luudulieuuser.root['sdt'] = sdt;
	luudulieuuser.root['sothich'] = sothich;
	
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


