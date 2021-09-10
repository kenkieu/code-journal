/* global data */
/* exported data */

var $photoUrl = document.querySelector('#photo-url');
var $img = document.querySelector('img');
var $ul = document.querySelector('ul');
var $li = document.getElementsByTagName('li');
var $form = document.querySelector('form');
var $entryTypeHeading = document.querySelector('.entry-type');

function handlePhoto(event) {
  var userUrl = event.target.value;
  $img.setAttribute('src', userUrl);
}

$photoUrl.addEventListener('input', handlePhoto);

function handleSubmit(event) {
  event.preventDefault();
  var entry = {};
  if (data.editing === null) {
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
  } else {
    data.editing.title = $form.elements.title.value;
    data.editing.photoUrl = $form.elements.photourl.value;
    data.editing.note = $form.elements.notes.value;
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    for (var i = 0; i < $li.length; i++) {
      var entryNumber = Number($li[i].getAttribute('data-entry-id'));
      if (entryNumber === data.editing.entryId) {
        $li[i].replaceWith(entryTemplate(data.editing));
      }
    }
    $form.reset();
    data.editing = null;
    switchView('entries');
  }
}
$form.addEventListener('submit', handleSubmit);

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
  $icon.setAttribute('data-entry-id', entry.entryId);
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
  for (var x = 0; x < $li.length; x++) {
    $li[x].setAttribute('data-entry-id', data.entries[x].entryId);
  }
}

window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

function handleEditButton(event) {
  if (event.target.matches('i')) {
    switchView('entry-form');
    for (var i = 0; i < data.entries.length; i++) {
      var entryNumber = data.entries[i].entryId;
      var pencilNumber = parseInt(event.target.getAttribute('data-entry-id'));
      if (entryNumber === pencilNumber) {
        data.editing = data.entries[i];
      }
    }
    $entryTypeHeading.textContent = 'Edit Entry';
    $form.elements.title.value = data.editing.title;
    $form.elements.photourl.value = data.editing.photoUrl;
    $form.elements.notes.value = data.editing.note;
    $img.setAttribute('src', $form.elements.photourl.value);
  }
}

$ul.addEventListener('click', handleEditButton);

// var $entriesPage = document.querySelector('.entries-page');
var $entries = document.querySelector('.entries-link');
var $newBtn = document.querySelector('.new-btn');
var $view = document.querySelectorAll('.view');
// var $formPage = document.querySelector('.form-page');

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

$entries.addEventListener('click', handleSwap);

$newBtn.addEventListener('click', handleSwap);

function handleSwap(event) {
  var entryAttr = event.target.getAttribute('data-view');
  data.view = entryAttr;
  switchView(entryAttr);
  if (entryAttr === 'entry-form') {
    $entryTypeHeading.textContent = 'New Entry';
  }
}
