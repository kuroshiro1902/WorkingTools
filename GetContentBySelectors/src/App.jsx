//REACT
import { useState, useEffect, useMemo, useCallback, forwardRef, useRef, memo } from 'react' ;
import './App.scss'
//Button
const Button = forwardRef(function ({ children, styles = {}, onClick = () => {}, ...rest}, ref) {
  return (
    <button ref={ref} style={styles} {...rest} onClick={onClick}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
//Input
function Input({ defaultValue = '123', styles = {}, onChange = () => {}, onKeyDown = () => {}, placeholder = '', ...rest }) {
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
      className="input"
      defaultValue={defaultValue}
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
    datas.map((_, index) => {
      document.querySelector(`[data-index="${title}${index}"]`).innerHTML = datas[index];
    });
  }, [datas]);
  return (
    <details open>
      <summary style={{ cursor: 'pointer', color: datas.length === 0 ? 'crimson' : null }}>{title}</summary>

      <div>
        {datas.length === 0 ? (
          <p className="_content" style={{ color: 'crimson' }} title="No content matches selectors">
            Null
          </p>
        ) : (
          datas.map((_, index) => <p key={index} className="_content" data-index={`${title}${dataindex++}`}></p>)
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
//removes Iframes
//Tool
export default function Tool() {
  const [type, setType] = useState('innerText');
  const [value, setValue] = useState('{\n\t"title":" ",\n\t"publish_time":" ",\n\t"content":" ",\n\t"author":" "\n}');
  const [message, setMessage] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [_results, setResults] = useState(null);
  const [toggleChangeResults, setToggleChangeResults] = useState(false);
  const results = useMemo(() => _results, [toggleChangeResults]);
  const submitRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.trim().length ===0){
      return setMessage('Không được để trống vị trí tìm kiếm')
    }
    if(type.trim().length ===0){
      setType(p=>'innerText')
    }
    try {
      //loại bỏ thuộc tính không có value
      const rawJsonObj = JSON.parse(value)
      const jsonObj = Object.keys(rawJsonObj).reduce((acc, key) => {
        if (rawJsonObj[key].trim() !== '') {
          acc[key] = rawJsonObj[key];
        }
        return acc;
      }, {});
      let data = {};
      for (let key in jsonObj) {
        //data = {key: HTMLProperty[]}
        data[key] = Array.from(document.querySelectorAll(jsonObj[key])).map((element) => element[type]??'')
      }
      setResults(data);
      setToggleChangeResults((prev) => !prev);
    } catch (error) {
      setMessage(error.message);
    }
  };
  const handleShiftEnter = useCallback((e) => {
    if (e.shiftKey && e.key === 'Enter') {
      // Ngăn chặn hành vi mặc định của Enter trong textarea
      e.preventDefault();
      const form = e.target.form;
      if (form) {
        submitRef.current.click();
      }
    }
  },[]) 
  const removeIframes = useCallback(() => {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(iframe => iframe.remove())
  },[]) 
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
    <div className="Container">
      <main>
        <form onSubmit={handleSubmit}>
        <ClearFloat style={{ marginBottom: 8 }}>
          <label>
            <small style={{ color: 'var(--yellow)' }}>
              {`Thuộc tính tìm kiếm (mặc định sẽ là innerText, có thể thay đổi thành innerHTML hoặc bất kì thuộc tính nào
              của một thẻ HTML, hãy cẩn thận):`}
            </small>
            <input
              className='input'
              value={type}
              style={{ color: 'var(--pink)' }}
              onChange={(e) => {
                setType(e.target.value.trim());
              }}
              spellCheck={false}
            />
          </label>
        </ClearFloat>
          <label>
            <small style={{ color: 'var(--green)' }}>{'Vị trí dò tìm (JSON)'}</small>
            <Input
              defaultValue={value}
              placeholder={`JSON object, e.g:\n\n{\n\t"title":"Welcome"\n}`}
              onChange={(e) => {
                setValue(e.target.value);
                setMessage('');
              }}
              onKeyDown={handleShiftEnter}
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
      <div style={{ clear: 'both', display: 'flex', justifyContent: 'space-between', alignItems:'end' }}>
        <Button 
          onClick={removeIframes} 
          title="Xóa các thẻ iframes trong trang web" 
          styles={{width: 'unset', height: 32, fontSize: 13, margin: 4, color: 'var(--yellow)'}}
        >
          Remove iframes
        </Button>
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
