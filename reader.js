let splitWords;
let counter = 0;
let interval;
let intervalSpeed = 500;
// ------------------------------------------------------------------------- //

$('#msSpeed').on('input', () => {
  intervalSpeed = $('#msSpeed').val();
  console.log('intervalSpeed:', intervalSpeed);
});

// ------------------------------------------------------------------------- //
$('#restart').on('click', () => {
  counter = 0;
  appender(splitWords[0]);
});
// ------------------------------------------------------------------------- //

$('textarea').on('input', () => {
  splitter();
  console.log(splitWords);
});

function getInput() {
  let textData = $('#textInput').val();
  return textData;
}
function splitter() {
  splitWords = getInput().split(/\s|\n|\t|\r|\[\w\]/);
}

// ------------------------------------------------------------------------- //

$('#runButton').on('click', runAPP);

function appender(x) {
  $('#outputText').text(x);
  console.log('running bihh im appender');
}

function current() {
  let currentWord = splitWords[counter];
  return currentWord;
}
function mix() {
  if (counter < splitWords.length) {
    appender(current());
    counter++;
  } else {
    clearInterval(interval);
  }
}

function runAPP() {
  interval = setInterval(mix, intervalSpeed);
}
// ------------------------------------------------------------------------- //

$('#stopButton').on('click', () => {
  clearInterval(interval);
});
// ------------------------------------------------------------------------- //
$('#back').on('click', () => {
  counter = counter - 15;
  appender(splitWords[counter]);
});
// ------------------------------------------------------------------------- //
$('#skip').on('click', () => {
  counter = counter + 15;
  appender(splitWords[counter]);
});
