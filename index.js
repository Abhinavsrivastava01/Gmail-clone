import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import path from 'path';

const _dirname=path.resolve();
const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

app.use(express.static(path.join(_dirname,"./client/build")));

app.get('*',function(_,res){
     res.sendFile(path.join(_dirname,"./client/build/index.html"),function(err){
          res.status(500).send(err);
     })
})
const PORT = process.env.PORT||8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));