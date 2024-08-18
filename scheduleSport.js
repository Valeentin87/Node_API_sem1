let h1 = document.getElementsByClassName("main_head")
console.log(h1[0].textContent)
console.log("hi");
let jsonData ={"1":{"id":1,"nameLesson":"Легкая тренировка","timeLesson":"09.00-10.00","maxUnits":10,"currentUnits":0},"2":{"id":2,"nameLesson":"Тяжелая тренировка","timeLesson":"10.00-10.50","maxUnits":10,"currentUnits":0}};
console.log(jsonData);
let containerContentAll = [];
let containerContentLesson;
let divCount = 1;

Object.values(jsonData).forEach(element => {
    containerContentLesson = `
    <div class = 'container_item'>
        <h2>${element.nameLesson}</h2>
        <p>Время проведения: ${element.timeLesson}</p>
        <p>Максимальное количество участников: ${element.maxUnits}</p>
        <p class="change_number-${divCount}">Уже записано на занятие: ${element.currentUnits}</p>
        <button class = "add_${element.id}"> Записаться </button>
        <button class = "cansel_${element.id}"> Отменить запись </button>
    </div>
    `
    containerContentAll.push(containerContentLesson);
    divCount +=1;
});

console.log(containerContentAll);

const mainHead = document.getElementsByTagName('h1')
containerContentAll.forEach(element => {
    console.log(element);
    mainHead[0].insertAdjacentHTML('afterend', element)
});

const getDetailsObj = function() {
    //alert(this.className);
    let disable_btn;
    let classNameParse = this.className.split('_');
    let changePar = document.querySelector(`.change_number-${classNameParse[1]}`);
    if (classNameParse[0] === 'add' &&          jsonData[`${classNameParse[1]}`]['currentUnits'] === 0) {
        jsonData[`${classNameParse[1]}`]['currentUnits'] += 1;
        disable_btn = document.querySelector(`.cansel_${classNameParse[1]}`)
            console.log(disable_btn.getHTML());
            disable_btn.disabled = false;
            changePar.textContent = `уже записано на занятие: ${jsonData[`${classNameParse[1]}`]['currentUnits']}`;
    }
    else if (classNameParse[0] === 'add'){
        jsonData[`${classNameParse[1]}`]['currentUnits'] += 1;
     if (jsonData[`${classNameParse[1]}`]['currentUnits'] === 10){
            this.disabled = "disabled";
        }
        console.log(`количество обучаемых на занятие № ${classNameParse[1]} увеличилось и стало равным ${jsonData[`${classNameParse[1]}`]['currentUnits']}`);
 
        console.log(changePar);
        changePar.textContent = `уже записано на занятие: ${jsonData[`${classNameParse[1]}`]['currentUnits']}`;
    }

    else if (classNameParse[0] === 'cansel' && jsonData[`${classNameParse[1]}`]['currentUnits'] === 0) {
        this.disabled = "disabled";
        }
    else if (classNameParse[0] === 'cansel' && jsonData[`${classNameParse[1]}`]['currentUnits'] > 0)
        {
        jsonData[`${classNameParse[1]}`]['currentUnits'] -= 1;
        if (jsonData[`${classNameParse[1]}`]['currentUnits'] === 9){
            console.log("выполнено условия для активации кнопки снова ")
            disable_btn = document.querySelector(`.add_${classNameParse[1]}`)
            console.log(disable_btn.getHTML());
            disable_btn.disabled = false;
        }
        console.log(`количество обучаемых на занятие № ${classNameParse[1]} уменьшилось и стало равным ${jsonData[`${classNameParse[1]}`]['currentUnits']}`);
            let changePar = document.querySelector(`.change_number-${classNameParse[1]}`);
            console.log(changePar);
        changePar.textContent = `уже записано на занятие: ${jsonData[`${classNameParse[1]}`]['currentUnits']}`;
    }
    console.log(jsonData);

    // let jsonDataJSON = JSON.stringify(jsonData);
    // const fs = require('fs');
    // fs.writeFileSync('./lessonData.json', jsonDataJSON)

}

const allButtons = document.getElementsByTagName('button')

Object.values(allButtons).forEach(element => {
    element.addEventListener('click', getDetailsObj);
    //console.log(element.textContent);
    //element.onclick = getDetailsObj;
});