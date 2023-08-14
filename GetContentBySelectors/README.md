# QuerySelectorAll By JSON Object Tool

Cách chạy:

- Vào file userscript.js và copy mã nguồn rồi dán vào console hoặc tạo script trong usercript.

Hướng dẫn sử dụng:

- Vị trí tìm kiếm: Là một chuỗi json gồm các cặp key-value, các value là các selector, ví dụ: {"content":"article > p"} sẽ thực hiện document.querySelectorAll("article > p") và hiển thị ra kết quả với key là content. Kết quả là gì tùy thuộc vào thuộc tính tìm kiếm.
- Thuộc tính tìm kiếm: Là thuộc tính của các thẻ HTML lấy được bằng lệnh querySelectorAll bên trên, ví dụ như innerHTML, innerText,...
- Có thể CACHE lại vị trí tìm kiếm và thuộc tính tìm kiếm trong cùng một tên miền (vd vnexpress.com), rất thuận tiện cho việc kiểm tra selector có lấy được đúng title, content,... trên các bài viết khác nhau trong cùng một trang báo như đã cài đặt hay không.
- Chỉ tìm kiếm selector trên các cặp key-value của chuỗi json nếu cặp đó có value. Nghĩa là nếu trong chuỗi json có một cặp key-value mà value bị bỏ trống, ví dụ "title": " ", thì sẽ không thực hiện tìm kiếm title.
- Nếu chuỗi json không hợp lệ sẽ có cảnh báo lỗi.
- Có thể loại bỏ các thẻ iframe trên các trang báo (thường các trang báo gắn rất nhiều iframe quảng cáo gây tình trạng load chậm, và có thể tool sẽ bị cài đặt ngay bên trong các iframe gây giật lag).
- Có thể ẩn hiện tool.
- Có thông báo đã submit chuỗi json hiện tại hay chưa.
- Có thể load được nội dung ảnh (nếu cài thuộc tính tìm kiếm là innerHTML).

Lỗi:
- Tool có thể bị render trong nhiều thẻ iframe, vậy nên khi tool ở giao diện chính đã hiển thị thì nên bấm 2-3 lần "Remove iframes" để xóa các thẻ iframe giúp load trang đỡ bị lag.
- Style của các thành phần trong tool có thể bị ảnh hưởng bởi css ở các trang web khác nhau.