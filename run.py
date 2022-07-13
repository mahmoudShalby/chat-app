from threading import Thread
from os import system

server = Thread(target=lambda: system('cd backend && npm start'))
client = Thread(target=lambda: system('cd frontend && npm run dev'))

server.start()
client.start()

server.join()
client.join()
