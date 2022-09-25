const { HomeService } = require("../services");
const getAll = async (req, res) => {
    const data = await HomeService.getAll()
    res.json(data)
};

module.exports = {
    getAll,
};
