class Post {
	#data;
	constructor() {
		this.#data = [];
	}

	getAll() {
		return new Promise((resolve, reject) => {
			return resolve(this.#data);
		});
	}

	findOne({ slug }) {
		return new Promise((resolve, reject) => {
			return resolve(this.#data.find((post) => post.slug === slug));
		});
	}
	findIndex({ id }) {
		return this.#data.findIndex((post) => post.id === id);
	}
	insert(data) {
		return new Promise((resolve, reject) => {
			return resolve(this.#data.unshift(data));
		});
	}
	delete({ id }) {
		return new Promise((resolve, reject) => {
			const index = this.findIndex({ id });
			return resolve(this.#data.splice(index, 1));
		});
	}
	update(obj) {
		return new Promise((resolve, reject) => {
			const index = this.findIndex({ id: obj.id });
			const keys = Object.keys(obj);
			for (let key of keys) {
				if (obj[key]) {
					this.#data[index][key] = obj[key];
				}
			}
			return resolve(1);
		});
	}
	addComment({ id }, data) {
		return new Promise((resolve, reject) => {
			const index = this.findIndex({ id });
			return resolve(this.#data[index].comments.unshift(data));
		});
	}
}

module.exports = new Post();
