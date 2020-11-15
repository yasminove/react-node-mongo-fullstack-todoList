const express = require('express');

const app = express(); 
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 4000




app.get('/', (req, res) => {
    res.send(`home route works`)
})

app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`);
})