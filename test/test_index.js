var assert = require('assert')
  , index = require('../routes')
  , should = require('should')
  ;

    

/*  
describe('index', function() {
  it('should return the index page', function() {
    var req = {params:{password:"123"}, param:function(key) {return this.params[key]}};
    var res = {end:function() {}};

    index.index(req,res);
    
    res.statusCode.should.eql(200);
  });
});
*/

describe('truth', function () {
  it('should be true', function () {
    var myvar = true;
    myvar.should.be.true;
  });
});