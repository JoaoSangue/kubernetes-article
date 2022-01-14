const express = require('express')
const app = express()
const port = 3000

// Recupera as interfaces de rede da máquina
const networkInterfaces = require("os").networkInterfaces()
// Encontra o endereço IP da primeira interface que não seja a interna (127.0.0.1)
const localAddress = Object.values(networkInterfaces)
                            .flat()
                            .filter((interface) => !interface.internal)
                            .find(Boolean).address

// Cria a rota raiz da aplicação
app.get('/', (req, res) => {
  res.send(`Hello Kubernetes! Node: ${localAddress}`)
})

// Sobe o servidor
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Mantem as conexões curtas para impedir que somente um Pod seja acessado.
server.keepAliveTimeout = 300;
server.headersTimeout = 300;
