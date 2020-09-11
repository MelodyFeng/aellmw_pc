/*
接口文件
 */
import ajax from './ajax';
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api';

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`);
