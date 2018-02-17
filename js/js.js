window.addEventListener('load', function (){

    var prodButton = document.querySelector('.head__chevron-down');
    var products = document.querySelector('.products');
    var scrolled = 0;


    prodButton.addEventListener('click', function goToProducts(){
       var target = products.getBoundingClientRect().top;
       var scroll = window.pageYOffset;
       scrolled = scroll + 10;
           window.scrollTo(0, scrolled);
           var timer = setTimeout(goToProducts, 5);
           if(scrolled >= (scroll+target)){
               clearTimeout(timer);
           }
    });



});