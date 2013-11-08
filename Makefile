test:
	@NODE_ENV=test node app.js & \
	./node_modules/.bin/mocha 

test-m:
	@NODE_ENV=test node app.js & \
	./node_modules/.bin/mocha test/models/*.js 

test-r:
	@NODE_ENV=test node app.js & \
	./node_modules/.bin/mocha test/routes/*.js 

.PHONY: test test-m test-r

