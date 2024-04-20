import axios, { AxiosInstance, Method } from 'axios';
import { METHODS } from './constants';

const axiosInstance: AxiosInstance = axios.create();

const makeRequest = (instance: AxiosInstance) => (method: string, url: string, params: unknown[]) => {
  const credentials = btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`);
  instance.defaults.headers.common.Authorization = `Basic ${credentials}`;

  // @ts-ignore
  return instance[method](url)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (method: string, url: string) =>
  // @ts-ignore
  (...params: unknown[]) => makeRequest(axiosInstance)(method, url, ...params);