import request from '../utils/request';
import qs from 'qs';

export const mockList = (query) => {
    return request({
        url: `/api/mock/manage/list`,
        method: 'POST',
        data: query
    })
}

export const createMock = (mock) => {
    return request({
        url: `/api/mock/manage/save`,
        method: 'post',
        data: mock
    })
}