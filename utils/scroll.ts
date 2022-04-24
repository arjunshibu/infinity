const atEnd = () => {
  var c = [
    document.scrollingElement!.scrollHeight,
    document.body.scrollHeight,
    document.body.offsetHeight,
  ].sort(function (a, b) {
    return b - a;
  });
  return window.innerHeight + window.scrollY + 2 >= c[0];
};

export { atEnd };
