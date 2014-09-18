**In order to get Cucmber to work, you have to do the following:**

- Pre-requisite: Have node.js (greater than version v0.10.0) installed on your machine. Just google how to do this. 

**Note:** Protractor uses Jasmine, get familiar with it.

Now it is time to install some protractor goodness. Do the follow - each new line is a new terminal command

The below installs protractor with node package manager globally. Make sure protractor installed by running protractor --version in your terminal.
```
npm install -g protractor
```

Webdriver is a really easy way to get a Selenium Server up and running
```
webdriver-manager update
```

Now, let's start the server
```
webdriver-manager start
```

Go thru this tutorial and make sure your protractor works as expected - Start at Step 0 - 
http://angular.github.io/protractor/#/tutorial




**In order to use Gherkin syntax, you'll need to install a few more node packages.**

Add cucumber globally
```
npm install -g cucumber
```

Add mocha - you can also write tests with mocha
```
npm install -g mocha
```

Add chai and chai-as-promised
```
npm install chai
npm install chai-as-promised
```

Checkout the files in /cucumber/lib.feature, cucumber/stepDefinitions.js, and cucumberConf.js to get a better feel for how this all relates to each other.
