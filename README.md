# MathLab · Toán học trực quan

MathLab là một ứng dụng web tĩnh. Các nhóm **Hình học và đo lường**, **Thống kê và Xác suất** và **Đại số và giải tích** dùng chung thanh điều hướng, tiêu đề, bộ chọn công cụ và nút quay lại của MathLab. Khi mở qua HTTP(S), trang gọi mô-đun dùng chung trong `toan-goc/` để chạy phần biểu đồ, phép tính hoặc mô hình của công cụ được chọn. Các tệp GeoGebra được lưu cùng dự án. Bộ máy GeoGebra tải từ dịch vụ GeoGebra.

- Phục vụ thư mục bằng một máy chủ web tĩnh và mở `index.html` để thử điều hướng.
- Chạy `node build.mjs` để tạo bản `MathLab.html` ở thư mục cha. Có thể mở tệp HTML này trực tiếp khi ngoại tuyến.
- Chạy `node build.mjs --watch` để dựng lại tệp HTML khi lưu mã nguồn.
- GitHub Pages phục vụ `index.html` và các tệp đi kèm ở thư mục gốc của nhánh `main`.

Để dựng lại mô-đun từ bản lưu gốc, chạy `node build-originals.mjs <thư-mục-gốc>`. Lệnh lấy mã công cụ, CSS và các tài nguyên dùng chung, rồi nối mô-đun vào trang MathLab. Các địa chỉ cũ dẫn về đúng nhóm và công cụ trong MathLab.
