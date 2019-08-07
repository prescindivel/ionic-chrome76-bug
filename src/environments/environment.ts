import { Environment } from "./enviroment.model";
import { LogLevel } from "../logger/logger";

export const ENV: Environment = {
  mode: 'prod',
  logging: {
    logLevel: LogLevel.Warning,
    elasticSearchEndpoint: 'https://logstash.com'
  },
  auth: {
    baseUrl: 'https://id.com',
    endpoint: 'connect/token',
    clientSecret: 'AAAAAAAA-F270-4058-80CA-1C89C192F69A',
    grantType: 'password'
  },
  storage: {
    account: {
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
      trustedLogin: 'trusted_login',
      tokenType: 'token_type'
    },
    settings: 'settings',
  },
  tokenExpires: 60,
  beaconUuid: 'AAAAAAAAA-f5f8-466e-aff9-25556b57fe6d',
  defaultSettings: {
    general: {
      cacheEnabled: true
    },
    measurement: {
      selectAllServicesEnabled: null
    },
    sync: {
      backgroundModeEnabled: true,
      timeInterval: 30
    }
  }
}
