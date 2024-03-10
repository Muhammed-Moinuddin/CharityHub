const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// This is the endpoint that the frontend is calling for the popular causes. fill it with a dictionary that has an array of causes. cause1, cause2, etc..
app.get('/api/popular-causes', (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  res.send({
    "causes": [
      {
        "id": 1,
        "name": "Cause 1"
      },
      {
        "id": 2,
        "name": "Cause 2"
      },
      {
        "id": 3,
        "name": "Cause 3"
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})