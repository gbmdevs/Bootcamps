const express = require('express');
const app     = express();
const server  = require('http').Server(app); 
const io      = require('socket.io')(server);
const PORT    = 3333

app.use(express.static('public'));

// Jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

var clients = {};

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
})


//Area do Socket IO
io.on('connection', (client) => {
    client.on("join", (name) => {
       console.log("Entrou: " + name);
       clients[client.id] = name;
    });

    // Envia a Mensagem
    client.on("send", function(msg){
        console.log("Message: " + msg);
        client.broadcast.emit("chat", clients[client.id], msg);
    });
});

server.listen(PORT , ( ) => {
   console.log('Rodando no localhost:' + PORT);
});