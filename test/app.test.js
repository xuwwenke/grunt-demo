const expect = require('chai').expect,

      http   = require('http');



describe('矩形计算器 HTTP API 接口测试', function() {

  it('正确请求格式测试', function(done){

    http.get('http://localhost:8080/rectangle/?width=20&height=20', function(res){

      var result = '';



      res.on('data', (chunk) =>{ result += chunk; });//接收数据

      res.on('end', () =>{//数据解析

        var rect = JSON.parse(result);

        expect(rect.area).to.be.equal(400);

        expect(rect.perimeter).to.be.equal(80);

        done();//异步代码需要引入

      })

    });

  });

});