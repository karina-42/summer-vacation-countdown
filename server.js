const express = require('express')
const app = express()
const PORT = 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running at port ${PORT}, you better go catch it`);
})
