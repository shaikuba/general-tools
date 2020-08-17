import request from '../utils/request';
import qs from 'qs';

export const mockList = (query) => {
    console.log("==========")
    console.log(JSON.stringify(query));
    return request({
        url: `/api/mock/manage/list`,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(query)
    })
}

export const createMock = (mock) => {
    return request({
        url: `/api/mock/manage/save`,
        method: 'post',
        data: mock
    })
}