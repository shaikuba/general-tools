import request from '../utils/request';
import qs from 'qs';

export const mockList = (query) => {
    return request({
        url: `/mock/manage/list`,
        method: 'POST',
        data: query
    })
}

export const createMock = (mock) => {
    return request({
        url: `/mock/manage/save`,
        method: 'post',
        data: mock
    })
}

export const deleteMock = (idList) => {
    return request({
        url: `/mock/manage/delete`,
        method: 'DELETE',
        params: {
            idList: idList
        }
    })
}