type Config = {
    gtm?: {
        enabled: boolean;
        id: string;
    },
    sentry?: {
        enabled: boolean;
        dsn: string;
        environment: string;
    },
    debug?: {
        stacktrace: boolean;
    }
}

declare let APP_ENV: string;
declare let CONFIG: Config;
declare let GITHUB_SHA: string;
declare let GITHUB_REF: string;
