const Prices = require("../models/price");

const findAll = async() => {
    // to do
    try {
        const allPrice = await Prices.find({});
        return {
            success: true,
            message: "All data price",
            data: allPrice
        };
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}

const findById = async(id) => {
    const findPrice = await Prices.findById(id);
    return {
        success: true,
        message: "Categories found by id " + id,
        data: findPrice
    };
}
const create = async(newPrice) => {
    // to do
    const createdPrice = await Prices.create(newPrice);
    return createdPrice;
}

const update = async(updatePrices) => {
    // to do
    const { _id, product, price, source } = updatePrices;
    const updatePrice = await Prices.findByIdAndUpdate(_id, {
        product,
        price,
        source
    });
    console.log("updated");
    return {
        success: true,
        message: "Prices successfull!",
        data: updatePrice
    };
}

const remove = async(id) => {
    // to doF
    const removePrice = await Prices.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        data: removePrice,
        message: "delete is successfull"
    };
}

module.exports = {
    update,
    remove,
    findAll,
    create,
    findById
}