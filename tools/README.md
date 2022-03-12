# Recipe Finder Tools

Some useful tools used during the development of the project

## Runtime dependencies

Make sure you have all of those installed on your machine.

* [Python3](https://www.python.org/) - the python interpreter
* [Selenium](https://www.selenium.dev/) - for downloading images off the Internet
* [Selenium Webdriver](https://www.selenium.dev/) - for downloading images off the Internet
* [Libre Office](https://www.libreoffice.org/) - for automating the recipe filtering process

## Build dependencies

Unfortunately, we don't provide a `requirements.txt` or `setup.py` file yet. You will have to go through the scripts and collect the missing dependencies yourself.<br>
The web scraping scripts use the [dryscrape](https://dryscrape.readthedocs.io/en/latest/) library, which is not supported on Windows at the time of writing. You will probably need Linux or WSL.