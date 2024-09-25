import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podscasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage, res:http.ServerResponse) => {

        //queryString
        //http://localhost:3333/api/episode?p=Flow

        const [baseUrl,queryString] = req.url?.split("?") ?? ["",""]

        // Listar podcasts
        if(req.method === "GET" && baseUrl === "/api/list"){
            await getListEpisodes(req, res);
        }

        if(req.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.PORT

server.listen(port, ()=> {
    console.log(`Servidor Iniciado na porta ${port}`)
})