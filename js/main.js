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
  var instantEntry = entryTemplate(data.entries[0]);
  $ul.prepend(instantEntry);
  $form.reset();
  switchView('entries');
}

var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);

var $ul = document.querySelector('ul');

function entryTemplate(entry) {
  // <li>
  //   <div class="row">
  //     <div class="column-half">
  //       <img
  //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
  //         alt="user-image" class="width-100">
  //     </div>
  //     <div class="column-half">
  //       <div class="row">
  //         <div class="column-full justify-between">
  //           <h2>Coffee</h2>
  //           <i class="fas fa-pencil-alt"></i>
  //         </div>
  //         <div class="column-full">
  //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta voluptates reprehenderit
  //             alias
  //             nobis atque aperiam! Nobis cumque amet molestiae dicta voluptates reprehenderit alias
  //             nobis atque aperiam!</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </li>

  var $entryContainer = document.createElement('li');
  var $row = document.createElement('div');
  var $columnImage = document.createElement('div');
  var $userImage = document.createElement('img');
  var $columnContent = document.createElement('div');
  var $columnHead = document.createElement('div');
  var $columnNote = document.createElement('div');
  var $heading = document.createElement('h2');
  var $icon = document.createElement('i');
  var $subRow = document.createElement('row');
  var $note = document.createElement('p');

  $entryContainer.appendChild($row);
  $row.appendChild($columnImage);
  $columnImage.appendChild($userImage);
  $row.appendChild($columnContent);
  $columnContent.appendChild($subRow);
  $subRow.appendChild($columnHead);
  $columnHead.appendChild($heading);
  $columnHead.appendChild($icon);
  $subRow.appendChild($columnNote);
  $columnNote.appendChild($note);

  $row.setAttribute('class', 'row');
  $columnImage.setAttribute('class', 'column-half');
  $userImage.setAttribute('src', entry.photoUrl);
  $userImage.setAttribute('class', 'width-100');
  $userImage.setAttribute('alt', 'user-image');
  $columnContent.setAttribute('class', 'column-half');
  $columnHead.setAttribute('class', 'column-full justify-between');
  $heading.textContent = entry.title;
  $icon.setAttribute('class', 'fas fa-pencil-alt');
  $columnNote.setAttribute('class', 'column-full');
  $note.textContent = entry.note;

  return $entryContainer;
}

function handleDOMContentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entriesList = entryTemplate(data.entries[i]);
    $ul.appendChild(entriesList);
  }
  switchView(data.view);

  var $li = document.querySelectorAll('li');
  for (var i = 0; i < $li.length; i++) {
    $li[i].setAttribute('data-entry-id', data.entries[i].entryId)
  }
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

var $entriesPage = document.querySelector('.entries-page');
var $entries = document.querySelector('.entries-link');
var $newBtn = document.querySelector('.new-btn');
var $view = document.querySelectorAll('.view');
var $formPage = document.querySelector('.form-page');

function switchView(string) {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].dataset.view === string) {
      $view[i].classList.remove('hidden');
      data.view = $view[i].dataset.view;
    } else {
      $view[i].classList.add('hidden');
    }
  }
}

$entries.addEventListener('click', function (event) {
  switchView($entriesPage.getAttribute('data-view'));
  data.view = 'entries';
});

$newBtn.addEventListener('click', function (event) {
  switchView($formPage.getAttribute('data-view'));
  data.view = 'entry-form';
});
