const deleteBtn = document.getElementsByClassName('delete');
const editBtn = document.getElementsByClassName('edit');
Array.from(deleteBtn).forEach((btn) => {
	btn.addEventListener('click', async () => {
		if (confirm('Ban co muon xoa khong?')) {
			btn.parentElement.remove();
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
		const res = await fetch(`/post/${id}?q=json`);
		const parent = btn.parentElement;
		const form = parent.querySelector('form');
		const title = form.querySelector('input[name="title"]');
		const content = form.querySelector('textarea');
	});
});
