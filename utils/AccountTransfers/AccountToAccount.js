'use strict';

const root = '/v1/transfer';

module.exports = {
    /**
     * Transfer cash from bank account to another bank account (supported by access bank only)
     * @params "firstname","lastname","email","phonenumber","recipient_bank","recipient_account_number",
     * "charge_with", "recipient","sender_account_number", "sender_bank","apiKey","amount","narration","fee",
     * "medium","redirect_url"
     */

    transfer: {
        method: 'post',
        endpoint: root,
        params: ["firstname","lastname","email","phonenumber","recipient_bank","recipient_account_number","charge_with","recipient",
        "sender_account_number", "sender_bank","apiKey","amount","narration","fee","medium","redirect_url"]
    },

    validate: {
        method: 'post',
        endpoint: [root, '/charge/auth/account'].join(''),
        params: ["transactionRef", "authType", "authValue"]
    }
}