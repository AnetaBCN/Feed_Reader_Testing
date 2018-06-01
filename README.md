#Udacity Front-end Development Nanodegree: Feed Reader Testing

#Google Scholarship

## Table of Contents

* [1. Introduction](#introduction)
* [2. Arcade Game Clone: how does it work?](#howtoplay)
* [2.1. Basic functionalities](#basicfunctionalities)
* [2.2. Additional functionalities](#additionalfunctionalities)
* [3. Arcade Game Clone: how to run it?](#howtorun)
* [4. Contributing](#contributing)

## 1. Introduction
This projects is a result of an assignment in a Udacity course for a front-end developers. In this project is given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! The objective of a project is to deliver the Jasmine testing script.

## 2. Feed Reader Testing: how does it work?
The project had many challenges where the most important one are:
1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL and name defined and that the URL either name is not empty. To achieve it, the test loops over allFeeds array and URL´s and name´s properties.
The length of the URL´s elements and names cannot be equal to 0.
2. Write a new test suite named `"The menu"` that ensures the menu element is hidden by default and that the menu changes visibility when the menu icon is clicked.
3. Write a test suite named `"Initial Entries"` that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
4. Write a test suite named `"New Feed Selection"` that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

The test is accessible in .../jasmine/spec/feedreader.js
To run it, open index.html.

##3. Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
