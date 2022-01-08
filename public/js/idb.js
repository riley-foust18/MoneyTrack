let db;
const request = indexedDB.open('money_track', 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore('new_input', {autoIncrement: true});
}

request.onsuccess = function(event) {
  db = event.target.result;

  if (navigator.onLine) {
    uploadTransaction();
  };
};

request.onerror = function(event) {
  console.log(event.target.errorCode);
}

function saveRecord(record) {
  const transaction = db.transaction(['new_input'], 'readwrite');

  const moneyObjectStore = transaction.objectStore('new_input');

  moneyObjectStore.add(record);
}

function uploadTransaction() {
  const transaction = db.transaction(['new_input'], 'readwrite');

  const moneyObjectStore = transaction.objectStore('new_input');

  const getAll = moneyObjectStore.getAll();
}