Dott assignment
===============

## Introduction

This code receives as a input from `stdin` a set of bitmaps in a specific format and outputs to `stdout` the nearest white pixel to each pixel in the input. 

A bitmap is define as a text as shown below:

```
4 3 
100
001
000
100
```

The first line defines the size of the bitmap (in this case, 4 lines and 3 column, a.k.a. width = 3 and height = 4). The following 4 lines contains 3 columns each and each value is `0` or `1` (or, respectively, `black` or `white`).

The code listens the following format from `stdin`:

```
<number-of-bitmaps>
<first bitmap as defined previously>

<second bitmap>

<third bitmap>
```

(See the file [bitmaps.input](./bitmaps.input) for a real example)

Separated by an empty line, the output (in `stdout`) for each bitmap follows the format:

```
<distance-to-nearest-white-pixel-pixel1_1> <distance-to-nearest-white-pixel-pixel1_2> <distance-to-nearest-white-pixel-pixel1_3>
<distance-to-nearest-white-pixel-pixel2_1> <distance-to-nearest-white-pixel-pixel2_2> <distance-to-nearest-white-pixel-pixel2_3>
...
```

Given the bitmap shown above, the output is:

```
0 1 1 
1 1 0 
1 2 1 
0 1 2 
```

## To compile

Download the repo:

```bash
$ git clone git@github.com:ricardoatsouza/dott-assignment.git
```

Make sure you have `nodejs` and `typescript` installed in your environment. Run the following to install requirements:

```bash
$ make install
```

Finally build by running:

```bash
$ make 
```

This will **clean** (if a previous build was made), **build** and **test**.

## To run:

Use the provided [bitmaps.input](./bitmaps.input) file as an example and run:

```bash
$ cat bitmaps.input | make run
```

## Build and run from docker

To build a docker image, run:

```bash
$ make build-docker
```

To run from the docker container, execute:

```bash
$ cat bitmaps.input | docker run --rm -i -a stdin -a stdout dott
```

