const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.mongo_URL).then(
    () => {
        console.log("Database Connected");
    }
)

.catch((err) => {
    console.log('error' + err);
})