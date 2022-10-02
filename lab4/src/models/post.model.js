class Post {
	#data;
	constructor() {
		this.#data = [
			{
				id: 'p3493',
				title: 'Từ những kẻ cặn bã, tìm lại ý nghĩa của hai chữ "Tình Yêu"',
				thumb: `https://picsum.photos/400/400?random=${Math.random()}`,
				content:
					'Câu chuyện được kể mà không có góc nhìn cố định xuyên suốt vào một nhân vật. Tại mỗi điểm, chúng ta lại được dẫn dắt bởi một nhân vật khác nhau. Vì vậy theo tôi, tất cả những nhân vật mà khán giả được đặt góc nhìn vào đều là nhân vật chính. Đây là một cách thức triển khai thú vị khi chúng ta thực sự biết được nguyên do và cảm xúc của mỗi nhân vật, rồi khi nhân vật đạt tới bước ngoặt của sự phát triển thì nó sẽ trở nên thuyết phục hơn nhiều khi nó đã nhận được sự đồng cảm từ khán giả trong suốt quãng thời gian câu chuyện xảy ra. Tôi cũng rất thích nét vẽ của cả Manga và Anime. Thậm chí ở trong phiên bản Anime, các đoạn cắt cảnh đều được thực hiện rất nghệ thuật vượt quá sự tưởng tượng của tôi. Vì vậy tôi khuyến khích các bạn đều nên đọc cả Manga và xem Anime để có trải nghiệm tốt nhất.',
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
			return resolve(this.#data[index].comments.push(data));
		});
	}
}

module.exports = new Post();
