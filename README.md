### Website Performance Optimization portfolio project

### Project serving at http://alert-flames-849.appspot.com/

### Running Project Locally

1. Using Google App Engine
- Install Google App Engine and add "alias dev_appserver='C:/PATH/dev_appserver.py'" to your ~/.bashrc

```bash
$> cd path/to/
$> dev_appserver /your-project-folder
```

- Open a browser and visit localhost:8080

1. Previous method with SimpleHTTPSever is still vaild, but will not serve minified files.

### Serving Remotely

1. Using Google App Engine
- Install Google App Engine and add "alias appcfg='C:/PATH/appcfg.py'" to your ~/.bashrc
- Create a project on your Google App Engine Development Console at https://console.developers.google.com/project
(requires Google Account)
- Using "your-project-name" provided in Google App Engine Development Console
- Configure your app.yaml file to include "application: your-project-name"

```bash
$> cd path/to/
$> appcfg --oauth2 update /your-project-folder
```

- Open a browser and visit http://your-project-name.appspot.com/

### Optimizations in main.js

Two optimizations were made in main.js.

Reducing load time for slider adjustment of size was achieved by reducing the number of queries to the page elements and moving static calculations outside the for loop iteration.

Running consistently at, or above, 60 fps was achieved by calculating the phase the minimum number of times (5) to achieve the equivalent effect. The iteration over the 200 pizza elements then referenced the 5 phase calculations stored in an array using the iterator modulo 5.

Comments on my original solutions for areas of continued optimization included: use selector getElementsByClassName() instead of querySelectorAll(), assign each pizza a class and programamatically change the class style rather than individual pizza style, and reduce number of 200 pizzas to an amount shown on the screen.

Changes were made for query selectors to getElementsByClassName in order to reduce query computation time.

Exploring the possibility of using javascript to change a class in the css stylesheets for resizing the pizza yielded a less efficient result than iterating over all the pizzas. Average time to resize pizzas when changing class style was 0.86 ms while average time while iterating over the 100 elements and changing styles was 0.66 ms. Experimental code was left commented out in the js file without explanatory comments for additional constructive criticism on ways it could have been improved.

Also exploring the class style change method for moving pizzas in the background lead to the conclusion that 40 seperate classes would be needed to replace the '.mover' class and effectively retain the same animation.
Since there are 8 columns created by the moving pizzas, and there are 5 phases used to alter style, a repetative pattern would only be seen after 40 pizzas. This solution would only reduce the iteration by a marginal amount, and seen from the previous experiment, javascript is less time efficient in retrieving stylesheets to change class styles than performing assignment operations within iterators.

The 200 pizzas were reduced in number to 40 pizzas, which will make the execution of iteration over items and assignment quicker than changing 40 stylesheet elements.

### OLD README
Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>

