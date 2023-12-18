Counter service for library app

Создано приложение Node.js, обрабатывающее два роута:
- увеличить счётчик POST /counter/:bookId/incr;
- получить значение счётчика GET /counter/:bookId — приложение контейнеризировано.
- Приложение хранит count в redis
- Единственный клиент этого приложения другое прложение library (оно тут https://github.com/eldarklv/netology-library-hw/tree/2_5_docker)
- Сервис завернут в докер и лежит так же на докер хаб eldarklv/nodejs-counter:0.0.2
