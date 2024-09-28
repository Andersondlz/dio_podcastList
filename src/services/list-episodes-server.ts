import { PodcastTransferModel } from "../models/filter-podcastel-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";




export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    // define o contrato de retorno
    let reponseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    // busco os dados   
    const data = await repositoryPodcast();


    // verifica se a conteudo
    reponseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT;

    reponseFormat.body = data;

    return reponseFormat;
}