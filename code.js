var lilMark = document.getElementById('littleMarco');
lilMark.onclick = function() {
  alert('That\'s right!');
};

var notMark = document.getElementById('notMarco');
notMark.onclick = function() {
  alert('No, that\'s not it...');
};

var notMarkEither = document.getElementById('notMarcoEither');
notMarkEither.onclick = function() {
  alert('No, that\'s not it...');
};

function eraseName() {
  document.getElementById('littleMarco').innerHTML = "";
}

function alertNo() {
  alert('No, that\'s not correct.');
}

function alertYes() {
  alert('Yes, that\'s correct.');
}
