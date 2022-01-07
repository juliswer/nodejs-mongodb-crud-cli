const {connect} = require('mongoose');

const connectDB = async () => {
    await connect('mongodb://localhost/taskcli')
    console.log('MongoDB Connected')
}

module.exports= {
    connectDB
}