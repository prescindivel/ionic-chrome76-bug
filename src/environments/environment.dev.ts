import { Environment } from "./enviroment.model";
import { LogLevel } from "../logger/logger";

export const ENV: Environment = {
  mode: 'dev',
  logging: {
    logLevel: LogLevel.Debug,
    elasticSearchEndpoint: 'http://192.168.78.64:5601'
  },
  auth: {
    baseUrl: 'http://192.168.78.64:55000',
    endpoint: 'connect/token',
    clientSecret: 'AAAAAAAAA-F270-4058-80CA-1C89C192F69A',
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
