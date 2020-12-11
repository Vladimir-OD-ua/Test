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


