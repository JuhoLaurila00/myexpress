var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/example1',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

router.get('/example2/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

router.get('/example3/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);
router.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);