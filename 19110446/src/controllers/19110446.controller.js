const { MSSVService } = require("../services");

const findById = async (req, res) => {
    const id = req.params.id;
    const result = await MSSVService.findById({ id });
    if (result) {
        res.json(result);
    } else {
        res.json({ error: "not valid" });
    }
};

const insert = async (req, res) => {
    const body = req.body;
    const result = await MSSVService.insert(body);
    if (result) {
        res.json(result);
    } else {
        res.json({ error: "not valid" });
    }
};
module.exports = {
    findById,
    insert,
};
