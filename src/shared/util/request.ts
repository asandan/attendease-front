import axios, { AxiosInstance, Method } from 'axios';
import { METHODS } from './constants';

const axiosInstance: AxiosInstance = axios.create();

const makeRequest = (instance: AxiosInstance) => (method: string, url: string, body: string) => {
  const credentials = btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`);
  instance.defaults.headers.common.Authorization = `Basic ${credentials}`;

  // @ts-ignore
  return instance[method](url, body)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (method: string, url: string, body?: Object) =>
  // @ts-ignore
  (...params: unknown[]) => makeRequest(axiosInstance)(method, url, body, ...params);