const express = require('express');
const app = express();

const cors = require('cors')

app.use(express.json());
app.use(cors());


require('./config/config');

const adminRoute = require('./routes/admin');
app.use('/Admin', adminRoute);

const userRoute = require('./routes/user');
app.use('/User', userRoute);

const productRoute = require('./routes/product');
app.use('/Product', productRoute);

app.use('/uploads', express.static('uploads')); 


PortNumber = 3000 || process.env.PORT;

app.listen(3000, () => {
    console.log(`Serverr work on port ${PortNumber}`);
});
