


$('.mob__logo').click(function () {
    $('.side__navbar').animate({
        width: '300px',
        opacity: 1
    });
});

$('.side__nav__close').click(function () {
    $('.side__navbar').animate({
        width: '0',
        opacity: 0
    });
});


// order page


const popupMsgCloser = document.querySelector('.popup__msg__closer');
const popupMsg = document.querySelector('.popup__msg');

const showStatus = document.querySelectorAll('.show__status');


showStatus.forEach(function (el) {
    el.addEventListener('click', () => {
        popupMsg.classList.add('d-flex');
        popupMsg.classList.remove('d-none');
    })
})

popupMsgCloser.addEventListener('click', () => {
    popupMsg.classList.remove('d-flex');
    popupMsg.classList.add('d-none');
})



// order single page
const orderUpdate = document.querySelectorAll('.report__update');
const popupMsgReport = document.querySelector('.popup__msg__report');
const popupMsgCloserReport = document.querySelector('.popup__msg__closer__report');


orderUpdate.addEventListener('click', () => {
    popupMsgReport.classList.add('d-flex');
    popupMsgReport.classList.remove('d-none');
})

popupMsgCloserReport.addEventListener('click', () => {
    popupMsgReport.classList.remove('d-flex');
    popupMsgReport.classList.add('d-none');
})


///// 

const filterInput = document.querySelector('.filter__input__search');
const searchDropmenu = document.querySelector('.search__dropmenu');

filterInput.addEventListener('focus', () => {
    searchDropmenu.classList.remove('d-none');
    searchDropmenu.classList.add('d-flex');
})
filterInput.addEventListener('blur', () => {
    searchDropmenu.classList.add('d-none');
    searchDropmenu.classList.remove('d-flex');
})




const filterInputFilter = document.querySelector('.filter__input__filter');
const filterDropmenu = document.querySelector('.filter__dropmenu');

filterInputFilter.addEventListener('focus', () => {
    filterDropmenu.classList.remove('d-none');
    filterDropmenu.classList.add('d-flex');
})
filterInputFilter.addEventListener('blur', () => {
    filterDropmenu.classList.add('d-none');
    filterDropmenu.classList.remove('d-flex');
})






//
$(function () {
    $('.calendar').pignoseCalendar({
        toggle: true
    });
});