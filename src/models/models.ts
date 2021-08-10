interface Config {
    endpoints: Endpoints;
    database: DbConfig;
}

interface Endpoints {
    authenticate: EndpointConfig;
    confirm: EndpointConfig;
    passwordRecovery: EndpointConfig;
    authorization: EndpointConfig;
    accessToken: EndpointConfig;
    refreshToken: EndpointConfig;
}

interface EndpointConfig {
    url: string;
    view: string;
    access: AccessLevel;
}

interface CustomEndpointConfig {
    name: string;
    url: string;
    view: string;
    access: AccessLevel;
}

interface DbConfig {
    connection: Object;
    tables: TablesConfig;
}

interface TablesConfig {
    oauthTokensTable: string;
    authorizationCodesTable: string;
    usersTable: string;
    passwordTokensTable: string;
}

enum AccessLevel {
    EVERYONE = "everyone",
    SIGNED_IN = "signed_in"
}
