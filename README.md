# Website Performance Optimization P4 Front-end Nanodegree

## Project Overview

Website Performance Optimization of the Mobile Portfolio is a Udacity Frontend Nanodegree project teaching the basics of the Critical Rendering Path. The goal of the completed project is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques from the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

## Install

For the latest version, clone this [repository](git@github.com:tswei/frontend-nanodegree-mobile-portfolio.git)

To install dependencies, [Node.js](https://docs.npmjs.com/getting-started/installing-node), [Bower](http://bower.io/#install-bower), and [Python](https://www.python.org/downloads/) are required. Instructions on installing these can be found by following the links. Thy should all be installed globally.

To install the dependencies, run:

`pip install -t lib -r requirements.txt`

`npm install`

`bower install`

A template configuration file is supplied. This must be modified to include credentials obtained from the following APIs: [Yelp](https://www.yelp.com/developers/documentation/v2/search_api). The configuration file must be renamed to config.json to properly work with app.py.

You will also need to install [Google AppEngine SDK for Python](https://cloud.google.com/appengine/downloads). Once installed, you can initialize a development server by running `dev_appserver.py`. Its default location is: `C:/Program Files/Google/Cloud SDK/google-cloud-sdk/platform/google_appengine/dev_appserver.py`.

## Instructions to Run

After following the instructions for installation, a development server can be initialized by running `dev_appserver.py` with C:/PATH/ROOT_DIRECTORY as an argument.

The server's default port is 8080

## Documentation

Currently there is no documentation for this project

## Notes

### Optimizations to Achieve Rendering Benchmarks

Two optimizations were made in main.js.

Reducing load time for slider adjustment of size was achieved by reducing the number of queries to the page elements and moving static calculations outside the for loop iteration.

Running consistently at, or above, 60 fps was achieved by calculating the phase the minimum number of times (5) to achieve the equivalent effect. The iteration over the 200 pizza elements then referenced the 5 phase calculations stored in an array using the iterator modulo 5.

Comments on my original solutions for areas of continued optimization included: use selector getElementsByClassName() instead of querySelectorAll(), assign each pizza a class and programamatically change the class style rather than individual pizza style, and reduce number of 200 pizzas to an amount shown on the screen.

Changes were made for query selectors to getElementsByClassName in order to reduce query computation time.

Exploring the possibility of using javascript to change a class in the css stylesheets for resizing the pizza yielded a less efficient result than iterating over all the pizzas. Average time to resize pizzas when changing class style was 0.86 ms while average time while iterating over the 100 elements and changing styles was 0.66 ms. Experimental code was left commented out in the js file without explanatory comments for additional constructive criticism on ways it could have been improved.

Also exploring the class style change method for moving pizzas in the background lead to the conclusion that 40 seperate classes would be needed to replace the '.mover' class and effectively retain the same animation.
Since there are 8 columns created by the moving pizzas, and there are 5 phases used to alter style, a repetative pattern would only be seen after 40 pizzas. This solution would only reduce the iteration by a marginal amount, and seen from the previous experiment, javascript is less time efficient in retrieving stylesheets to change class styles than performing assignment operations within iterators.

The 200 pizzas were reduced in number to 40 pizzas, which will make the execution of iteration over items and assignment quicker than changing 40 stylesheet elements.

## Contribute

Currently this a project not for development. However, if there are bugs, feature requests, or other development interests, please see the 'Contact Us' section for information.

## Contact Us

Contact is through GitHub @tswei.

## History

This project originated as a [Udacity Front End Nanodegree Project](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

## List of Authors

See AUTHORS.md

## Copyright and Licensing

See LICENSE.md

## Legal Notices

See LEGAL.md