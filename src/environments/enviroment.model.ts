import { LogLevel } from "../logger/logger";

export interface Environment {
  mode: 'dev' | 'prod';
  logging: {
    logLevel: LogLevel;
    elasticSearchEndpoint: string;
  };
  auth: {
    baseUrl: string;
    endpoint?: string;
    clientSecret: string;
    grantType: string;
  };
  storage: {
    account: {
      accessToken: 'access_token';
      refreshToken: 'refresh_token';
      tokenType: 'token_type';
      trustedLogin: 'trusted_login';
    };
    settings: 'settings';
  };
  onesignal?: {
    appId: string;
    googleProjectNumber: string;
  };
  analytics?: string;
  tokenExpires: number;
  beaconUuid: string;
  defaultSettings: SettingsType;
}
