// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** compressChartTest GET /api/test/compress/chart/${param0} */
export async function compressChartTestUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.compressChartTestUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponse>(`/api/test/compress/chart/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** insertMockData GET /api/test/gen */
export async function insertMockDataUsingGET(options?: { [key: string]: any }) {
  return request<any>('/api/test/gen', {
    method: 'GET',
    ...(options || {}),
  });
}

/** testGetFromMongo GET /api/test/get/mongo/${param0} */
export async function testGetFromMongoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.testGetFromMongoUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseObject_>(`/api/test/get/mongo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** testGetFromMysql GET /api/test/get/mysql/${param0} */
export async function testGetFromMysqlUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.testGetFromMysqlUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseObject_>(`/api/test/get/mysql/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** testListChartEntityByPage POST /api/test/list/page */
export async function testListChartEntityByPageUsingPOST(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart_>('/api/test/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** testInsertMongo GET /api/test/mongo */
export async function testInsertMongoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListBoolean_>('/api/test/mongo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** testInsertMongoSingle GET /api/test/mongo/${param0} */
export async function testInsertMongoSingleUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.testInsertMongoSingleUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseListBoolean_>(`/api/test/mongo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}