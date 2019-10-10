<h1>Before you start, download the "Markdown Preview Enhanced" plugin for VSCode. Once done, right click within the document and click "Markdown Preview Enhanced: Open Preview on the side", so that the tasks can be more readable.</h1>

<u>Create each file in a different .js file</u>

**Task 1:**

You have the following story:

Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.

You need to:

- You have the following array - ['really', 'very', 'basically'] - these are overused words, you need to count each word how many times it has been used in the story above.
- You have the following array - ['extremely', 'literally', 'actually' ] - these are unnecessary words, you need to remove them from the story.
- Log in the console the length of words of the initial story and compare them with the new story's length, which should not include the unnecessary words.
- Log in the console how many times each overused word has been used using the following format:
  - {Word} has been used {n} times
- Log in the console how many sentances the story has.

**Task 2**

Create an object called 'menu'.

The menu object should include:
- Another object which will be called 'courses' which should include:
  - 3 properties:  appetizers, mains and desserts (each one should be initialized as an empty array).
  - A getter and a setter for each of the properties.
- A getter mettod for 'courses', which should return key/value pairs from the courses's object properties.
- A method add dish to course that would create a new object - 'dish', which takes three parameters - courseName, dishName and dishPrice.
  - The dish object should have 2 properties - name and a price and will get them from the appropriate parameters.
  - The method should then push this dish object into the appropriate array in your menu‘s courses object based on what courseName was passed in.

//////////////////////DONE

- Another method which will be called getRandomDishFromCource, that takes one parameter - courseName and add the following logic:
  - Retrieve the array of the given course’s dishes from the menu‘s courses object and store in a variable called dishes.
  - Generate a whole random index by multiplying Math.random() by the length of the dishes array.
  - Return the dish located at that index in dishes.
  
  ///////////////////////////////////////////////////////////////////

- A last method, called generateRandomMeal, which uses the following logic:
  - create 3 variables - main, appetizer and desert, which should be the result of calling the .getRandomDishFromCourse() method when we pass in the appropriate dish as a string - eg. 'main'.
  - Calculate the total price - make sure that the number is with two decimals.
  - return a string that contains all 3 dish names and the calculated total price for all three dishe. - something like "We will start with bla bla, the bla bla, finally bla bla, give us your money bla bla (). - do not quote me on this.

- Outside of the the menu object add 3 appetizers, 3 mains and 3 desserts of your choise, using the method you had created.
- Create a varaible that is equal to the generateRandomMeal
- Log that variable in the console.

**Task 3**

You will create a small library. Below are the following objects which you will have to create:

1. Books:
   1. Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
   2. Getters: all properties have a getter
   3. Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
2. Movies: 
   1. Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
   2. Getters: all properties have a getter
   3. Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
3. CD: 
   1. Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
   2. Getters: all properties have a getter
   3. Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Some of the properties are the same, therefore create a class that contains the shared properties, so you will only have to write them once.

No further instructions on how to proceed will be provided - call it a challenge if you want.

Resources:
- https://javascript.info/object
- https://javascript.info/class
- https://javascript.info/object-methods
- https://javascript.info/constructor-new
- https://javascript.info/property-accessors
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
- https://www.w3schools.com/js/js_objects.asp