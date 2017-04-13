import axios from 'axios';

let nextId = 0;
export function onAddAim (aim) {
  axios.post(
      'http://localhost:3011/', // url
      { "name": aim,"user_id": "admin-naxui"}, // data
      {
          headers: {
              "Content-Type":  "application/json",
              "Accept":        "application/json"
          }
      }
  )
  .then(function (response) {
      console.log(response); // Здесь обработать ответ как надо
  })
  .catch(function (error) {
     console.log(error);
  });
  var date = new Date();
  return {
      type: 'CREATE_AIM',
      aimID: `new_${nextId++}`,
      text: aim,
      date: {date: date.toDateString().slice(4,10), time: date.toTimeString().slice(0,5)}
  }
}

export function active (id) {

  return {
      type: 'ACTIVE_AIM',
      aimID: id
  }
}

export function openModal() {
  return {
      type: 'OPEN_AIM_CREATE'
  }
}

export function returnStatus() {
  return {
      type: 'RETURN_STATUS'
  }
}

export function showPriming(event) {
  var prim = ['Изобрести и запатентовать новую идею','Поддерживать отличное здоровье','Участвовать в марафоне','Написать песню','Создать собственный бизнес','Покормить акул'];
  var searchQuery = event.target.value.toLowerCase();
  var data = prim.filter(el => el.toLowerCase().indexOf(searchQuery) !== -1);
  return {
    type:'CHANGE_WORD',
    data
  }
}

export function choiseWord(word) {
  return {
    type:'CHOISE_WORD',
    word
  }
}
