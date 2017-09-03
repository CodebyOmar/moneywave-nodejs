'use strict'

const root = '/v1/wallet';

module.exports = {
    /**
     * Create a new sub-wallet
     * "name","lock_code","user_ref","currency"
     */
    create: {
        method: 'post',
        endpoint: root,
        params: ["name","lock_code","user_ref","currency"]
    }
}