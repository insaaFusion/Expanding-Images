const panels = document.querySelectorAll('.panel');

const remove = function () {
  panels.forEach((panel) => panel.classList.remove('active'));
};

panels.forEach((panel) =>
  panel.addEventListener('click', function () {
    remove();
    panel.classList.add('active');
  })
);
