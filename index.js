const express = require('express'); 
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/api', routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})