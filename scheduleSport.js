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
        <button class = "add_${element.id}"> Записаться </button>
        <button class = "cansel_${element.id}"> Отменить запись </button>
    </div>
    `
    containerContentAll.push(containerContentLesson)
});

console.log(containerContentAll);

const mainHead = document.getElementsByTagName('h1')
containerContentAll.forEach(element => {
    console.log(element);
    mainHead[0].insertAdjacentHTML('afterend', element)
});

const getDetailsObj = function() {
    alert(this.className);
    let classNameParse = this.className.split('_');
    if (classNameParse[0] === 'add') {
        jsonData[`${classNameParse[1]}`]['currentUnits'] += 1;
        console.log(`количество обучаемых на занятие № ${classNameParse[1]} увеличилось и стало равным ${jsonData[`${classNameParse[1]}`]['currentUnits']}`);
    }
    else if (classNameParse[0] === 'cansel') {
        jsonData[`${classNameParse[1]}`]['currentUnits'] -= 1;
        console.log(`количество обучаемых на занятие № ${classNameParse[1]} уменьшилось и стало равным ${jsonData[`${classNameParse[1]}`]['currentUnits']}`);
    }

}

const allButtons = document.getElementsByTagName('button')

Object.values(allButtons).forEach(element => {
    console.log(element.textContent);
    element.onclick = getDetailsObj;
});

 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  })
  
  .catch(error => console.error('Ошибка при исполнении запроса: ', error));
  

}

getObject()



    
    








