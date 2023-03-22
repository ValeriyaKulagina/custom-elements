/* select */

(() => {
  const select = document.querySelector('.select__custom--js');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
  });
})();

/* map */

ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [48.872185073737896,2.354223999999991],
      zoom: 14,
      controls: []
    },
    {
      suppressMapOpenBlock: true,
    }
    );

    var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'location_on_map.svg',
      iconImageSize: [48, 48],
      iconImageOffset: [-47, 19]
    });

    myMap.geoObjects.add(myPlacemark);
  }

/* contacts */

const phoneElement = document.querySelector(".form__input-tel");

const im = new Inputmask("+7(999) 999-99-99");
im.mask(phoneElement);

const validation = new window.JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF5C00',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#FF5C00',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
.addField('.form__input-name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно содержать хотя бы 3 буквы'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя не может содержать более 30 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?'
  }
])
.addField('.form__input-mail', [
  {
    rule: 'required',
    errorMessage: 'Поле обязательное для заполнения',
  },
  {
    rule: 'email',
    errorMessage: 'Укажите ваш e-mail',
  },
])
.addField('.form__input-tel', [
  {
    validator: () => {
      const phone = phoneElement.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Укажите ваш телефон',
  }
]);



