const { MessageService } = require("../services");
const getAll = async (req, res) => {
    const data = await MessageService.getAll();
    const text = data.map((item) => `<li>${item.name}</li>`).join(' ');
    const html = `<html><body><ul>${text}</ul></body></html>`;
    res.send(html);
};

const findById = async (req, res) => {
    const id = req.params.id;
    let text = "Not valid";
    const result = await MessageService.findById({ id });
    if (result) {
        text = result.name;
    }
    const html = `<html><body><ul><li>${text}</li></ul></body></html>`;
    res.send(html);
};
module.exports = {
    getAll,
    findById,
};
