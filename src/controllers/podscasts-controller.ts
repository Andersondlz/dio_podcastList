import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-server"
import { serviceFilterEpisodes } from "../services/filter-episodes-server";
import { json } from "stream/consumers";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/filter-podcastel-model";

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse) => {const content:PodcastTransferModel = await serviceListEpisodes();
    res.writeHead(content.statusCode,{"Content-type": ContentType.JSON});
    res.end(
        JSON.stringify(content.body)
    );
};

export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res:ServerResponse
) => {

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode,{"Content-type": ContentType.JSON});
    res.end(
        JSON.stringify(content.body)
    );
}