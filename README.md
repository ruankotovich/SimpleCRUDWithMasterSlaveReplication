# Pré-requisitos

- NodeJS >= 12.x.x
- docker >= 19.x.x
- docker-compose >= 1.x.x

# Execução


## Database Replication

```
cd database
docker-compose up -d
```

## Application

```
npm install
npm start 
```


# Teste de replicação

É possível listar os nós pai e filho com
```
docker ps 
```

derrubar um deles

```
docker stop <id_do_container>
```

**OBS**: Se derrubar o nó master, a aplicação só irá ler, não escrever. Se derrubar o nó filho, nada acontecerá à aplicação.


# Sobre a replicação

https://hackernoon.com/mysql-master-slave-replication-using-docker-3pp3u97
https://topic.alibabacloud.com/a/nodejs-sequelize-how-to-realize-the-database-reading-and-writing-separation-_nodejs_8_8_20099209.html

# Projeto Base
https://github.com/sashasoft/Node.js-Express-Sequelize-Angular.js-CRUD
