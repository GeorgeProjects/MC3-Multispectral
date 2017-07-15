/**
 * Created by liqiusheng on 15/07/2017.
 */
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var server = require('http').createServer(app)

app.use(bodyParser.urlencoded({
	extended: true
}))

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
	else  next();
})

// ------------------------------------------- POST ---------------------------------------------------------
app.post('/api/all', function (req, res) {
	let body = req.body
	let results = []
	if (Object.keys(req.body).length !== 0) {
		let dataBaseName = body.databaseName
		// results = queryDatabase(dataBaseName)
		results.push(dataBaseName)
	}
	res.json({ data: JSON.stringify(results) })
})

// -----------------------------------  init ------------------------------------------------------
app.post('/api/init', function (req, res) {
	let body = req.body
	let results = []
	if (Object.keys(req.body).length !== 0) {
		let dataBaseName = body.databaseName
		let originalData = body.originalData
		// todo

		// results = queryDatabase(dataBaseName)
	}
	res.json({ data: results })
})

// get
app.get('/test', function (req, res) {
	let query = req.query
	// todo
	let results = []
	res.send(results)
})

// ------------------- Main Function ------------------
function main () {
	let PORT = process.env.PORT || 8002
	console.log(PORT)
	server.listen(PORT)
}

main()