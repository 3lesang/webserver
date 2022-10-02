class Post {
	#data;
	constructor() {
		this.#data = [
			{
				id: 'p3493',
				title: 'day la tieu de',
				thumb: `https://picsum.photos/400/400?random=${Math.random()}`,
				content: 'day la noi dung',
				auth: 'sang',
				comments: [
					{
						id: 'c3432',
						auth: 'sang',
						content: 'binh luan 1',
					},
					{
						id: 'c3433',
						auth: 'sang',
						content: 'binh luan 2',
					},
				],
				created_at: '1/1/2022',
				updated_at: '2/2/2022',
			},
			{
				id: 'p3494',
				title: 'day la tieu de',
				thumb: `https://picsum.photos/400/400?random=${Math.random()}`,
				content: 'day la noi dung',
				auth: 'sang',
				comments: [
					{
						id: 'c3432',
						auth: 'sang',
						content: 'binh luan 1',
					},
					{
						id: 'c3433',
						auth: 'sang',
						content: 'binh luan 2',
					},
				],
				created_at: '1/1/2022',
				updated_at: '2/2/2022',
			},
		];
	}

	getAll() {
		return new Promise((resolve, reject) => {
			return resolve(this.#data);
		});
	}

	findOne({ id }) {
		return new Promise((resolve, reject) => {
			return resolve(this.#data.find((post) => post.id === id));
		});
	}
	findIndex({ id }) {
		return this.#data.findIndex((post) => post.id === id);
	}
	insert(data) {
		return new Promise((resolve, reject) => {
			return resolve(this.#data.push(data));
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
			for (key of keys) {
				this.#data[index][key] = obj[key];
			}
		});
	}
	addComment({ id }, data) {
		const index = this.findIndex({ id });
		this.#data[index].comments.push(data);
	}
}

module.exports = new Post();
