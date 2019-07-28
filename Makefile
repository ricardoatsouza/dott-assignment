all: clean build test

build: 
	tsc

clean:
	rm -R build

test:
	npm test

run:
	node ./build/main.js
