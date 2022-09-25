const { MyGroup } = require("../models");

class HomeService {
    async getAll() {
        return await MyGroup.getAll();
    }
}

module.exports = new HomeService()
