const fs = require('fs');
const PeerServer = require('peer').PeerServer;
const {URL} = require('url');
const https = require('https');
const ws = require('ws');
const zlib = require('zlib');
const archiver = require('archiver');
const sslCerts = {
  key: fs.readFileSync('../../privkey.pem'),
  cert: fs.readFileSync('../../fullchain.pem')
};
let httpsServer = https.createServer(sslCerts);

const wss = new ws.Server({httpsServer, port: 8986})

/* Websocket SERVER */

httpsServer.listen(function(){
  wss.on('connection', function(id){
    let fileStream = ''
    console.log(" connected: ");
    id.on('message', function(data){
          fs.writeFile('dato/index.html', `<html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Xavier's Appetizer</title>
          </head>
          <body>
          ${data}
          </body>
          </html>`);
          const out = fs.createWriteStream(__dirname+'/data.zip')
          var archive = archiver('zip', {zlib: {level: 9}});
          out.on('close', function(){
           // ZIP CREE
            fs.readFile(__dirname+"/data.zip", function(err, data){
              if(err){console.log(err)}
              console.log(data);
              id.send(data)
              fs.unlick(__dirname+'/data.zip')
            })
          });
          archive.pipe(out);
          archive.directory('dato/', false)
          archive.finalize();
    })//FIN ONMESSAGE
    
  })
});
/* FIN Websocket SERVER */

/* PEER SERVER */
var server = PeerServer({
  port: 3478,
  ssl: {
    key: fs.readFileSync('../../privkey.pem'),
    cert: fs.readFileSync('../../fullchain.pem')
  }
});
/* FIN PEER SERVER */