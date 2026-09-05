const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'styles')));
app.use(express.static(path.join(__dirname,'icons')));
app.use(express.static(path.join(__dirname,'')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));

})

app.get('/dashboard/:id', (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"))
})

app.listen(port, () => {
})