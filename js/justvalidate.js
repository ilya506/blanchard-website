document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.js-contacts-form',{
    errorLabelStyle: {
      color: '#D11616',
    },
  });
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.contacts__form-input-name', [{
        rule: 'required',
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Введите имя"
      },
      {
        rule: 'maxLength',
        value: 25,
        errorMessage: "Недопустимый формат"
      }
    ])

    .addField('.contacts__form-input-tel', [{
        rule: 'required',
        errorMessage: 'Вы не ввели телефон'
      },
      {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Недопустимый формат',
    }]);
});




