/**
 * MoneyWave API Wrapper
 * @author CodebyOmar (Umar Abdullahi)
 */

const request         = require('request')
      ,root            = 'https://moneywave.herokuapp.com'
      ,getAccessToken  = require('./helpers/GetAccessToken')
      ,utils           = require('./utils/index');

function Moneywave(apiKey, secret)
{
  if(!(this instanceof Moneywave)){ return new Moneywave(apiKey, secret); }

    let tokenRequest = getAccessToken(apiKey, secret, function(response){
      if(response.token)
      {
        Moneywave.prototype.token = response.token;
        Moneywave.prototype.importUtils();
      }else{
        throw new Error(response.error);
      }
    }.bind(this));
    
}

Moneywave.prototype = {
  implement: (params) => {
    let self = this;

    return function() {
      //check for token
      if(typeof Moneywave.prototype.token === "undefined")
      {
        throw new Error("Token is required! - check validity of API key or secret");
      }

      //function that converts arguments into array
      function toArray(obj)
      {
        let newArray = new Array(obj.length);
        
        for(let i=0; i < obj.length; ++i)
        {
          newArray[i] = obj[i];
        }
        return newArray;
      }
      
      //convert to array
      let args = toArray(arguments);
      let l = args.length;
      //check for callback in args and retrive it
      let callback = l > 0 && typeof args.slice(l-1)[0] === "function" ? args.splice(l-1)[0] : "undefined";
      
      let body, qs;

      //method checking
      let method = params.method in {'get':'', 'post':''}
           ? params.method
           : (function(){ throw new Error("Method Not Allowed - Utils declaration error!")})

      let endpoint = [root, params.endpoint].join('');

      //checking for required params
      if(params.params)
      {
        let requiredParams = params.params;

        //get body of request
        let body = args.length === 2 ? args[1] : args[0];
        requiredParams.filter(function(item, index, array) {
          if(item.indexOf("*")  === -1)
          {
            //not required
            return;
          }
          item = item.replace("*", "");

          if(!(item in body))
          {
            throw new Error("Required parameter omitted -" + item);
          }
          return;

        });
      }

      //get params e.g. {id} from args and pull out array
      let paramsInEndpoint = endpoint.match(/{[^}]+}/g)
      if(paramsInEndpoint)
      {
        l = paramsInEndpoint.length;
        //check number of params in endpoint
        if(l > 0)
        {
          //confirm if utils declaration is good
          if(!Array.isArray(params.args))
          {
            //throw error
            throw new Error("Utils declaration error!");
          }
        }
        

        //confirm user passed params to method and replace in endpoint
        let match, index;
        for(let i = 0;i < l;i++)
        {
          match = paramsInEndpoint[i].replace(/\w/g, '');
          index = params.args.indexOf(match);
          if(index != -1)
          {
            if(!args[index])
            {
              throw new Error("Utils declaration error!");
            }

            endpoint = endpoint.replace(new RegExp(paramsInEndpoint[i]), args[index]);
            args.splice(index, 1);
          }
        }
      }

      //Add post body
      if(args[0])
      {
        if(method === 'post')
        {
          //body
          body = args[0];
        }
        else if(method === 'get'){
          //query string
          qs = args[0];
        }
      }

      //finally make request
      let options = {
        url: endpoint,
        json: true,
        method: method.toUpperCase(),
        headers: {
          'Authorization': Moneywave.prototype.token
        }
      }

      //append body to options if available
      if(body){ options.body = body; }
      //append query string to options if available
      if(qs){ options.qs = qs; }

      request(options, function(error, response, body){

        //return body
        if(callback)
        {
          //check for error from API
          if(!body.status)
          {
            error = body;
            body = null;
          }

          return callback(error, body);
        }
      });

    }
  },

  importUtils: () => {
    let anon;
    // Looping over all utils
    for (let j in utils) {
      // Creating a surrogate function
      anon = function(){};	
      // Looping over the properties of each resource
      for(let i in utils[j]) {	
        anon.prototype[i] = Moneywave.prototype.implement(utils[j][i]);
      }
      Moneywave.prototype[j] = new anon();
    }
  }
};
      
module.exports = Moneywave;