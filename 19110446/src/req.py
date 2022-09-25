import requests

res = requests.post('http://localhost:5000/19110446', json={'id': '19110449', 'name': 'Duong Nguyen Huy Vu'})

print(res.text)
