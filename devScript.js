//không cache
const link = './tools/getContentBySelector/index.js';
let isToolMounted = false;
window.onload = async function () {
  if (isToolMounted) return;
  isToolMounted = true;
  //
  try {
    const res = await fetch(link);
    const script = await res.text();

    // Sử dụng Babel để chuyển đổi JSX thành JavaScript
    const compiledCode = Babel.transform(script, { presets: ['react'] }).code;

    // Tạo thẻ script và chèn mã đã chuyển đổi vào innerHTML
    const scriptElement = document.createElement('script');
    scriptElement.type = 'module';
    scriptElement.innerHTML = compiledCode;
    document.body.append(scriptElement);
  } catch (err) {
    alert(err.message);
  }
};
