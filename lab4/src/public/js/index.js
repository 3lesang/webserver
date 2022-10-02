const deleteBtn = document.getElementsByClassName('delete');
const editBtn = document.getElementsByClassName('edit');
const addBtn = document.getElementById('add');
const modal = document.getElementById('addModal');
const cicle = document.getElementsByClassName('cicle');

addBtn.onclick = function () {
	modal.style.display = 'block';
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	};
};

Array.from(cicle).forEach((btn) => {
	btn.addEventListener('click', () => {
		const post = btn.parentElement;
		const menu = post.querySelector('.menu');
		menu.classList.toggle('show');
	});
});
Array.from(deleteBtn).forEach((btn) => {
	btn.addEventListener('click', async () => {
		if (confirm('Ban co muon xoa khong?')) {
			btn.parentElement.parentElement.remove();
			const id = btn.dataset.id;
			const res = await fetch('/post', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id }),
			});
			const data = await res.json();
			alert(data.status);
		}
	});
});

Array.from(editBtn).forEach((btn) => {
	btn.addEventListener('click', async () => {
		const id = btn.dataset.id;
		const modal = document.getElementById(`modal__${id}`);
		modal.style.display = 'block';
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = 'none';
			}
		};
		const parent = btn.parentElement;
		const form = parent.querySelector('form');
		form.style.display = 'block';
	});
});
