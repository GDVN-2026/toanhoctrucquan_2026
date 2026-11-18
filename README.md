# MathLab · Toán học trực quan

MathLab là một ứng dụng web tĩnh. Khi mở qua HTTP(S), ba bộ **Hình học và đo lường**, **Thống kê và Xác suất**, **Đại số và giải tích** dùng mã giao diện gốc với một bản chạy dùng chung trong `toan-goc/`. Các tệp GeoGebra thuộc các mô hình gốc được lưu cùng trang. Bộ máy GeoGebra của các mô hình đó tải từ GeoGebra.

- Phục vụ thư mục bằng một máy chủ web tĩnh và mở `index.html` để thử điều hướng.
- Chạy `node build.mjs` để tạo bản `MathLab.html` ở thư mục cha. Có thể mở tệp HTML này trực tiếp khi ngoại tuyến.
- Chạy `node build.mjs --watch` để dựng lại tệp HTML khi lưu mã nguồn.
- GitHub Pages phục vụ `index.html` và các tệp đi kèm ở thư mục gốc của nhánh `main`.

Để dựng lại bản dùng chung từ ba thư mục lưu trữ gốc, chạy `node build-originals.mjs <thư-mục-chứa-ba-bộ>`. Lệnh dùng mã React, CSS, tài nguyên và cấu hình menu từ bản build gốc, chuyển điều hướng sang URL hash phù hợp máy chủ tĩnh và bỏ tác vụ ghi bộ nhớ theo giờ cùng kết nối nền đến máy chủ localhost cũ.
