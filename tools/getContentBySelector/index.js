//create Root
const toolRoot = document.createElement('aside');
toolRoot.id = 'Tool_Jason_1902';
toolRoot.onclick = function (e) {
  e.stopPropagation();
};
document.body.append(toolRoot);

//REACT
const { useState, useEffect, useMemo, useCallback, forwardRef, useRef, memo } = React;
const s = { background: '', yellow: '', pink: '' };

//Button
const Button = forwardRef(function ({ children, styles = {}, onClick = () => {}, ...rest }, ref) {
  return (
    <button ref={ref} style={styles} {...rest} onClick={onClick}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
//Input
function Input({ value = '', styles = {}, onChange = () => {}, onKeyDown = () => {}, placeholder = '', ...rest }) {
  const handleTab = useCallback((e) => {
    if (e.key == 'Tab') {
      e.preventDefault();
      const textarea = e.target;
      var start = textarea.selectionStart;
      var end = textarea.selectionEnd;
      // set textarea value to: text before caret + tab + text after caret
      textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
      // put caret at right position again
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  }, []);
  return (
    <textarea
      id="input"
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        handleTab(e);
        onKeyDown(e);
      }}
      rows={8}
      style={styles}
      placeholder={placeholder}
      spellCheck={false}
      {...rest}
    />
  );
}

//
function Item({ title = '', datas }) {
  let dataindex = 0;
  useEffect(() => {
    //đoạn này rất hay nhưng rối não, đọc lại không hiểu đâu :v
    datas.map((_, index) => {
      const e = (document.querySelector(`[data-index="${title}${index}"]`).innerHTML = datas[index]);
    });
  }, [datas]);
  return (
    <details open>
      <summary style={{ cursor: 'pointer', color: datas.length === 0 ? 'crimson' : null }}>{title}</summary>

      <div>
        {datas.length === 0 ? (
          <p className="content" style={{ color: 'crimson' }} title="No content matches selectors">
            Null
          </p>
        ) : (
          datas.map((_, index) => <p key={index} className="content" data-index={`${title}${dataindex++}`}></p>)
        )}
      </div>
    </details>
  );
}
//
const Results = memo(({ results }) => {
  results = results ?? {};
  return (
    <div>
      {Object.keys(results).map((key) => (
        <Item key={key} title={key} datas={results[key]} />
      ))}
    </div>
  );
});
Results.displayName = 'Results';
//
function ClearFloat({ children, style }) {
  return (
    <div>
      {children}
      <span style={{ display: 'block', clear: 'both', ...style }} />
    </div>
  );
}

//Tool
function Tool() {
  const [type, setType] = useState('innerText');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [_results, setResults] = useState(null);
  const [toggleChangeResults, setToggleChangeResults] = useState(false);
  const results = useMemo(() => _results, [toggleChangeResults]);
  const submitRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const jsonObj = JSON.parse(value);
      let data = {};
      for (let key in jsonObj) {
        //data = {key: HTMLProperty[]}
        data[key] = Array.from(document.querySelectorAll(jsonObj[key])).map((element) => element[type]);
      }
      setResults(data);
      setToggleChangeResults((prev) => !prev);
    } catch (error) {
      setMessage(error.message);
    }
  };
  if (!isShow)
    return (
      <Button
        className="toggle"
        onClick={() => {
          setIsShow(true);
        }}
      >
        Show
      </Button>
    );
  return (
    <div className="container">
      <main>
        <ClearFloat style={{ marginBottom: 8 }}>
          <label>
            <small style={{ color: 'var(--blue)' }}>
              {`Thuộc tính tìm kiếm (mặc định sẽ là innerText, có thể thay đổi thành innerHTML hoặc bất kì thuộc tính nào
              của một thẻ HTML):`}
            </small>
            <Input
              rows={1}
              value={type}
              styles={{ color: 'var(--pink)' }}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </label>
        </ClearFloat>
        <form onSubmit={handleSubmit}>
          <label>
            <small style={{ color: 'var(--green)' }}>Chuỗi json</small>
            <Input
              value={value}
              placeholder={`JSON object, e.g:\n\n{\n\t"title":"Welcome"\n}`}
              onChange={(e) => {
                setValue(e.target.value);
                setMessage('');
              }}
              onKeyDown={(e) => {
                if (e.shiftKey && e.key === 'Enter') {
                  // Ngăn chặn hành vi mặc định của Enter trong textarea
                  e.preventDefault();
                  const form = e.target.form;
                  if (form) {
                    submitRef.current.click();
                  }
                }
              }}
            />
          </label>
          <small style={{ color: 'crimson' }}>{message}</small>
          <ClearFloat>
            <Button className="submit" ref={submitRef}>
              Submit
            </Button>
          </ClearFloat>
          <ClearFloat>
            <small style={{ color: 'var(--blue)', float: 'right' }}>{'tips >> SHIFT ENTER to submit'}</small>
          </ClearFloat>
        </form>
        <p style={{ color: '#00a44d', fontWeight: 'bolder' }}>----- Result -----</p>
        <Results results={results} />
      </main>
      <div style={{ clear: 'both' }}>
        <Button
          className="toggle"
          onClick={() => {
            setIsShow(false);
          }}
        >
          Hide
        </Button>
      </div>
    </div>
  );
}
//
ReactDOM.render(<Tool />, toolRoot);
