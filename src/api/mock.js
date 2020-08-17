import request from '../utils/request';

export const mockList = (query) => {
    return request({
        url: `/api/mock/manage`,
        method: 'get',
        data: query
    })
}

export const createMock = (mock) => {
    return request({
        url: `/api/mock/manage`,
        method: 'post',
        data: mock
    })
}