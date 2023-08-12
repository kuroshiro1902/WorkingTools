const toolRoot = document.createElement('div');
toolRoot.id = 'toolRoot';
toolRoot.style = 'position: fixed; bottom: 0; right: 0;';
document.body.append(toolRoot);
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, toolRoot);
