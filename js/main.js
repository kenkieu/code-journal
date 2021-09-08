/* global data */
/* exported data */

function handlePhoto(event) {
  var userUrl = event.target.value;
  $img.setAttribute('src', userUrl);
}

var $photoUrl = document.querySelector('#photo-url');
var $img = document.querySelector('img');
$photoUrl.addEventListener('input', handlePhoto);

function handleSubmit(event) {
  event.preventDefault();
  var entry = {};
  entry.title = $form.elements[0].value;
  entry.photoUrl = $form.elements[1].value;
  entry.note = $form.elements[2].value;
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.elements[0].value = '';
  $form.elements[1].value = '';
  $form.elements[2].value = '';
}

var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
