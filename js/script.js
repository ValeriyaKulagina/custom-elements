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

let phoneElement = document.querySelector(".form__input-tel");
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(phoneElement);

let validation = new window.JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
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
    value: 15,
    errorMessage: 'Имя не может содержать более 15 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },
])
.addField('.form__input-mail', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'E-mail введен некорректно',
  },
])
.addField('.form__input-tel', [
  {
    validator: () => {
      let phone = phoneElement.inputmask.unmaskedvalue();
      let result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Вы не ввели телефон',
  }
]);
validation.onSuccess((event) => {
  validation.form.submit();
});

/* tooltip */

tippy('.tooltip__btn', {
  content: 'Глава 2, страница 176',
  maxWidth: 165,
  theme: 'gray',
});



