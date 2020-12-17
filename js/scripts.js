const compareList = [];
const favouritesList = [];

const scripts = () => {
    const selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item=> {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=> {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            selectCurrent = select.querySelector('.select-current');
        selectCurrent.innerText = text;
        selectCurrent.classList.add('dirty');
        select.classList.remove('is-active');
    }
};

scripts();

const reset = () => {
    const selects = document.querySelectorAll('.select');

    selects.forEach(select => {
        if (!select.classList.contains('category-select'))
            select.querySelector('.select-current').innerText = '';
    });

    const inputs = document.querySelectorAll('.filter-price-input');

    inputs.forEach(input => {
        input.value = ''
    })

};

const onCompareButtonClick = id => {
    const buttonText = document.querySelector(`#${id} span`);
    const compareItemsCountText = document.getElementById('comparison');

    if (compareList.includes(id)) {
        compareList.splice(id, 1);
        buttonText.innerText = 'Сравнить товар';
    } else {
        compareList.push(id);
        buttonText.innerText = 'В сравнении';
    }
    if (compareList.length) compareItemsCountText.innerText = compareList.length.toString();
    else compareItemsCountText.innerText = ''
};

const onFavouritesButtonClick = id => {
    const buttonText = document.querySelector(`#${id} span`);
    const favoritesItemsCountText = document.getElementById('favourites');

    if (favouritesList.includes(id)) {
        favouritesList.splice(id, 1);
        buttonText.innerText = 'В избраное';
    } else {
        favouritesList.push(id);
        buttonText.innerText = 'В избраном';
    }
    if (favouritesList.length) favoritesItemsCountText.innerText = favouritesList.length.toString();
    else favoritesItemsCountText.innerText = ''
};


document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-active');
});

const callbackForm = document.querySelector('.callback-btn');
const callbackModal = document.querySelector('#callback-modal');
const registrationBtn = document.querySelector('.btn-enter');
const registrationModal = document.querySelector('#registration-modal');
const loadingFormBtn = document.querySelector('#loading-form-btn');
const callbackFormBtn = document.querySelector('.callback-modal-btn');
const userEmail = document.querySelector('#loading-form-input-email');
const userPhone = document.querySelector('#callback-form-input-phone');
const userPassword = document.querySelector('#loading-form-input-password');

callbackForm.addEventListener('click', function () {

    callbackModal.classList.add('modal-active');
    closeOnClickOutSide(callbackModal);
    document.querySelector(`#${callbackModal.id} .modal-close-btn`).addEventListener('click', function () {

        callbackModal.classList.remove('modal-active');
    });

});

callbackFormBtn.addEventListener('click', function () {
    event.preventDefault();
    let hasError = false;

    if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
        userPhone.classList.add('form-input-error');
        hasError = true;
    } else {
        userPhone.classList.remove('form-input-error');
        callbackModal.classList.remove('modal-active');
    }
    if (hasError) {
        return;
    }
});

registrationBtn.addEventListener('click', function () {

    registrationModal.classList.add('modal-active');
    closeOnClickOutSide(registrationModal);
    document.querySelector(`#${registrationModal.id} .modal-close-btn`).addEventListener('click', function () {

        registrationModal.classList.remove('modal-active');
    });
});

loadingFormBtn.addEventListener('click', function () {
    event.preventDefault();
    let hasError = false;

    if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
        userEmail.classList.add('form-input-error');
        hasError = true;
    } else {
        userEmail.classList.remove('form-input-error');
        registrationModal.classList.remove('modal-active');
    }

    if (!userPassword.value.trim() || ('')) {
        userPassword.classList.add('form-input-error');
        hasError = true;
    } else {
        userPassword.classList.remove('form-input-error');
        registrationModal.classList.remove('modal-active');
    }

    if (hasError) {
        return;
    }
});

const closeOnClickOutSide = modal => {
    document.body.addEventListener('click', function (event)
    {
        if (event.target.className === 'modal-container') {
            modal.classList.remove('modal-active');
        }
    });
};

function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

    return phone.match(regexp);
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}


