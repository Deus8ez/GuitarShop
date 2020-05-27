const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: Number, 
    guitarName: String, 
    guitarCost: Number, 
    quantity: Number
});

const acousticProductsModel = mongoose.model('AcousticGuitars', productSchema);
const electricProductsModel = mongoose.model('ElectricGuitars', productSchema);

module.exports = {acousticProductsModel: acousticProductsModel, electricProductsModel: electricProductsModel};


// module.exports = acousticProductsModel



