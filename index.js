const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection',(socket) => { // RECEBE UM EVENTO DE CONECXÃO DO OUTRO CORPO
   
   socket.on("disconnect", () => {
    console.log('Player Desconectado ' + socket.id)
   })

   socket.on("campo", (data) => {
    console.log(data)
    io.emit("campo-volta", socket.id + ': ' + data); // ENVIANDO PARA TODOS ATÉ PARA O CLIENTE JÁ O BROADCAST NÃO ENVIA PARA O CLIENTE
   })
   

})


app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render('index.ejs')
})

http.listen(2000, () => {
    console.log('Rodando!.')
})