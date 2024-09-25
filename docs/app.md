# Nome do Aplicativo - Podcast Menager


### Descrição 
Um app  ao estilo netflix, aonde possa centralizar  diferentes epsodios podcasts separados por categarias

### Dominio 
Potcasts  feito em videos

###  Funcionalidade / features

- listar os epsódios em sessões de categorias 
    - [saúde, fitness, mentalidades, humor]
- Filtras epsódios por nome de podcast

## Como

#### Feature:
 listar os epsódios em sessões de categorias 
#### Como vou implementar:
Vou retornar uma API REST (json) nome do podcast, nome do epsodio, imagem de capa, link, categoria
```js
[
    {
        podcastName: "Flow",
        episode: "PABLO MARÇAL - Corrida à Prefeitura de São Paulo 2024",
        videoID: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/1XLBE-qArtE/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=1XLBE-qArtE&t=4886s",
        category: ["politica","Sao Paulo"]
    },
    {
        podcastName: "Flow",
        
        episode: "RUBENS BURRICHELLO - FLOW #339",
        videoID: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I"
        category: ["esporte","corrida"]
    },
]
```

