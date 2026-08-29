---
description: "Cài đặt khách hàng hỗ trợ cho phiên bản Universal."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Khán giả cấu hình

Khả năng tham khảo này bao gồm `plugins/MRKDoctor/config.yml` trong phiên bản Universal. Bắt đầu lại sau khi chỉnh sửa trừ khi bạn đã xác minh hành vi tải lại của cài đặt.

| Đặt | Dịch định | Mục đích |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Đồ sử dụng cho máy chủ này. |
| `doctor.performance.healthy-sample-seconds` | `15` | Khoảng thời gian giám sát trong quá trình hoạt động bình thường. |
| `doctor.performance.incident-sample-seconds` | `5` | Khoảng thời gian giám sát trong một sự cố. |
| `doctor.changes.enabled` | `true` | Khả năng giám sát thay đổi gần đây. |
| `doctor.changes.interval-seconds` | `30` | Khoảng thời gian kiểm tra thay đổi; sử dụng ít nhất 10 giây. |
| `doctor.changes.max-file-bytes` | `1048576` | Giới hạn kích thước cho so sánh các tệp văn bản chi tiết. |
| `doctor.dashboard.enabled` | `true` | Khả năng kết nối bảng điều khiển. |
| `doctor.dashboard.bind` | `0.0.0.0` | Nghe về phân bổ máy chủ. Sử dụng `127.0.0.1` khi truy cập phải đi qua một máy chủ tương ứng. |
| `doctor.dashboard.port` | `7854` | Cổng duy nhất được sử dụng bởi bảng điều khiển nhúng và API xác thực của nó. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Tùy chọn được phép nguồn gốc cho các triển khai proxy nâng cao; truy cập cùng nguồn gốc không cần địa chỉ đầu tiên riêng biệt. |
| `doctor.dashboard.token-hash` | Không có gì | Được quản lý bởi `/doctor dashboard setup`; không chỉnh sửa bằng tay. |
| `storage.raw-retention-hours` | `24` | Thời gian lưu giữ cho lịch sử métric chi tiết. |
| `logging.debug` | `false` | Để lại theo mặc định; nó không cho phép ghi lại thêm trong bản phát hành này. |

Sử dụng khoảng thời gian giám sát tích cực và một cổng bảng điều khiển hợp lệ. Giảm khoảng thời gian làm tăng công việc giám sát; thử thay đổi trên máy chủ giai đoạn đầu tiên.

{% hint style="warning" %}
Đừng dán token bảng điều khiển vào các ví dụ cấu hình. Tạo thông tin thông qua lệnh, và giữ cổng chẩn đoán được bảo vệ.
{% endhint %}
