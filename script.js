const key = 'getContentBySelector';
const link = `./tools/${key}/index.js`;
let isToolMounted = false;
window.onload = async function () {
  if (isToolMounted) return;
  isToolMounted = true;
  //
  let script = localStorage.getItem('@Tool#' + key);
  if (!script) {
    try {
      const res = await fetch(link);
      const jsx = await res.text();
      // Sử dụng Babel để chuyển đổi JSX thành JavaScript
      script = Babel.transform(jsx, { presets: ['react'] }).code;
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
