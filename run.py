from threading import Thread
from os import system
from webbrowser import open_new_tab as open_link

server = Thread(target=lambda: system('cd backend && npm start'))
client = Thread(target=lambda: system('cd frontend && npm run dev'))

open_link('http://localhost:3000')

server.start()
client.start()

server.join()
client.join()
