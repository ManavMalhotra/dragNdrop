const express = require('express')

let app = express()
let port = 3000;
let connection = require('./config/mongoose');
const mongoose = require('mongoose');

const alphabats = require("./models/schema")

//To update value edit this code
// alphabats.create({name: 'Manav',a: 10,b: 20,c: 30,d: 40,e: 50}, (err, data) => {
// 	if (err) {
// 		console.log(err)
// 	}
// })

app.set('view engine', 'ejs');
app.set('views', './public');

app.use(express.static('public'))

app.get('/', (req, res) => {
	alphabats.findOne({}, {}, { sort: { 'created_at' : -1 } }, (err, data)=> {
		if (err) {

		}else{
			res.render('index',{
				a: data.a,
				b: data.b,
				c: data.c,
				d: data.d,
				e: data.e
			})

		console.log(data)
		}
	})


})


app.listen(port, () => {
	console.log(`Server started at ${port}...`)
})

app.post('/getData', (req, res) => {
	console.log(req.body)
	res.redirect('/')
})
