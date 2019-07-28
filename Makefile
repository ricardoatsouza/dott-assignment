all: build

build: 
	tsc

clean:
	rm -R build

run:
	node ./build/main.js
