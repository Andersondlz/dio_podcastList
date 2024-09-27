import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-server"
import { serviceFilterEpisodes } from "../services/filter-episodes-server";
import { json } from "stream/consumers";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse) => {const content = await serviceListEpisodes();
    res.writeHead(StatusCode.OK,{"Content-type": ContentType.JSON});
    res.end(
        JSON.stringify(content)
    );
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res:ServerResponse
) => {

    const content = await serviceFilterEpisodes(req.url);
    res.writeHead(StatusCode.OK,{"Content-type": ContentType.JSON});
    res.end(
        JSON.stringify(content)
    );
}