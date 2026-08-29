---
description: "Cài đặt quyền truy cập an toàn vào bảng điều khiển web."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Kết nối bảng điều khiển

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Tạo giấy chứng nhận
`/doctor dashboard setup` chạy như một nhà điều hành, sao chép mã thông báo hiển thị ngay lập tức và lưu trữ nó an toàn.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Thiết lập địa chỉ
Trong `plugins/MRKDoctor/config.yml`, đặt `doctor.dashboard.port` vào cổng được phân bổ. `0.0.0.0` liên kết mặc định nghe trên phân bổ máy chủ; thay đổi nó thành `127.0.0.1` khi một đại diện ngược trên cùng một máy chủ chủ phải là khách hàng trực tiếp duy nhất.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Mở bảng điều khiển nhúng
Mở `http://SERVER_ADDRESS:PORT` trong trình duyệt và nhập mã thông báo.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Khởi động lại chỉ sau khi thay đổi thiết lập kết nối
Một token mới được tạo được hoạt động ngay lập tức. khởi động lại máy chủ Minecraft chỉ sau khi thay đổi địa chỉ liên kết, cổng hoặc trạng thái được bật.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Đừng để cổng chẩn đoán không được bảo vệ trên internet công cộng. Bảo vệ truy cập từ xa bằng một proxy ngược đáng tin cậy, TLS, và tường lửa. Đừng coi cài đặt nguồn gốc web như là sự thay thế cho xác thực.
{% endhint %}

Tạo một token khác thay thế bằng chứng ngay lập tức. Cập nhật trình duyệt đáng tin cậy với token mới. Xem [Pterodactyl](pterodactyl.md) và [bảo mật](security.md).
