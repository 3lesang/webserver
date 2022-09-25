const { MyGroup } = require("../models");

class MSSVService {
    async findById({ id }) {
        return await MyGroup.findOne({ id });
    }
    async insert(obj) {
        const check = await MyGroup.findOne({ id: obj.id });
        if (!check) {
            if (await MyGroup.insert(obj)) {
                return obj;
            }
        }
        return 0;
    }
}

module.exports = new MSSVService();
