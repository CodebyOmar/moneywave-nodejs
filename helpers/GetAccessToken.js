const request  = require('request'),
      base_url = 'https://moneywave.herokuapp.com';

let getToken = (api_key, secret) => {
    const encodedURI = encodeURI([base_url, "/v1/merchant/verify"].join(''));
    let options = {
        method: 'POST',
        uri: encodedURI,
        body: {
            apiKey: api_key,
            secret: secret
        },
        json: true
    };

    request(options, function(error, response, body){
        if(!error)
        {
            if(body.status)
            {
                return {token: body.token};
            }else{
                return {error: body};
            }
        }
        return error;
    });
}

module.exports = getToken;