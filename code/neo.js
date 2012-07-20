

var http = require('http');
//var util = require('util');
var request = require('request');

exports.index = function(req, resp){



  //res.render('neo/index', {  title: 'this is ne index page '  });
  
  
  
		var options = {
		  host: 'http://localhost:7474',
		  port: 80,
		  method: 'POST'
		};

	//' http://localhost:7474/db/data/cypher {   "query" : "start x  = node(17) return x" }'

	
		request({
		  url: 'http://localhost:7474/db/data/cypher',
		 
		  method: 'POST',
		  body: JSON.stringify({   "query" : "start x  = node(17) return x" })
		}, function (err, res, body) {
		  
				//console.log(body);

		  if (!err && res.statusCode == 200) 
		  {
		  
			var obj = JSON.parse(body);

			console.log( obj.data[0][0].data.name);
			//console.log(body);
			
			
			resp.render('neo/index', {  title: obj.data[0][0].data.name  });
			
		  }
		});
	
  
  
 // res.end();
 
  
};


exports.create_user_get_exp = function(req, res){

  res.render('neo/create_user_view', {  result: 'dfgd'  });

};




exports.create_user_post_exp = function(req, res){

	if(req.body.username == "" || req.body.password == "" )
	{
	  res.render('neo/create_user_view', {  result: 'please fill the form completely'  });
	}
	else
	{
		console.log(req.body.username);
		console.log(req.body.password);
		res.end("hey "+req.body.username + "!");
	}
	

};





		


