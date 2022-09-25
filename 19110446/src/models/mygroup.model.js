class MyGroup {
    #data;
    constructor() {
        this.#data = [
            { id: "19110446", name: "Le Minh Sang" },
            { id: "19110448", name: "Nguyen Pham Hoang Nguyen" },
        ];
    }

    getAll() {
        return new Promise((resolve, reject) => {
            return resolve(this.#data);
        });
    }

    findOne({ id }) {
        return new Promise((resolve, reject) => {
            return resolve(this.#data.find((student) => student.id === id));
        });
    }

    insert(obj) {
        return new Promise((resolve, reject) => {
            return resolve(this.#data.push(obj));
        });
    }
}

module.exports = new MyGroup();
