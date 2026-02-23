# B13-A4-PH-Job-Tracker
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans: getElementById gets one element by its id, getElementsByClassName gets a html collection by all the elements with that class, querySelector gets first element that matches css selector and querySelectorAll gets all elements that match css selector as a node list.

## 2. How do you create and insert a new element into the DOM?

### Ans: first select a container element .then create a new element with document.createElement() , add contaent or attributes and  insert it into the container using appendChild().

## 3. What is Event Bubbling? And how does it work?

### Ans: Event bubbling is when an event on an element spreads up to its parent elements, so parents can also respond unless stopPropagrtion() is used.

## 4. What is Event Delegation in JavaScript? Why is it useful?

### Ans: Event delegation is when you put an event listener on a parent to handle events on its children. It is useful for saving memory and handling dynamic elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### Ans: preventDelault() stops the default browser action, while stopPropagation() stops the event from bubbling to parent elements.