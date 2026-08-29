---
description: "จับข้อมูลการตรวจก่อนที่จะเปลี่ยนแปลง"
icon: camera
---

> [English source](../../../mrk-doctor/recovery/snapshots.md) · [Language home](../../README.md) · Machine-translated edition


<a id="save-a-diagnostic-snapshot"></a>
# เก็บภาพตรวจสอบ

วิ่ง `/doctor snapshot`. คําสั่งรายงานเส้นทางของไฟล์ที่สร้างใน `plugins/MRKDoctor/snapshots/`

จองภาพสั้นตอนตอนการสืบสวนปัญหา หรือ ก่อนเปลี่ยนการตั้งค่าของ Plugin

{% hint style="warning" %}
สน็อปช็อต เป็นบันทึกการตรวจสอบ ไม่ใช่เซอร์เวอร์สํารอง มันไม่สามารถฟื้นฟูโลก ไฟล์พล็อกอิน การตั้งค่า หรือโฟลเดอร์ข้อมูล MRK Doctor ครบครันได้
{% endhint %}
