/* global data */
/* exported data */

function handlePhoto(event) {
  var userUrl = event.target.value;
  $img.setAttribute('src', userUrl);
}

var $photoUrl = document.querySelector('#photo-url');
// var $title = document.querySelector('#title');
// var $notes = document.querySelector('#notes');
var $img = document.querySelector('img');
$photoUrl.addEventListener('input', handlePhoto);

var $form = document.querySelector('form');
// console.dir($form);

function handleSubmit(event) {
  event.preventDefault();
  var entry = {};
  entry.title = $form.elements[0].value;
  entry.photoUrl = $form.elements[1].value;
  entry.note = $form.elements[2].value;
  entry.entryId = data.nextEntryId;
  // console.log(entry);
  data.nextEntryId++;
  data.entries.unshift(entry);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.elements[0].value = '';
  $form.elements[1].value = '';
  $form.elements[2].value = '';
}

$form.addEventListener('submit', handleSubmit);
// console.dir($form.elements);
// console.log();
