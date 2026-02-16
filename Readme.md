Let's start modifying the DOM!

You're given a skeleton HTML file and a skeleton Javascript file.

The HTML contains a div with the id "tasks". 
There are two buttons, addItem and completeItem.

Your Javascript will create a class to hold To Do list items. The class will need to contain data for an task description, a due date, a priority, and a boolean flag indicating that it is complete. Make these private.

The methods are a constructor, getters for the four data fields, and a setter for the flag indicating complete.

Your two buttons will do the following:
addItem: Prompt for the task, due date, and priority. Create a work item, and add it to an array of workitems. Call redraw.
completeItem: Prompt for a task number, and change its completion status to true. Call redraw.

redraw: Empty the div of all items. For each work item in your array, create a new paragraph that contains the item number (index in the array), task, due date, and priority. If it is done, draw it in green. If it is not done, draw it in red.


The skills you'll need to use are:
- DOM editing: Find an element in the DOM, remove children from that element, create a new paragraph and append it to a parent element, add text and use colors.
- Javascript classes: Define a class with properties and methods. Make the properties private.
- Create and traverse a Javascript array that contains objects.
