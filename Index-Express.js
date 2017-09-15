const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome HelloJs!!')
})

app.listen(3000, _ => console.log('Example app listening on port 3000!'))
