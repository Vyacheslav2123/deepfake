let outer = document.getElementById('slaider')
document.querySelector('.woman__line').addEventListener("mouseover", (e) => {
  let curs = e.clientY - document.querySelector('.woman__edit').offsetTop
    if (curs < 350 && curs > 85) {
      document.querySelector('.woman__blur').style.height = `${curs}px`
    }
    if (curs > 350) {
      document.querySelector('.woman__blur').style.height = '350px'
    }
    if (curs < 85) {
      document.querySelector('.woman__blur').style.height = '85px'
    }
  document.querySelector('.woman__blur').addEventListener("mousemove", (e) => {
    let curs = e.clientY - document.querySelector('.woman__edit').offsetTop
    if (curs < 350 && curs > 85) {
      document.querySelector('.woman__blur').style.height = `${curs}px`
    }
    if (curs > 350) {
      document.querySelector('.woman__blur').style.height = '350px'
    }
    if (curs < 85) {
      document.querySelector('.woman__blur').style.height = '85px'
    }
  });
})


const questions = document.querySelectorAll('.faq__question');
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.classList.contains('faq__answer-open')) {
      answer.classList.remove('faq__answer-open')
      question.classList.remove('rotate__svg')
      } else {
        answer.classList.add('faq__answer-open')
        question.classList.add('rotate__svg')
      }
  });
});

const check2 = document.querySelector('.menu__box');
  check2.addEventListener('click', event => {
  menu__toggle.checked = false;
});
    $('a[href^="#how"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
        }, 600); // #5
        });
        $('a[href^="#faq"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
        }, 600); // #5
        });
        $('a[href^="#contact"]').click(function(){ // #1
        let anchor = $(this).attr('href'); // #2
        $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
        }, 600); // #5
        });
        $('a[href^="#referal"]').click(function(){ // #1
          let anchor = $(this).attr('href'); // #2
          $('html, body').animate({ // #3
          scrollTop: $(anchor).offset().top // #4
          }, 600); // #5
          });
          $('a[href^="#tarif"]').click(function(){ // #1
            let anchor = $(this).attr('href'); // #2
            $('html, body').animate({ // #3
            scrollTop: $(anchor).offset().top // #4
            }, 600); // #5
            });



