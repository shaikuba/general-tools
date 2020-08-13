import request from '../utils/request';

export const jobList = (query) => {
    return request({
        url: `mock/list`,
        method: 'get',
        data: query
    })
}

export const createJob = (job) => {
    return request({
        url: `mock/create`,
        method: 'post',
        data: job
    })
}