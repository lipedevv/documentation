---
description: "ปรับการเข้าถึงระบบ Web Dashboard ได้อย่างปลอดภัย"
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# เชื่อมโต๊ะดัชบอร์ด

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### สร้างใบรับรอง
วิ่ง `/doctor dashboard setup` เป็นผู้ประกอบการ สําเนาท็อกโน่นที่แสดงทันทีและเก็บไว้อย่างปลอดภัย
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### ปรับ ঠিকানা
ใน `plugins/MRKDoctor/config.yml`กําหนด `doctor.dashboard.port` เป็นรั้วที่ได้รับการจัดจําหน่าย โดยการกําหนด `0.0.0.0` bind จะฟังในการจัดจําหน่ายเซอร์เวอร์; เปลี่ยนเป็น `127.0.0.1` เมื่อตัวแทนกลับในตัวอํานวยการเดียวกันควรจะเป็นลูกค้าตรงเดียว
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### เปิดแผ่นดาร์ชบอร์ดที่ติดตั้ง
เปิด `http://SERVER_ADDRESS:PORT` ในบrowser และใส่ท็อกน์. UI แดชบอร์ด, API และอัปเดตอัตโนมัติใช้ท่าทางที่ตั้งแบบเดียวนี้
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### เริ่มใหม่เพียงหลังจากการเปลี่ยนแปลงการตั้งค่าเชื่อมต่อ
ท็อกน์ที่เกิดใหม่จะใช้ได้ทันที. เริ่มต้นเซอร์เวอร์ Minecraft เพียงหลังจากเปลี่ยนที่อยู่บิด, ปอร์ต, หรือรัฐที่เปิดให้ใช้ได้
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
อย่าปล่อยท่าทางการตรวจสอบไม่คุ้มกันในอินเตอร์เน็ตสาธารณะ ป้องกันการเข้าถึงระยะไกลด้วยตัวแทนกลับที่เชื่อถือได้ เช่น TLSและผนังไฟฟ้า อย่ามองการตั้งแหล่งเว็บเป็นตัวแทนของการรับรอง
{% endhint %}

การสร้างท็อกโน่นอื่นแทนที่อัตราการรับรองโดยทันที ปรับปรุง trình duyệtที่เชื่อถือได้ด้วยท็อกโน่นใหม่ ดู [Pterodactyl](pterodactyl.md) และ [ความปลอดภัย](security.md)
