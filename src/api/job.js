import request from '../utils/request';

export const jobList = (query) => {
    return request({
        url: `job/list`,
        method: 'get',
        data: query
    })
}

export const createJob = (job) => {
    return request({
        url: `job/create`,
        method: 'put',
        data: job
    })
}