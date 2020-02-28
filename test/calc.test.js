// 测试脚本

const add=require('../calc'),
    expect=require('chai').expect;

describe('加法函数的单元测试',function(){
    it('0+0=0',function(){
        expect(add(0,0)).to.be.equal(0);
    });
    it('1+0=1',function(){
        expect(add(3,5)).to.be.equal(8);
    });
    it('a+b=NaN',function(){
        expect(isNaN(add('a','b'))).to.be.ok;
    });
});