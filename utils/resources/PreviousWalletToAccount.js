'use strict';

const root = '/v1/disburse/status';

module.exports = {
    /**
     * get the previous wallet to accout transfer
     * @param ref
     */
    get: {
        method:'post',
        endpoint: root,
        params: ['ref']
    }
};