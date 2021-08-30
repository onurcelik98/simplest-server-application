reload:
	pm2 del app1.js
	PORT=8000 pm2 start app1.js -f
	PORT=8001 pm2 start app1.js -f
	PORT=8002 pm2 start app1.js -f
	PORT=8003 pm2 start app1.js -f

test:
	node app1.js

reboot:
	sudo systemctl reload nginx

run:
	curl localhost/$(ROUTE)

load:
	PORT=8000 pm2 start app1.js -f
	PORT=8001 pm2 start app1.js -f
	PORT=8002 pm2 start app1.js -f
	PORT=8003 pm2 start app1.js -f

status:
	pm2 status

clean:
	pm2 del app1.js

single:
	PORT=$(PORT) pm2 start app1.js -f