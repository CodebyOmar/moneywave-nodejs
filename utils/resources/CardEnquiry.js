'use strict'

const root = '/v1/user/card/check';

module.exports = {
    /**
     * Get details of any card
     * @params cardNumber
     */

     check: {
         method: 'post',
         endpoint: root,
         params: ['cardNumber']
     }
}