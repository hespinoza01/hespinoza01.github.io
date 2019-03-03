addEventListener('animationend', (e) => {
  if(e.animationName === 'out-loader') e.target.remove();
});
