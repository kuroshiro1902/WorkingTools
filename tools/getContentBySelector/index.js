const type = 'innerHTML';
const { useState, useMemo, useCallback, memo } = React;
const s = { background: '#122335', yellow: '#f9ae01', pink: '#ff0185', blue: '#006bfc' };

//Button
function Button({ children, styles = {}, onClick = () => {}, ...rest }) {
  const style = {
    outline: 'none',
    padding: '.4rem .2rem',
    cursor: 'pointer',
    borderRadius: 4,
    ...styles,
  };
  return (
    <button style={style} {...rest} onClick={onClick}>
      {children}
    </button>
  );
}

//Input
function Input({ value = '', styles = {}, onChange = () => {}, placeholder = '' }) {
  const style = useMemo(() => {
    return {
      width: '100%',
      fontFamily: '"Lucida Console", "Courier New", monospace',
      fontSize: 13,
      padding: 4,
      tabSize: 4,
      outline: 'none',
      resize: 'none',
      ...styles,
    };
  }, []);
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
      value={value}
      onChange={onChange}
      onKeyDown={handleTab}
      rows={10}
      style={style}
      placeholder={placeholder}
      spellCheck={false}
    />
  );
}

//
function Item({ title = '', data }) {
  data = Array.from(data);
  const titleStyle = {
    cursor: 'pointer',
  };
  const contentStyles = {
    paddingLeft: 20,
    marginBottom: 4,
    color: '#fe1f87',
  };
  return (
    <details open>
      <summary style={titleStyle}>{title}</summary>
      <div>
        {data.map((dom, index) => (
          <p key={index} style={contentStyles}>
            {dom[type]}
          </p>
        ))}
      </div>
    </details>
  );
}
//
const Results = memo(({ results, autoOpen }) => {
  results = results ?? {};
  return (
    <div style={{ margin: '8px 0' }}>
      {Object.keys(results).map((key) => (
        <Item key={key} title={key} data={results[key]} />
      ))}
    </div>
  );
});
Results.displayName = 'Results';
//
function ClearFloat({ children }) {
  return (
    <div>
      {children}
      <span style={{ display: 'block', clear: 'both' }} />
    </div>
  );
}

//Tool
function Tool() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [_results, setResults] = useState(null);
  const [toggleChangeResults, setToggleChangeResults] = useState(false);
  const results = useMemo(() => _results, [toggleChangeResults]);
  const styles = useMemo(() => {
    return {
      width: '30vw',
      minWidth: 480,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: s.background,
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(value);
      let doms = {};
      for (let key in data) {
        doms[key] = document.querySelectorAll(data[key]);
      }
      setResults(doms);
      setToggleChangeResults((prev) => !prev);
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
    }
  };
  if (!isShow)
    return (
      <Button
        onClick={() => {
          setIsShow(true);
        }}
        styles={{ backgroundColor: s.yellow, margin: 4, color: '#000', width: 48 }}
      >
        Show
      </Button>
    );
  return (
    <div style={styles}>
      <main style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <Input
            value={value}
            placeholder={`Valid json object, e.g:\n\n{\n\t"title":"Welcome"\n}`}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <ClearFloat>
            <Button styles={{ backgroundColor: s.blue, color: '#fff', padding: 8, float: 'right' }}>Submit</Button>
          </ClearFloat>
        </form>
        <h3 style={{ color: '#00a44d' }}>Result :</h3>
        <Results results={results} />
      </main>
      <div style={{ clear: 'both' }}>
        <Button
          styles={{ backgroundColor: s.yellow, margin: 4, float: 'right', width: 48 }}
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
const toolRoot = document.createElement('aside');
toolRoot.id = 'toolRoot';
toolRoot.style = 'position: fixed; bottom: 0; right: 0; color: #fff; font-family: Arial, san-serif;';
toolRoot.onclick = function (e) {
  e.stopPropagation();
};
document.body.append(toolRoot);
ReactDOM.render(<Tool />, toolRoot);
