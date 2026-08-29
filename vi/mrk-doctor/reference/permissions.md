---
description: "Cho nhân viên chỉ có quyền truy cập mà họ cần."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Giấy phép

Tất cả quyền MRK Doctor đều được mặc định cho các nhà điều hành. `mrkdoctor.view` là yêu cầu cho mọi lệnh, bao gồm cả những người có quyền bổ sung.

| Giấy phép | Phiên bản |
| --- | --- |
| `mrkdoctor.view` | Xem chẩn đoán, liệt kê các sự cố và thay đổi, tạo snapshots và thực hiện kiểm tra quyền / lệnh. |
| `mrkdoctor.report` | Tạo báo cáo. |
| `mrkdoctor.dashboard` | Xem chi tiết kết nối bảng điều khiển và thay thế giấy chứng nhận của nó. |
| `mrkdoctor.admin` | Phiên bản quản lý, bao gồm tải lại và các quyền trên. |

{% hint style="warning" %}
Không cho phép chẩn đoán cho người chơi thông thường.
{% endhint %}

Các nút được đặt `mrkdoctor.trace`, `mrkdoctor.rollback`, và `mrkdoctor.update` không mở khóa theo dõi, quay lại, hoặc cập nhật tự động trong bản phát hành này.
