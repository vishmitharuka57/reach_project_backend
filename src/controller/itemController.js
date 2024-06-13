const Item = require("../model/itemModel")

const getAllItems = async (req,res) => {
    const result = await Item.find().sort({createAt: -1});  //-1 means ascending order
    res.status(200).json(result);
}

const getSearchItems =  async (req,res) =>{

}
 
module.exports = {
    getAllItems
} 