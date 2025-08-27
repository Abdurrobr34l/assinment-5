# Assignment Questions & Answers

## 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
`getElementById helps us to get an element by its id.
getElementsByClassName let us grab multiple elements with the same class and store in a collection.
querySelector selects the first matching element while
querySelectorAll selects all matching elements.`

## 2: How do you create and insert a new element into the DOM?
      
      let div = document.createElement('div')
      div.innerText = "Hi";  
      document.body.appendChild(div)


## 3: What is Event Bubbling and how does it work?

`When an target element triggers an event, it firsts run the event handler and then it event bubbles to the parent, grandparents and continues to the DOM tree. During this occurring the other events are also trigger (those element which are targeted with an event), till it reach at the top of the DOM tree.`

## 4: What is Event Delegation in JavaScript? Why is it useful?

`When we add an event listener to the parent element to handle its child element events. It reduces the number of event codes to write and no need to write the same event again for the newly added elements`

## 5: What is the difference between preventDefault() and stopPropagation() methods?

`preventDefault() prevent the browser default behavior like auto form submission
stopPropagation() stop the event bubbling up to parent elements in the DOM tree`