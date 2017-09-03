const request  = require('request'),
      base_url = 'https://moneywave.herokuapp.com';

let getToken = (api_key, secret, callback) => {
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

        let res;
        
        if(!error)
        {   
            if(body.status)
            {
                res = {"token": body.token};
                return callback(res);
            }else{
                res = {"error": body};
                return callback(res);
            }
        }
        res = {"error":error};
        return callback(res);
    });
}

module.exports = getToken;