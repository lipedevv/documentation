---
description: "Điều chỉnh cài đặt mà không làm gián đoạn cài đặt của bạn."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Thiết lập

Edit `plugins/MRKDoctor/config.yml` with a YAML-aware text editor. Make a backup first and preserve indentation.

Thiết lập mặc định là một điểm khởi đầu tốt. Chỉ thay đổi các cài đặt bạn cần, chẳng hạn như nhãn máy chủ, khoảng thời gian giám sát, truy cập bảng điều khiển hoặc lưu trữ lịch sử.

Các thông tin đăng ký bảng điều khiển được tạo bởi `/doctor dashboard setup` sẽ hoạt động ngay lập tức. Bắt đầu lại sau khi thay đổi địa chỉ liên kết, cổng, trạng thái được bật hoặc cài đặt giám sát. `/doctor reload` không thay thế cho một khởi động lại đầy đủ cho các thay đổi kết nối và vòng đời.

Sử dụng tham chiếu cấu hình [configuration reference](../reference/configuration.md) cho phiên bản Universal. Đừng sao chép các cài đặt bổ sung từ phiên bản khác và giả sử chúng sẽ kích hoạt các tính năng mới.
