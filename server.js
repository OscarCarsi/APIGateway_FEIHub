const express = require('express');
const cors = require('cors');
const usersProxy = require('./routes/users');
const postsProxy = require('./routes/posts');
const authenticate = require('./middleware/authenticate');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/apiusersfeihub/users', usersProxy);
        this.app.use('/apiusersfeihub/credentials', usersProxy);
        this.app.use('/apiusersfeihub/follows', usersProxy);
        
        this.app.use('/apipostsfeihub/posts', authenticate, postsProxy);
        this.app.use('/apipostsfeihub/chats', authenticate, postsProxy);
    }
    listen(){
        this.app.listen(this.port, () => {
        console.log(`Gateway listening on port ${this.port}`)
        })
    }
}
module.exports = Server;