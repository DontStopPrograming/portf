const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'rotateY(180deg)';

    setTimeout(() => {
      item.querySelector('.description').style.opacity = 1;
    }, 500);
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'rotateY(0)';
    item.querySelector('.description').style.opacity = 0;
  });
});
