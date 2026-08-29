---
description: "Các lệnh có sẵn cho các quản trị viên máy chủ."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Các lệnh

Tất cả các lệnh yêu cầu `mrkdoctor.view`. Các quyền mặc định cho các nhà điều hành. Xem [quyền](permissions.md) trước khi ủy quyền truy cập.

| Chỉ huy | Sử dụng | Tái phép bổ sung |
| --- | --- | --- |
| `/doctor` | Mở tổng quan trong game; hiển thị trạng thái trong máy điều khiển. | — |
| `/doctor status` | Hiển thị thông tin sức khỏe và thời gian chạy hiện tại. | — |
| `/doctor health` | Cho thấy bản tóm tắt sức khỏe tương tự. | — |
| `/doctor incidents` | Đặt danh sách các vụ việc mở. | — |
| `/doctor changes` | Khải minh những thay đổi gần đây được theo dõi. | — |
| `/doctor timeline` | Hãy hiển thị danh sách những thay đổi gần đây trong Universal. | — |
| `/nghệ sĩ y tế <player> <node>` | Check an online player's permission. | — |
| `/pháp lệnh <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Chữ lại một ảnh chẩn đoán. | — |
| `/doctor report` | Tạo một tập tin báo cáo. | `mrkdoctor.report` |
| `/doctor dashboard` | Khải thị địa chỉ bảng điều khiển nhúng được cấu hình. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Tạo và ngay lập tức kích hoạt một giấy chứng nhận bảng điều khiển mới. | `mrkdoctor.dashboard` |
| `/doctor reload` | Reload các giá trị cấu hình; một số thay đổi vẫn yêu cầu khởi động lại. | `mrkdoctor.admin` |

Sử dụng tên người chơi trực tuyến chính xác để kiểm tra người chơi. Địa chỉ được in bởi `/doctor dashboard` sử dụng địa chỉ liên kết được cấu hình; thay thế `127.0.0.1` hoặc `0.0.0.0` bằng tên chủ nhà công cộng khi mở từ xa.

Phiên bản giấy tối ưu hóa cũng cung cấp plugin `/doctor <plugin>` cho một bản tóm tắt plugin.

`/doctor trace` chỉ hiển thị thông báo sẵn có trong phiên bản này; nó không bắt đầu theo dõi. Không có lệnh cập nhật hoặc quay lại tự động.
