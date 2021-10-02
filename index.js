//Buscar pacotes : https://www.npmjs.com
//instalar express : npm install express

const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect( erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log('Conectado com sucesso!')

        //passa a conexao importada
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))

    }
})

//iniciar : node index.js

//Responsabilidade subir o servidor

