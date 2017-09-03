'use strict';

const root = "/v1/transfer/{id}";

module.exports = {
    /**
     * get your previoud card to account transfer
     * @args id
     */
    get: {
        method: 'post',
        endpoint: root,
        args: ['id']
    }
};