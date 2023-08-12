let queryStack = [];
let currIndexQuery = -1;
let lastQuery = '';
function create(type, styles, children) {
  const e = document.createElement(type ?? 'div');
  styles ? Object.assign(e.style, styles) : '';
  if (children) {
    typeof children === 'string' ? (e.innerHTML = children) : e.append(children);
  }
  return e;
}
function workspace() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, san-serif',
    position: 'fixed',
    bottom: 0,
    // top: 0,
    top: 'calc(100% - 56px)',
    right: 0,
    width: '30vw',
    height: '100vh',
    backgroundColor: '#122337',
    zIndex: 999999,
    padding: '1rem',
    color: '#ffffff',
  };
  const workspace = create('div', styles);
  workspace.id = 'querySearchingMachine-1902';
  return workspace;
}
function button(text, styles = {}) {
  const _styles = {
    height: '1.75rem',
    borderRadius: '4px',
    backgroundColor: '#f9ae01',
    color: '#0f0f0f',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '12px',
    textAlight: 'center',
    padding: '0 8px',
    ...styles,
  };
  const b = create('button', _styles);
  b.innerText = text;
  b.title = 'Toggle';
  return b;
}
function submitButton(text, styles = {}) {
  const _styles = {
    borderRadius: '4px',
    backgroundColor: '#ff0185',
    transition: 'top 1s ease-in-out',
    color: '#ffffff',
    outline: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    textAlight: 'center',
    padding: '.75rem 8px',
    display: 'flex',
    alignItems: 'center',
    ...styles,
  };
  const b = create('button', _styles);
  b.innerText = text;
  b.title = text;
  return b;
}
function label(input) {
  const styles = {
    display: 'block',
    margin: '1rem auto',
  };
  const l = create('label', styles);
  l.append(input);
  return l;
}
function input(placeholder) {
  const styles = {
    width: '100%',
    color: '#0069f9',
    padding: '8px',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    borderRadius: '8px',
  };
  const i = create('input', styles);
  i.type = 'text';
  i.placeholder = placeholder;
  return i;
}
function message() {
  const q = create(
    'div',
    {
      color: '#ffffff',
      display: 'inline-block',
      borderRadius: '8px',
      padding: '.6rem ',
      backgroundColor: 'green',
      wordBreak: 'break-word',
    },
    'No query',
  );
  const p = create('p', {
    fontWeight: 'bold',
    display: 'inline-block',
    borderRadius: '8px',
    color: '#000',
    margin: '1rem .25rem',
    padding: '.1rem',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
  });
  p.title = 'Copy';
  p.append(q);
  p.setQuery = function (query) {
    q.innerText = query;
  };
  return p;
}
function list() {
  const styles = {
    marginTop: '1rem',
    overflowY: 'auto',
    backgroundColor: '#0b1521',
    padding: '1rem .5rem',
    borderRadius: '8px',
    flex: '1',
  };
  const u = create('ul', styles);
  return u;
}
function main() {
  // elements
  const Workspace = workspace();
  const ToggleBtn = button('Toggle');
  const QueryInput = input('e.g: article > p.content');
  const Message = create('p', { margin: '0 .25rem', fontSize: '14px', color: 'crimson' });
  const QueryLabel = label(QueryInput);
  const SubmitBtn = submitButton('Query');
  const submitBtnCtn = create('div', { display: 'flex', justifyContent: 'end' }, SubmitBtn);
  const Form = create('form');
  const PrevBtn = button('Prev', { backgroundColor: '#0166f2', color: '#fff' });
  const NextBtn = button('Next', { backgroundColor: '#0166f2', color: '#fff' });
  const Query = message();
  const Control = create('div', {});
  //
  Form.append(QueryLabel, Message, submitBtnCtn);
  Control.append(PrevBtn, NextBtn, create('small', { marginLeft: '4px' }, '(max: 5 queries)'));
  const ResultList = list();
  //print results
  function print(results) {
    ResultList.innerHTML = '';
    results.forEach((result) => {
      ResultList.append(
        create(
          'li',
          {
            overflowX: 'auto',
            marginBottom: '1rem',
            marginLeft: '4px',
            color: '#fff',
            paddingBottom: '2px',
            borderBottom: '1px solid #66666680',
          },
          result.innerText,
        ),
      );
    });
  }
  //reset message
  QueryInput.oninput = function () {
    Message.innerText = '';
  };
  //copy to clipboard
  function copyToClipboard(e) {
    navigator.clipboard
      .writeText(e.target.innerText)
      .then(() => {})
      .catch((error) => {
        Message.innerText = 'Sao chép thất bại';
      });
  }
  Query.onclick = copyToClipboard;
  //submit
  function onSubmit(value) {
    if (value.length === 0) return alert('Không được để trống.');
    if (value !== lastQuery) {
      lastQuery = value;
      // try {
      const results = document.querySelectorAll(value);
      if (results.length === 0) return (Message.innerText = 'Không có kết quả hoặc selector không hợp lệ.');
      if (queryStack.length < 5) {
        if (!queryStack.includes(value)) queryStack.push(value);
      } else {
        if (!queryStack.includes(value)) queryStack = [queryStack[1], queryStack[2], value];
      }
      Message.innerText = '';
      Query.setQuery(value);
      currIndexQuery = queryStack.indexOf(value);
      print(results);
      // } catch (error) {
      //   console.log(error);
      //   Message.innerText = 'Selector không hợp lệ.';
      // }
    }
  }
  //prev/next query
  PrevBtn.onclick = function (e) {
    if (queryStack.length == 0) return;
    currIndexQuery = currIndexQuery - 1 < 0 ? 0 : currIndexQuery - 1;
    onSubmit(queryStack[currIndexQuery]);
  };
  NextBtn.onclick = function (e) {
    if (queryStack.length == 0) return;
    currIndexQuery = currIndexQuery + 1 > queryStack.length - 1 ? queryStack.length - 1 : currIndexQuery + 1;
    onSubmit(queryStack[currIndexQuery]);
  };
  //toggle
  Workspace.show = false;
  const options = {
    duration: 500,
    iterations: 1,
    fill: 'both',
  };
  ToggleBtn.addEventListener('click', () => {
    let toggle;
    if (Workspace.show == true) {
      Workspace.show = false;
      toggle = [{ top: '0' }, { top: 'calc(100% - 56px)' }];
    } else {
      Workspace.show = true;
      toggle = [{ top: 'calc(100% - 56px)' }, { top: '0' }];
    }
    Workspace.animate(toggle, options);
  });
  //events
  Form.onsubmit = function (e) {
    e.preventDefault();
    const value = QueryInput.value.trim();
    onSubmit(value);
  };
  ToggleBtn.onclick = function (e) {};
  //mount
  const top = create('div');
  top.append(ToggleBtn, Form, Query, Control);
  Workspace.append(top, ResultList);
  document.body.append(Workspace);
}
main();
