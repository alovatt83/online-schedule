# Online Word Day Scheduler
>  This application allows the user to complete a timed quiz based on JavaScript trivia questions. Your highscore is based on your remaining time after you've finished answering all of your queations. But be careful, for every question you answer incorrectly, you'll be deducted 10 seconds of your remaining time!  

## Table of contents
* [General info](#general-info)
* [Deployed link](#deployed-link)
* [Screenshots](#screenshot)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
Fith weekly assignment due on Sunday January 17, 2021 @ 11:59 PM.

##Deployed link
https://alovatt83.github.io/online-schedule/

## Screenshot
![Homepage Screenshot](https://alovatt83.github.io/online-schedule/assets/images/screenshot.png)

## Technologies
* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap
* moment.js


## Setup
Clone files into your own root directory, file extensions are relative and will operate normally.

## Code Examples
Show examples of usage:

HTML:


 <head>
  <!-- Stlye Linking Bootstrap, Google Fonts, Internal Stylesheet -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./assets/css/style.css">
  <title>Work Day Scheduler</title>
</head>

<body>

  <header class="jumbotron">
    <h1 class="display-3">Work Day Scheduler</h1>
    <p class="lead">A simple calendar app for scheduling your work day</p>
    <p id="currentDay" class="lead"></p>
    <p id="currentTime" class="lead"></p>
  </header>

  <div class="container container-fluid time-block">
  <!-- Time Div 8 AM -->
   <div class="input-group mborder">
      <div class="input-group-prepend row">
        <span class="input-group-text hour">08:00 AM</span>
      </div>
      <textarea value="" id="entry8am" type="text" cols="100" rows="2" class="form-control description textarea"></textarea>
      <div class="input-group-append">
        <button id="button8am" class="btn btn-outline-secondary saveBtn" type="button"><i
            class="far fa-save"></i></button>
      </div>
    </div>
  
  
CSS:

body {
  font-family: Copperplate, Papyrus, fantasy;
  font-size: 16px;
  line-height: 1;
 
  font-weight: 900;
  color: white;
}

.textarea {
  background: transparent;
  resize: none;
  color: #000000;
  border-left: 3px dotted black;
  border-bottom: 3px;
  border-right: 3px dotted black;
  padding: 0;
  border-radius: 0;
  text-justify: center;
}

.jumbotron {
  text-align: center;
  background-color: transparent;
  color: black;
  border-radius: 0;
  border-bottom: 20px solid lightgrey;
  font-weight: bold;
}

footer {
  text-align: center;
}

.description {
  white-space: pre-wrap;
}

.time-block {
  text-align: center;
  border-radius: 15px;
  padding-bottom: 10px;
}

.row {
  white-space: pre-wrap;
  border-top: 1px solid white;
}

.hour {
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  height: 85px;
}

.expired { 
  background-color: darkgray;
  color: white;
}

.current {
  background-color: lightblue;
  color: black;
}

.upcoming {
  background-color: #77dd77;
  color: black;
}

JavaScript:

  if (now > 17) {
      $("#entry5pm").addClass("expired");
    } else if (now >= 17 && now < 18) {
      $("#entry5pm").addClass("current");
    } else if (now < 17) {
      $("#entry5pm").addClass("upcoming");
    }
    if (now > 18) {
        $("#entry6pm").addClass("expired");
      } else if (now >= 18 && now < 19) {
        $("#entry6pm").addClass("current");
      } else if (now < 18) {
        $("#entry6pm").addClass("upcoming");
      }
  }
  
  
// Add Local Storage And Recall of Local Storage Information Into TextEntry Divs

  function eightAM() {
    var input_textarea = document.querySelector("#entry8am");
    var output_div = document.querySelector("#entry8am");
    var save_button = document.querySelector("#button8am");
  
    save_button.addEventListener("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
  }
  
  function nineAM() {
    var input_textarea1 = document.querySelector("#entry9am");
    var output_div1 = document.querySelector("#entry9am");
    var save_button1 = document.querySelector("#button9am");
  
    save_button1.addEventListener("click", updateOutput1);
  
    output_div1.textContent = localStorage.getItem("content");
    input_textarea1.value = localStorage.getItem("content");
  
    function updateOutput1() {
      localStorage.setItem("content1", input_textarea1.value);
  
      output_div1.textContent = input_textarea1.value;
    }
  }
  
  
  
  function tenAM() {
    var input_textarea2 = document.querySelector("#entry10am");
    var output_div2 = document.querySelector("#entry10am");
    var save_button2 = document.querySelector("#button10am");
  
    save_button2.addEventListener("click", updateOutput2);
  
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
  
    function updateOutput2() {
      localStorage.setItem("content2", input_textarea2.value);
  
      output_div2.textContent = input_textarea2.value;
    }
  }
  
  
  function elevenAM() {
    var input_textarea3 = document.querySelector("#entry11am");
    var output_div3 = document.querySelector("#entry11am");
    var save_button3 = document.querySelector("#button11am");
  
    save_button3.addEventListener("click", updateOutput3);
  
    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");
  
    function updateOutput3() {
      localStorage.setItem("content3", input_textarea3.value);
  
      output_div3.textContent = input_textarea3.value;
    }
  }
  
  
  function twelvePM() {
    var input_textarea4 = document.querySelector("#entry12pm");
    var output_div4 = document.querySelector("#entry12pm");
    var save_button4 = document.querySelector("#button12pm");
  
    save_button4.addEventListener("click", updateOutput4);
  
    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");
  
    function updateOutput4() {
      localStorage.setItem("content4", input_textarea4.value);
  
      output_div4.textContent = input_textarea4.value;
    }
  }
  
  
  function onePM() {
    var input_textarea5 = document.querySelector("#entry1pm");
    var output_div5 = document.querySelector("#entry1pm");
    var save_button5 = document.querySelector("#button1pm");
  
    save_button5.addEventListener("click", updateOutput5);
  
    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");
  
    function updateOutput5() {
      localStorage.setItem("content5", input_textarea5.value);
  
      output_div5.textContent = input_textarea5.value;
    }
  }
  
## Features
List of features
* moment.js displays current date and time.
* Expired, Current and Upcoming times are colour coded.
* Text areas are used to enter important daily work tasks.
* User can save their schedule into local storage and be recalled at any time.
* Text areas are made for easy editing and modifications and can be resaved.


To-do list:
* Project completed

## Status
Project is: completed. Assignment ready for submission.

## Contact
Created by Allen Lovatt - allenlovatt@gmail.com
