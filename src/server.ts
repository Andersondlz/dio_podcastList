import * as http from "http";
import { Http2ServerRequest } from "http2";
import {getListEpisodes} from "./controllers/podscasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage, res:http.ServerResponse) => {
        if(req.method == "GET"){
            await getListEpisodes(req,res);
        }
    }
);

const port = process.env.PORT

server.listen(port, ()=> {
    console.log(`Servidor Iniciado na porta ${port}`)
})