/* FAQ */
document.querySelectorAll('.faq__answer').forEach((item) => {
    item.addEventListener('toggle', (event) => {
      if (event.target.open) {
        document.querySelectorAll('.faq__answer').forEach((otherItem) => {
          if (otherItem !== event.target) {
            otherItem.removeAttribute('open');
          }
        });
      }
    });
  });