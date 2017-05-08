'use strict';

const root = "/v1/transfer/{id}";

module.exports = {
    /**
     * get your previoud card to account transfer
     * @arg id
     */
    previousCardToAccount: {
        method: 'post',
        endpoint: root,
        args: ['id']
    }
};