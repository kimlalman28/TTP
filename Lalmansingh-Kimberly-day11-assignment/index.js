var pg = require ('pg');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //body parser 


app.set('view engine', 'ejs');
app.set('messages', './views');
app.set('form', './views');
app.set('show', './views'); //setting ejs

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';

app.get('/messages', function(req, res){ //messages home page get request
	pg.connect( connectionString, function(err, client, done){
			client.query('select * from messages', function(err, result){ //select all data from messages table
				res.render('form', {data: result.rows}) //render when page loads
				done();
				pg.end();
			})
		})
	})
app.post('/messages', function(req,res){ //post request when user submits a message
	pg.connect(connectionString, function(err, client, done){
		client.query(`insert into messages(title, body) values('${req.body.title}','${req.body.body}')`, function(err, result){	 //insert info into database table
			res.redirect('messages'); //stay on messages page when user submits
			done();
			pg.end();
		})
	})
})


app.get('/allmessages', function(req, res){ //page with all messages from database
	pg.connect(connectionString, function(err, client, done){
		client.query('select * from messages', function(err, result){
			res.render('messages', {data: result.rows})
			done();
			pg.end();
		})
	})
})

app.get('/messages/:id', function(req, res){ //individual message selection pages
	pg.connect(connectionString, function(err, client, done){
		var message_id = req.params.id; 
		client.query(`select * from messages where id = '${message_id}'`, function(err, result){ //select messages with a certain id
			res.render('show', {data: result.rows[0]}) //get first matched message from table
			done();
			pg.end();
		})
	})
})



app.listen(3000, function(){
	console.log("App now listening on port 3000")
})