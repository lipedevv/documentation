---
description: "Kiểm tra thực tế cho các vấn đề phổ biến."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Xử lý các vấn đề

<a id="plugin-will-not-start"></a>
## Plugin sẽ không khởi động

Hãy xác nhận bạn đã cài đặt phiên bản chính xác và chỉ có một MRK Doctor JAR. Kiểm tra yêu cầu Java của máy chủ, không gian đĩa miễn phí, quyền tập tin và lỗi đầu tiên liên quan của máy chủ. Bắt đầu lại bình thường sau khi sửa lỗi.

<a id="server-is-lagging-or-shows-errors"></a>
## Server đang trễ hoặc hiển thị lỗi

Lưu trữ khi vấn đề bắt đầu. Kiểm tra `/doctor status`, các sự cố mở và những thay đổi gần đây. Xem lại các lỗi máy điều khiển của plugin bị ảnh hưởng, sau đó [tạo ra báo cáo](../reports/creating-reports.md). Kiểm tra một thay đổi đảo ngược tại một thời điểm bằng cách sử dụng bản sao lưu.

<a id="dashboard-will-not-connect"></a>
## Đăng phím sẽ không kết nối

Đảm bảo MRK Doctor được bật và mở địa chỉ bảng điều khiển nhúng được cấu hình. Kiểm tra địa chỉ liên kết, phân bổ lưu trữ đơn, tường lửa, tuyến đường đại diện và cổng được cấu hình. Một token mới được tạo được hoạt động ngay lập tức. Đừng bao giờ vô hiệu hóa bảo mật hoặc phơi bày cổng không hạn chế như một giải pháp.

<a id="a-player-cannot-use-a-command"></a>
## Người chơi không thể sử dụng lệnh

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Tưởng thức tiếp tục tăng lên

Theo dõi sử dụng theo thời gian và so sánh nó với hoạt động của người chơi. Một bài đọc cao không phải là bằng chứng về rò rỉ hoặc sở hữu plugin. Sử dụng các công cụ hồ sơ được hỗ trợ của máy chủ của bạn khi cần nhiều chi tiết hơn.

<a id="reports-or-history-are-unavailable"></a>
## Các báo cáo hoặc lịch sử không có sẵn

Kiểm tra không gian đĩa trống và quyền đọc/sẽ viết cho `plugins/MRKDoctor/`. Hóa máy chủ và sao lưu toàn bộ thư mục trước khi cố gắng sửa chữa. Đừng xóa các tệp dữ liệu để khắc phục vấn đề mà không cần sao lưu được xác minh.

<a id="monitoring-overhead-seems-high"></a>
## Chi phí giám sát dường như cao

Trở lại khoảng thời gian giám sát theo mặc định của chúng, tránh theo dõi các tệp văn bản không cần thiết và so sánh hiệu suất dưới tải tương tự. Nếu nó vẫn tồn tại, hãy gửi nhật ký và cài đặt liên quan thông qua [hỗ trợ](../../support.md), mà không cần xác thực.
