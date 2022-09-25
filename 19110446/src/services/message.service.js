const { MyGroup } = require("../models");

class MessageService {
    async getAll() {
        return await MyGroup.getAll();
    }
    async findById({ id }) {
        return await MyGroup.findOne({ id });
    }
}

module.exports = new MessageService();
