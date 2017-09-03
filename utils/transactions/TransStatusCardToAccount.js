'use strict'

const root = '/v1/transfer/charge/status';

module.exports = {
    /**
     * Check transactions status
     * @params "ref"
     */

    check : {
        method: 'post',
        endpoint: root,
        params: ['ref']
    } 
}