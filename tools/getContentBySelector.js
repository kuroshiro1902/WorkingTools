//
let isToolMounted = false;
window.onload = function () {
  if (isToolMounted) return;
  isToolMounted = true;
  const toolRoot = document.createElement('div');
  toolRoot.id = 'toolRoot';
  toolRoot.style = 'position: fixed; bottom: 0; right: 0;';
  document.body.append(toolRoot);
  //
  // function Tool() {
  //   return <div id="hello"></div>;
  // }
  //
  // ReactDOM.render(Tool, toolRoot);
  fetch('https://raw.githubusercontent.com/kuroshiro1902/devblog/main/package.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
};
