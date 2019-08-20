/**
 * Update by tgxhx on 2019/04/13.
 */
const path = require('path');
const express = require('express');
const app = express();
const fs =require('fs');
function init(app) {

  app.get('/api/book', require('./router/book'));

  app.get('/api/booklist', require('./router/booklist'));

  app.get('/api/titles', require('./router/booktitles'));

  app.get('/api/type', require('./router/type'));

  app.get('/api/banner',function (req,res) {
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    fs.readFile('./banner.json','utf-8',function (err,data) {
      if(err){
        console.error(err);
      }
      res.send(data)
    })
  })
  try{
  app.get('/api/checkuser/:user/:pwd', require('./router/user'))
  }catch(e){
	  res.end(e.stack);
  }
  app.get('/api/registuser/:user/:pwd', require('./router/registuser'))
  app.listen(9000, () => {
    console.log(`server running at port 9000`);
  });
  
}

init(app);
