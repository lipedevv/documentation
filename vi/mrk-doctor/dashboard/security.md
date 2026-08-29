---
description: "Giữ quyền truy cập chẩn đoán riêng tư."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# An ninh bảng điều khiển

- Chia sẻ truy cập chỉ với các quản trị viên đáng tin cậy.
- Sử dụng HTTPS cho bảng điều khiển web và kết nối an toàn với các dịch vụ của nó.
- Giữ liên kết địa phương mặc định khi các dịch vụ chạy trên cùng một máy chủ.
- Bảo vệ các phân bổ được lưu trữ bằng tường lửa và các quy tắc ủy quyền.
- Chuyển mã thông báo bằng `/doctor dashboard setup` nếu nó bị phơi bày.
- Xem lại các báo cáo và ảnh chụp màn hình trước khi gửi cho bất cứ ai.

Không bao giờ dán một token bảng điều khiển vào một vấn đề công cộng, kênh Discord hoặc ví dụ cấu hình. Nếu bạn không cần truy cập web, vô hiệu hóa `doctor.dashboard.enabled` và khởi động lại.
