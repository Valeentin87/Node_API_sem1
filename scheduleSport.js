//const fs = require('fs');

// запись в  JSON  файл данных об объектах
// fs.writeFile('lessonData.json', lessonsJson, (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// });


//получение данных об объектах из JSON файла



// import * as req from 'require';
// const jsonData = req('./lessonData.json');
// console.log(jsonData);



const getObject = function () {
    
    fetch('./lessonData.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
  .then(jsonData => {console.log(jsonData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////                    
let containerContentAll = [];
let containerContentLesson;



Object.values(jsonData).forEach(element => {
    containerContentLesson = `
    <div class = 'container_item'>
        <h2>${element.nameLesson}</h2>
        <p>Время проведения: ${element.timeLesson}</p>
        <p>Максимальное количество участников: ${element.maxUnits}</p>
        <p>Уже записано на занятие: ${element.currentUnits}</p>
        <button id = add_${element.id}> Записаться </button>
        <button id = cansel_${element.id}> Отменить запись </button>
    </div>
    `
    containerContentAll.push(containerContentLesson)
});

console.log(containerContentAll);

let count = 0;
let div = null;

const mainHead = document.getElementsByTagName('h1')
console.log(mainHead[0].textContent);
containerContentAll.forEach(element => {
    console.log(element);
    mainHead[0].insertAdjacentHTML('afterend', element)
});
 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  })
  
  .catch(error => console.error('Ошибка при исполнении запроса: ', error));
  

}

getObject()


    
    








