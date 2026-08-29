---
description: "Chuẩn bị phân bổ lưu trữ cho bảng điều khiển."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Pterodactyl lưu trữ

Chọn một phân bổ sẵn có trong bảng máy chủ của bạn, chẳng hạn như `7854`, và đặt `doctor.dashboard.port` cho cổng đó. Không cần ứng dụng web riêng biệt hoặc phân bổ thứ hai.

Sử dụng địa chỉ liên kết được yêu cầu bởi mạng lưu trữ của bạn. địa chỉ localhost của một container không thể truy cập từ một container riêng biệt. Nếu máy chủ của bạn yêu cầu `0.0.0.0`, hãy đảm bảo các phân bổ được bảo vệ bởi tường lửa hoặc proxy an toàn của nó trước khi kích hoạt truy cập.

Các bảng điều khiển web được phục vụ trực tiếp bởi plugin. Theo [thiết lập ban đầu](initial-setup.md), khởi động lại sau khi thay đổi địa chỉ liên kết hoặc cổng, và kiểm tra trang bằng địa chỉ được phân bổ.

{% hint style="warning" %}
Đừng mở các cổng không giới hạn để giải quyết vấn đề kết nối. Nếu kế hoạch của bạn không cho phép bạn chọn hoặc phơi bày phân bổ, chỉ có nhà cung cấp dịch vụ lưu trữ có thể làm cho cổng bảng điều khiển nhập tiếp cận; plugin không thể bỏ qua tường lửa máy chủ.
{% endhint %}
