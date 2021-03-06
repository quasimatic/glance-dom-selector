# Glance DOM

Glance is a simple way to reference elements in the DOM. It’s intention and hope is to keep you from looking at the DOM in order to gain a handle to an element. However, if you do inspect the DOM (for example to grab a ```class``` or an ```id``` off of an element in case that's your only option) then referencing elements by classes and id’s are supported too. 

To best understand how it works, experimenting with it goes a long way. You can learn how to read Glance by playing a game at [Come Take A Glance](http://quasimatic.org/take-a-glance/) or by tinkering around with our [CodePens](https://codepen.io/quasimatic/). Learn even more at [Quasimatic.org](https://quasimatic.org/glance)

## Documentation

For details on all good things that are Glance, come [read the docs here](http://quasimatic.org/glance-dom). 

Documenting everything is currently being worked on so if there are differences between what you see here and what you see in the GitBook, please bare with us as we're working hard to pull them together. Nothing is inconsistant between the two, but you might find some here and some there for just a while.


### Browser

If you want to use Glance DOM in your Browser simply include it in a ```<script>``` tag on your page as shown below and then use it as shown below in example-script.js

```javascript
<html>
  <body>
    <button type="submit">Buy It!</button>
    
    <script src="http://quasimatic.org/glance-dom/dist/glance-dom.js" type="text/javascript"></script>
    <script src="example-script.js" type="text/javascript"></script>
  </body>
</html>
```
###### NOTE: In the above example Glance is being served over http. It is also available at https://quasimatic.org/glance-dom/dist/glance-dom.js

And then in your ```example-script.js``` file you can find the element that contains "Buy It!" by executing the following:

```javascript
var element = glanceDOM("Buy It!");
```

Once executed, ```element``` will contain the ```button``` element that contains the text "Buy It!". You never had to drop down to using any kind of CSS selector, or God forbid XPATH :)

### Node

```shell
npm install glance-dom
```

#### Example
script.js
```javascript
var glanceDOM = require("glance-dom").default;
var element = glanceDOM("click me");
```
