var a = 0;
// const foo = function () {
//     const self = this;
//     console.log(this.a)
//     console.log(this)
    
// }

let foo = function (x, y) {
    console.log(x + this.a + y)
}

const Obj3 = {
    a: 3
    
};

foo = foo.bind(Obj3) //bind жоска привязывает параметры указанного объекта к функции 

const Obj1 = {
    a: 1,
    foo: foo
};

const Obj2 = {
    a: 2
    
};


// Obj2.foo = Obj1.foo;
// Obj1.foo()
// Obj2.foo()
// foo.call(Obj3)

// Obj1.foo('У меня ', " есть")
// foo.call(Obj3, "а у меня ", " тоже")
// foo.apply(Obj2, ["а у меня ", " тоже"])



Obj1.foo('Есть ', ' целых')


const divs = document.getElementsByClassName('students');

// console.log(divs)

[].forEach.call(divs, (element) => {
    console.log(element)
}) //позволяет использовать форич для псевдомассива

//===========================================
//=================СЛАЙДЕР===================
//===========================================
// $('.single-item').slick();

  $('.slider__wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
// You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
  });

  $('.slick-center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
	
