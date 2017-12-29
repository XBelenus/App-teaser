const fs = require('fs');
const {URL} = require('url');
const http = require('http');
const ws = require('ws');
const zlib = require('zlib');
const archiver = require('archiver');

let httpServer = http.createServer(function(req, res){
    console.log(res.header)
});

const wss = new ws.Server({httpServer, port: 3002})

/* Websocket SERVER */

httpServer.listen(function(){
  wss.on('connection', function(id){
    let fileStream = ''
    console.log(" connected: ");
    id.on('message', function(data){
        console.log(data.length)
          fs.writeFile('data/index.html', `<html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Xavier's App & teaser</title>
              <link rel="stylesheet" href="./styled.css">
              <script src="./db_handler.js"></script>
              <script src="./zepto.min.js"></script>
              <script src="./peer.min.js"></script>
          </head>
          <body>
          ${data}
          <script src="./peerConnecter.js"></script>
          <script src="./messages.js"></script>
          <script src="./video.js"></script>
          <script src="./datas.js"></script>
          </body>
          </html>`);
          const out = fs.createWriteStream(__dirname+'/data.zip')
          var archive = archiver('zip', {zlib: {level: 9}});
          out.on('close', function(){
            console.log(archive.pointer()+" total bytes")
            fs.readFile(__dirname+"/data.zip", function(err, data){
              if(err){console.log(err)}
              console.log(data);
              id.send(data)
            })
          });
          archive.pipe(out);
          archive.directory('data/', false)
          archive.finalize();
          // ZIP CREE
    })//FIN ONMESSAGE
    
  })
});
/* FIN Websocket SERVER */