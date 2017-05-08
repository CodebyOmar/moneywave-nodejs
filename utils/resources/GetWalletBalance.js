'use strict';

const root = '/v1/wallet';

module.exports = {
    /**
     * get wallet balance
     */
    getWalletBalance: {
        method: 'get',
        endpoint: root
    }
};