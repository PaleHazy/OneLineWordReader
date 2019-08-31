let splitWords;
let counter = 0;
let interval;
let intervalSpeed = 250;
let flip = false;
// ------------------------------------------------------------------------- //
/*<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
//µ¥µ// ∂√function getInput()√ will be equivalent to the text data inputted into the textarea element//
function getInput() {
  //referencing value of the input text box
  let textData = $('#textInput').val();
  return textData;
}
//µ¥µ//this function will split the contents of get input and save it to the global variable ∂√splitWords√
function splitter() {
  splitWords = getInput().split(/\s|\n|\t|\r|\[\w\]|^\s*$/);
}
//µ¥µ// ∂√function appender()√
function appender(x) {
  if (x !== '') {
    $('#outputText').text(x);
  } else {
  }
}
//µ¥µ// ∂√function current()√
function current() {
  let currentWord = splitWords[counter];
  return currentWord;
}
//µ¥µ// ∂√function mix()√
function mix() {
  if (counter < splitWords.length) {
    console.log(interval);

    highlightWord();
    appender(current());
    counter++;
  } else {
    clearInterval(interval);
    interval = undefined;
  }
}
//µ¥µ// ∂√function highlightWord()√
function highlightWord() {
  let elemSelector = $(`.wordByWord:nth-child(${counter + 1})`);

  if (counter === 0) {
    elemSelector.addClass('selected');
  } else {
    $(`.wordByWord:nth-child(${counter})`).removeClass('selected');
    ('selected');
    elemSelector.addClass('selected');
  }
}
//µ¥µ// ∂√function runApp()√
function runAPP() {
  flip = true;
  if (interval) {
    console.log('still runnin');
  } else {
    interval = setInterval(mix, intervalSpeed);
  }
}
//µ¥µ// ∂√function followAppender()√
function followAppender() {
  let follow = $('#followAlongContainer');
  follow.empty();
  for (let i = 0; i < splitWords.length; i++) {
    follow.append(`<div class="wordByWord">${splitWords[i]}</div>`);
  }
}

// ------------------------------------------------------------------------- //
/*<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
//†_†// eventListener: any input writtent to <input#msSpeed>
$('#msSpeed').on('input', () => {
  intervalSpeed = $('#msSpeed').val();
  console.log('intervalSpeed:', intervalSpeed);
});
//†_†// eventListener: click on the button named paste. // this doesnt seem to work while being hosted

document.getElementById('paste').addEventListener('click', () => {
  counter = 0;
  let el = document.getElementById('textInput');
  navigator.clipboard.readText().then(text => {
    el.innerText = text;
    splitter();
    appender(splitWords.length + ' WORDS');
    followAppender();
  });
});

$('#restart').on('click', () => {
  counter = 0;
  appender(splitWords[0]);
  let elemSelector = $('.wordByWord');
  elemSelector.removeClass('selected');
});

$('textarea').on('input', () => {
  splitter();
  appender(splitWords.length + ' WORDS');
  followAppender();
});

$('#runButton').on('click', runAPP);

$('#stopButton').on('click', () => {
  flip = false;
  clearInterval(interval);
  interval = undefined;
});

$('#back').on('click', () => {
  counter = counter - 15;
  appender(splitWords[counter]);
});

$('#skip').on('click', () => {
  counter = counter + 15;
  appender(splitWords[counter]);
});
$('body').keydown(function(e) {
  if (flip == false) {
    flip = true;
    if (e.which == 32) {
      event.preventDefault();
      console.log('oii');
      runAPP();
    }
  } else if (flip == true) {
    flip = false;
    if (e.which == 32) {
      event.preventDefault();
      clearInterval(interval);
      interval = undefined;
    }
  }
});

$('.wordByWord').on('click', () => {
  console.log('this.html():', this.html());
  // this.html()
});
// ------------------------------------------------------------------------- //

// ------------------------------------------------------------------------- //

// ------------------------------------------------------------------------- //
