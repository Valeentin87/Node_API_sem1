//const fs = require('fs');

var body = null;

if (typeof document !== 'undefined') {
    // will run in client's browser only
    body = document.getElementsByTagName("body")[0];
}

let lessons = {
    first: {
        id : 1,
        nameLesson : 'Легкая тренировка',
        timeLesson : '09.00-10.00',
        maxUnits : 10,
        currentUnits : 0
    },
    second: {
        id : 2,
        nameLesson : 'Легкая тренировка',
        timeLesson : '09.00-10.00',
        maxUnits : 10,
        currentUnits : 0
    }
}

let lessonsJson = JSON.stringify(lessons) 
console.log(lessonsJson);





// запись в  JSON  файл данных об объектах
// fs.writeFile('lessonData.json', lessonsJson, (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// });


// получение данных об объектах из JSON файла
// const jsonData = require('./lessonData.json');
// console.log(jsonData);

const jsonData = {
    first: {
      id: 1,
      nameLesson: 'Легкая тренировка',
      timeLesson: '09.00-10.00',
      maxUnits: 10,
      currentUnits: 0
    },
    second: {
      id: 2,
      nameLesson: 'Легкая тренировка',
      timeLesson: '09.00-10.00',
      maxUnits: 10,
      currentUnits: 0
    }
  }

const getlessonInfo = function(){
    Object.values(jsonData).forEach(element => {
        
        console.log(element);
    });
}




let containerContentAll;
let containerContentLesson;

Object.values(jsonData).forEach(element => {
    containerContentLesson = `
    <div class = 'container_item>
        <h2>${element.nameLesson}</h2>
        <p>Время проведения: ${element.timeLesson}</p>
        <p>Максимальное количество участников: ${element.maxUnits}</p>
        <p>Уже записано на занятие: ${element.currentUnits}</p>
        <btn id = add_${element.id}> Записаться </btn>
        <btn id = cansel_${element.id}> Отменить запись </btn>
    </div>
    `
    containerContentAll += (containerContentLesson);
});

console.log(containerContentAll);


let content = document.getElementsByClassName('container')
content.innerHTML = containerContentAll
console.log(content);


