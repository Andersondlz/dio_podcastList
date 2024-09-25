import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-server"
import { serviceFilterEpisodes } from "../services/filter-episodes-server";
import { json } from "stream/consumers";

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse) => {const content = await serviceListEpisodes();
    res.writeHead(200,{"Content-type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res:ServerResponse
) => {

    const queryString =  req.url?.split("?p=")[1] ?? "";
    const content = await serviceFilterEpisodes(queryString);
    res.writeHead(200,{"Content-type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
}