const btn = document.querySelector('.btn');

const question = [
  {
    id: 'Học là học biết giữ giàng Biết điều nhân nghĩa biết đàng hiếu trung.',
  },
  {
    id: 'Ngọc kia chẳng giũa chẳng mài Cũng thành vô dụng cũng hoài ngọc đi.',
  },
  {
    id: 'Học trò học hiếu học trung Học cho đến mực anh hùng mới thôi.',
  },
  {
    id: 'Học là học để mà hành Vừa hành vừa học mới thành người khôn.',
  },
  {
    id: 'Làm người mà được khôn ngoan Cũng nhờ học tập mọi đường mọi hay',
  },
  {
    id: 'Dao có mài mới sắc, người có học mới nên.',
  },
];
const getQuestion = () => {
  return question;
};

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

btn.addEventListener('click', () => {
  var randomColor = Math.floor(Math.random() * colors.length);
  if (randomColor) {
    document.body.style.background = colors[randomColor];
  }

  const quote = getQuestion();
  var html = '';
  const text = document.querySelector('p');

  var random = Math.floor(Math.random() * quote.length);
  var randomquote = quote[random];
  html += `<p style="color: ${colors[randomColor]};">${randomquote.id}</p>`;

  text.innerHTML = html;
});
