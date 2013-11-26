test:
	./node_modules/.bin/mocha 

test-m:
	./node_modules/.bin/mocha test/models/*.js 

test-r:
	./node_modules/.bin/mocha test/routes/*.js 

.PHONY: test test-m test-r

