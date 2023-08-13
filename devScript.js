const key = 'getContentBySelector';
const link = `./tools/${key}/index.js`;
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

window.onload = async function () {
  if (isToolMounted) return;
  isToolMounted = true;

  // Tải thư viện React và React DOM
  await loadScript('https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js');
  await loadScript('https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js');
  await loadScript('https://cdn.jsdelivr.net/npm/@babel/standalone@7.15.8/babel.min.js');

  const res = await fetch(link);
  const script = await res.text();

  function action() {
    // Sử dụng Babel để chuyển đổi JSX thành JavaScript
    const compiledCode = Babel.transform(script, { presets: ['react'] }).code;

    // Tạo thẻ script và chèn mã đã chuyển đổi vào innerHTML
    const scriptElement = document.createElement('script');
    scriptElement.type = 'module';
    scriptElement.innerHTML = compiledCode;
    document.body.append(scriptElement);
  }

  action();
};
