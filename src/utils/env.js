import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
/**
 * 是否为开发环境
 * @returns {Boolean}
 */
export const isDev = () => {
  return import.meta.env.DEV;
};

/**
 * 是否为生产环境
 * @returns {Boolean}
 */
export const isProd = () => {
  return import.meta.env.PROD;
};

/**
 * 是否是微应用
 * @returns {Boolean}
 */
export const isQiankun = () => {
  return qiankunWindow.__POWERED_BY_QIANKUN__;
};
