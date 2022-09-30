class Post {
	#data;
	constructor() {
		this.#data = [
			{
				id: 'p3493',
				title: 'day la tieu de',
				thumb: '',
				content: 'day la noi dung',
				auth: 'sang',
				comments: [],
				created_at: '1/1/2022',
				updated_at: '2/2/2022',
			},
			{
				id: 'p3494',
				title: 'day la tieu de',
				thumb: '',
				content: 'day la noi dung',
				auth: 'sang',
				comments: [],
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

	insert(obj) {
		return new Promise((resolve, reject) => {
			return resolve(this.#data.push(obj));
		});
	}
}

module.exports = new Post();
