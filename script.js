$(document).ready(function(){
  let btn = $('.form-btn');

  
    let userName = $('#input-name').val(),
      userEmail = $('#input-email').val(),
      userPassword = $('#input-password').val(),
      form = $('#form');
     
    form.validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email:{
          required: true,
          minlength: 3,
          email: true
        },
        password:{
          required: true,
          minlength: 8
        }
      },
     
      messages:{
        name:{
          required:'Это поле обязательно для заполнения',
          minlength:'Не менее 2-х символов'
          
        },
        email:{
          required:'Это поле обязательно для заполнения',
          minlength:'Не менее 3-х символов',
          email: 'Укажите правильный E-mail'
        },
       password:{
          required:'Это поле обязательно для заполнения',
          minlength:'Не менее 8-х символов'
          
        }
      }
    });
  
});