all: clean build test

install:
	npm install

build: 
	tsc

clean:
	rm -R build

test:
	npm test

run:
	node ./build/main.js

build-docker:
	docker build -t dott .