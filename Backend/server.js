const express = require('express');
const app = express();

app.use(express.json());

require('./config/config');

const cors = require('cors')
app.use(cors());



const adminRoute = require('./routes/admin');
app.use('/Admin', adminRoute);

const userRoute = require('./routes/user');
app.use('/User', userRoute);

const productRoute = require('./routes/product');
app.use('/Product', productRoute);

app.use('/uploads', express.static('uploads')); 


PortNumber = 3000 || process.env.PORT;

app.listen(3000, () => {
    console.log(`Server work on port ${PortNumber}`);
});
