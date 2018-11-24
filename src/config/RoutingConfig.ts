import { appConfig } from './AppConfig';

export const routingPaths = {
  counter: `${appConfig.baseUrl}/counter`,
  hello: `${appConfig.baseUrl}/hello`,
  home: `${appConfig.baseUrl}`,
  login: `${appConfig.baseUrl}/login`,
  logout: `${appConfig.baseUrl}/logout`,
  note: `${appConfig.baseUrl}/note`,
  notFound: `${appConfig.baseUrl}/not-found`,
  redirect: `${appConfig.baseUrl}/redirect`,
};