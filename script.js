const link = './tools/getContentBySelector.js';
let isToolMounted = false;
window.onload = async function () {
  if (isToolMounted) return;
  isToolMounted = true;
  //
  const res = await fetch(link);
  const script = await res.text();

  // Sử dụng Babel để chuyển đổi JSX thành JavaScript
  const compiledCode = Babel.transform(script, { presets: ['react'] }).code;

  // Tạo thẻ script và chèn mã đã chuyển đổi vào innerHTML
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.innerHTML = compiledCode;
  document.body.append(scriptElement);
};
