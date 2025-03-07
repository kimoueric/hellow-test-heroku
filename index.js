const express = require('express')

const app = express()

const port  = process.env.APP_PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running on port ${port}`)
    }
})
