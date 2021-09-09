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
  entry.title = $form.elements.title.value;
  entry.photoUrl = $form.elements.photourl.value;
  entry.note = $form.elements.notes.value;
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);

function entryTemplate(entry) {
  var $entryContainer = document.createElement('li');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');

  var $columnImage = document.createElement('div');
  $columnImage.setAttribute('class', 'column-half');

  var $userImage = document.createElement('img');
  $userImage.setAttribute('src', entry.photoUrl);
  $userImage.setAttribute('class', 'width-100');
  $userImage.setAttribute('alt', 'user-image');

  var $columnContent = document.createElement('div');
  $columnContent.setAttribute('class', 'column-half');

  var $heading = document.createElement('h2');
  $heading.textContent = entry.title;
  var $note = document.createElement('p');
  $note.textContent = entry.note;

  $entryContainer.appendChild($row);
  $row.appendChild($columnImage);
  $columnImage.appendChild($userImage);
  $row.appendChild($columnContent);
  $columnContent.appendChild($heading);
  $columnContent.appendChild($note);

  return $entryContainer;
}

// DOM Tree
/*
<li>
  <div class="row">
    <div class="column-half">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
        alt="user-image" class="width-100">
    </div>
    <div class="column-half">
      <h2>Coffee</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta voluptates reprehenderit
        alias
        nobis atque aperiam! Nobis cumque amet molestiae dicta voluptates reprehenderit alias
        nobis atque aperiam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas odio ab harum
        reprehenderit
        praesentium, eaque eum placeat reiciendis repellat dicta voluptates reprehenderit alias
        nobis atque aperiam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas odio ab harum
        reprehenderit
        praesentium, eaque.</p>
    </div>
  </div>
</li>
*/

var $ul = document.querySelector('ul');

function handleDOMContentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entriesList = entryTemplate(data.entries[i]);
    $ul.appendChild(entriesList);
  }
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

// Hiding
var $new = document.querySelector('#new-btn');

function handleClick(event) {
  if (event.target.matches($new)) {

  }
}

// View switching switchView single parameter string name of entry you want to switch to
// cehck view
// if yes show it
// if no hide it
