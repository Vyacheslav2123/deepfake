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



