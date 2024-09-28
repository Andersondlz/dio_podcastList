import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcastel-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined ): Promise<PodcastTransferModel> => {

    // define o contrato de retorno
    let reponseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    
    // busca os dados
    const queryString =  podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);
    
    // verifica se a conteudo
    if (data.length !== 0) {    
        reponseFormat.statusCode = StatusCode.OK;
    }else {
        reponseFormat.statusCode = StatusCode.NOCONTENT;
    }
    reponseFormat.body = data;
    return reponseFormat;
}   
