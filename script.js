const key = 'getContentBySelector';
const jsx = `https://raw.githubusercontent.com/kuroshiro1902/WorkingTools/main/tools/${key}/index.js`;
const css = `https://raw.githubusercontent.com/kuroshiro1902/WorkingTools/main/tools/${key}/main.css`;
let isToolMounted = false;
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};
const loadCSS = async (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.onload = resolve;
    link.onerror = reject;
    document.body.appendChild(link);
  });
};
window.onload = async function () {
  if (isToolMounted) return;
  isToolMounted = true;
  // Tải thư viện React và React DOM
  await loadScript('https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js');
  await loadScript('https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js');
  await loadScript('https://cdn.jsdelivr.net/npm/@babel/standalone@7.15.8/babel.min.js');
  await loadCSS(css);
  //
  let script = localStorage.getItem('@Tool#' + key);
  if (!script) {
    try {
      const res = await fetch(jsx);
      const compiledCode = await res.text();
      // Sử dụng Babel để chuyển đổi JSX thành JavaScript
      script = Babel.transform(compiledCode, { presets: ['react'] }).code;
      localStorage.setItem('@Tool#' + key, script);
    } catch (err) {
      alert(err.message);
    }
  }
  // Tạo thẻ script và chèn mã đã chuyển đổi vào innerHTML
  const scriptElement = document.createElement('script');
  scriptElement.type = 'module';
  scriptElement.innerHTML = script;
  document.body.append(scriptElement);
};
