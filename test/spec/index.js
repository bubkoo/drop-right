'use strict';

var expect = require('chai').expect;


describe('drop-right', function () {

  var dropRight = require('../../');

  it('common test', function () {

    expect(dropRight([1, 2, 3])).to.be.eql([1, 2]);
    expect(dropRight([1, 2, 3], 2)).to.be.eql([1]);
    expect(dropRight([1, 2, 3], 3)).to.be.eql([]);
    expect(dropRight([1, 2, 3], 4)).to.be.eql([]);
    expect(dropRight([], 4)).to.be.eql([]);

    expect(dropRight([1, 2, 3], '1')).to.be.eql([1, 2]);
    expect(dropRight([1, 2, 3], -1)).to.be.eql([1, 2, 3]);
    expect(dropRight([1, 2, 3], 'abc')).to.be.eql([1, 2, 3]);
  });

  it('exception', function () {
    expect(dropRight).to.throw(Error);
    expect(dropRight).to.throw(TypeError);
  });

});
