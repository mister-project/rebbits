'use strict'
const container = document.querySelector('.container') // получаем общий контейнер (все кнопки)
const blocks = container.querySelectorAll('.block') // получаем секции, где содержаться номера и стрелки

container.addEventListener('click', (e) => { //  слушаем клики по всем кнопкам, включая reset

    let blockBtn = e.target.closest('.block-btn') //получение подблока со стрелкам, при нажатии на стрелки
    if (blockBtn !== null) {
        const index = Array.from(blocks).indexOf(e.target.closest('.block'))// преобразуем коллекцию блоков (стрелки+textContent) в массив и получаем индекс АКТИВИРОВАННОГО блока В МАССИВЕ
        const block = e.target.closest('.block'); //получаем активный блок(с нажатой стрелкой) со всеми потрохами :)
        const arrow = e.target.closest('.arrow'); // получаем класс активированной стрелки
        const direction = arrow.classList.value.slice(6); // получаем направление активированной стрелки
        let newIndex; // под индекс заменяемой (ведомой) ячейки

        switch (direction) { //исходя из полученного направления, меняем индексы у активной и заменяемой (ведомой) ячеек
            case 'top':
                newIndex = index - 5;
                break;
            case 'bottom':
                newIndex = index + 5;
                break;
            case 'right':
                newIndex = index + 1;
                break;
            case 'left':
                newIndex = index - 1;
                break;

        }

        if (newIndex < 0 || newIndex >= blocks.length) return; //условие на ограничение отработки только имеющихся клеток

        const temp = block.innerHTML; //вспомогательная переменная
        block.innerHTML = blocks[newIndex].innerHTML;
        blocks[newIndex].innerHTML = temp;

    } else if (e.target.classList.contains('btn-reset')) { //ловим нажатие на кнопку 'Reset'  и возвращаем все клетки на свои места

        container.querySelectorAll('.block-number').forEach(function (cell, index) {
            cell.textContent = index + 1;
        });
        alert('ячейки в изначальном положении')
    } else {
        alert('вернитесь в синюю область')
    }

})