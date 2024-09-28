export enum StatusCode {
     // Códigos de informação
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,

  // Códigos de sucesso
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NOCONTENT = 204,
    // ... outros códigos de sucesso

    // Códigos de redirecionamento
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    // ... outros códigos de redirecionamento

    // Códigos de erro do cliente
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    // ... outros códigos de erro do cliente

    // Códigos de erro do servidor
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    // ... outros códigos de erro do servidor
}