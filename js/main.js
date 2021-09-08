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
