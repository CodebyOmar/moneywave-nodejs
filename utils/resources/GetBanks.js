'use strict';

const root = '/banks';

module.exports = {
    /**
     * get a list of all banks and thier codes
     */
    banks: {
        method: 'post',
        endpoint: root
    }
};
