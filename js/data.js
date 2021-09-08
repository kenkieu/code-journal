/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function handleBeforeUnload(){
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('entryList', dataJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload)
