const express = require('express')
const path = require('path')
const app = express()

// paths

// app.get('/', (req, res) => {
// 	res.send('hello')
// })

//status
app.get('/', (req, res) => {
	res.status(200).send('go to /shoes to get site')
})

//static files

//serve every file inside client inside client folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/shoes', (req, res) => {
	//send file from root/client/profile.txt
	res.sendFile(path.join(__dirname,'./client/shoes.html'))
})

//run server
app.listen(3000, () => {
	console.log('server listening on port 3000')
})
