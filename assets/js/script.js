window.onload = function(){
    colorCode();
    eightAM();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
    sixPM();
   }
  
  // WHEN I open the planner
  // THEN the current day and time is displayed at the top of the calendar
  
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);
  
  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime);
  
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green)
  
  var now = new Date().getHours();
  
  function colorCode() {

   if (now > 8) {
      $("#entry8am").addClass("expired");
    } else if (now >= 8 && now < 9) {
      $("#entry8am").addClass("current");
    } else if (now < 8) {
      $("#entry8am").addClass("upcoming");
    }
    if (now > 9) {
      $("#entry9am").addClass("expired");
    } else if (now >= 9 && now < 10) {
      $("#entry9am").addClass("current");
    } else if (now < 9) {
      $("#entry9am").addClass("upcoming");
    }
    if (now > 10) {
      $("#entry10am").addClass("expired");
    } else if (now >= 10 && now < 11) {
      $("#entry10am").addClass("current");
    } else if (now < 10) {
      $("#entry10am").addClass("upcoming");
    }
    if (now > 11) {
      $("#entry11am").addClass("expired");
    } else if (now >= 11 && now < 12) {
      $("#entry11am").addClass("current");
    } else if (now < 11) {
      $("#entry11am").addClass("upcoming");
    }
    if (now > 12) {
      $("#entry12pm").addClass("expired");
    } else if (now >= 12 && now < 13) {
      $("#entry12pm").addClass("current");
    } else if (now < 12) {
      $("#entry12pm").addClass("upcoming");
    }
    if (now > 13) {
      $("#entry1pm").addClass("expired");
    } else if (now >= 13 && now < 14) {
      $("#entry1pm").addClass("current");
    } else if (now < 13) {
      $("#entry1pm").addClass("upcoming");
    }
    if (now > 14) {
      $("#entry2pm").addClass("expired");
    } else if (now >= 14 && now < 15) {
      $("#entry2pm").addClass("current");
    } else if (now < 14) {
      $("#entry2pm").addClass("upcoming");
    }
    if (now > 15) {
      $("#entry3pm").addClass("expired");
    } else if (now >= 15 && now < 16) {
      $("#entry3pm").addClass("current");
    } else if (now < 15) {
      $("#entry3pm").addClass("upcoming");
    }
    if (now > 16) {
      $("#entry4pm").addClass("expired");
    } else if (now >= 16 && now < 17) {
      $("#entry4pm").addClass("current");
    } else if (now < 16) {
      $("#entry4pm").addClass("upcoming");
    }
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
  
  
  // WHEN I click into a timeblock
  // THEN I can enter an event
  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage
  // WHEN I refresh the page
  // THEN the saved events persist

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
  
  
  function twoPM() {
    var input_textarea6 = document.querySelector("#entry2pm");
    var output_div6 = document.querySelector("#entry2pm");
    var save_button6 = document.querySelector("#button2pm");
  
    save_button6.addEventListener("click", updateOutput6);
  
    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");
  
    function updateOutput6() {
      localStorage.setItem("content6", input_textarea6.value);
  
      output_div6.textContent = input_textarea6.value;
    }
  }
  
  
  function threePM() {
    var input_textarea7 = document.querySelector("#entry3pm");
    var output_div7 = document.querySelector("#entry3pm");
    var save_button7 = document.querySelector("#button3pm");
  
    save_button7.addEventListener("click", updateOutput7);
  
    output_div7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");
  
    function updateOutput7() {
      localStorage.setItem("content7", input_textarea7.value);
  
      output_div7.textContent = input_textarea7.value;
    }
  }
  
  
  function fourPM() {
    var input_textarea8 = document.querySelector("#entry4pm");
    var output_div8 = document.querySelector("#entry4pm");
    var save_button8 = document.querySelector("#button4pm");
  
    save_button8.addEventListener("click", updateOutput8);
  
    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");
  
    function updateOutput8() {
      localStorage.setItem("content8", input_textarea8.value);
  
      output_div8.textContent = input_textarea8.value;
    }
  }
  
  
  function fivePM() {
    var input_textarea9 = document.querySelector("#entry5pm");
    var output_div9 = document.querySelector("#entry5pm");
    var save_button9 = document.querySelector("#button5pm");
  
    save_button9.addEventListener("click", updateOutput9);
  
    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");
  
    function updateOutput9() {
      localStorage.setItem("content9", input_textarea9.value);
  
      output_div9.textContent = input_textarea9.value;
    }
  }

  function sixPM() {
    var input_textarea10 = document.querySelector("#entry6pm");
    var output_div10 = document.querySelector("#entry6pm");
    var save_button10 = document.querySelector("#button6pm");
  
    save_button10.addEventListener("click", updateOutput10);
  
    output_div10.textContent = localStorage.getItem("content10");
    input_textarea10.value = localStorage.getItem("content10");
  
    function updateOutput10() {
      localStorage.setItem("content9", input_textarea10.value);
  
      output_div10.textContent = input_textarea10.value;
    }
  }