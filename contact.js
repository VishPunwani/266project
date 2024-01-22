

function formCheck() {
    //This is the function named formCheck and it is being declared with opening squiggly brackets

    var arr = [];
  //First assignment is the variable “arr” being get to an empty set

    
    function updateBorderStyle(element, isValid) {
      var borderStyle = isValid ? "5px solid #000000" : "5px solid #800080";
      element.style.border = borderStyle;
    }
    //This function is being named updateBorderStyle and it is being declared with
    //opening squiggly brackets. It takes two arguments: element and isValid.
    //inside of this function we have the variable borderStyle and it is being assigned to a ternary conditional statement
    //IsValid will either get passed through a true or false value and if it is true then the first line of code on the line
    //on the left side of the colon will execute and if it is false then the right side of the colon will execute
  
    var input = document.getElementById('first-box').value.trim();
    //This is the variable “input” being assigned to the value of the element with the id of “first-box” and the value of the
    //user input and then the .trim method will exclude any space or white space from the input at the end 

    var input2 = document.getElementById('second-box').value.trim();
  //This is the variable “input” being assigned to the value of the element with the id of “second-box” and the value of the
    //user input and then the .trim method will exclude any space or white space from the input at the end 

    var input3 = document.getElementById('comment-box').value.trim();
//This is the variable “input” being assigned to the value of the element with the id of "comment-box” and the value of the
    //user input and then the .trim method will exclude any space or white space from the input at the end 

    if (input.length > 0) {
      updateBorderStyle(document.getElementById('first-box'), true);
      arr.push(true);
  //This block of code above uses an “ if else statement” and it is checking of the value of input.length is greater than 0.
// if it is greater than 0 then we will utilize our updateBorderStyler function from earlier by passing through the arguments of
// "first-box" as the element and true as the isValid and then the code on the left side of the colon will execute
// lastly we will push this information into our empty arr variable.

    } else {
      updateBorderStyle(document.getElementById('first-box'), false);
    }
// and if it is not greater than 0 then we will utilize our updateBorderStyler function by passing through the arguments of
// "first-box" as the element and false as the isValid and then the code on the right side of the colon will execute

    if (input2.length > 0) {
      updateBorderStyle(document.getElementById('second-box'), true);
      arr.push(true);

  //This block of code above uses an “ if else statement” and it is checking of the value of input.length is greater than 0.
// if it is greater than 0 then we will utilize our updateBorderStyler function from earlier by passing through the arguments of
// "second-box" as the element and true as the isValid and then the code on the left side of the colon will execute
// lastly we will push this information into our empty arr variable
    } else {
      updateBorderStyle(document.getElementById('second-box'), false);
    }

// and if it is not greater than 0 then we will utilize our updateBorderStyler function by passing through the arguments of
// "second-box" as the element and false as the isValid and then the code on the right side of the colon will execute


if (input3.length > 0) {
  updateBorderStyle(document.getElementById('comment-box'), true);
  arr.push(true);

//This block of code above uses an “ if else statement” and it is checking of the value of input.length is greater than 0.
// if it is greater than 0 then we will utilize our updateBorderStyler function from earlier by passing through the arguments of
// "second-box" as the element and true as the isValid and then the code on the left side of the colon will execute
// lastly we will push this information into our empty arr variable
} else {
  updateBorderStyle(document.getElementById('comment-box'), false);
}

// and if it is not greater than 0 then we will utilize our updateBorderStyler function by passing through the arguments of
// "second-box" as the element and false as the isValid and then the code on the right side of the colon will execute




    if (arr.length === 3) {
      //This code starts off again with another if else statement, 
      //however this time we are seeing whether or not the length of the variable arr is equal 
      //(or has 2) items inside of it and if you can remember from our code above, 
      //if both of our in else statements are both true then we “pushed” both true values into 
      //that arr variable. This means that we have 2 items inside of it

      console.log("form submitted");

      //This line of code is mainly used for debugging code and is apart of 
      //the developers toolkit. We use the console.log function to see if our code is working. 
      //The creator of this code wanted to see if the string “form submitted” would display here

      document.getElementById('validation-box').innerHTML = "<p>Form Submitted</p>";

      //This line of code takes the element that would selected in this case “demo3” 
      //and we will be changing the actual HTML of it based on what we are setting the new 
      //value to in this case we are writing the words “form submitted” within a pair of paragraph
      // tags

    } else {
      document.getElementById('validation-box').innerHTML = "<p>Missing information!</p>";
    }
    //This line or i guess section of code is the latter half of the if else statement 
    //and so it is the else statement and this code tells us what will happen if the condition 
    //is not met. In this case it will be changing the same HTML to “Missing information”


  }
  //This is the closing squiggly bracket for the function named formCheck