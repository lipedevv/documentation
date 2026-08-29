---
description: "ให้บุคลากรได้แค่ที่ต้องการ"
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# การอนุญาต

การอนุญาต MRK Doctor ทั้งหมดเป็นการปรับปรุงโดยประกอบการ `mrkdoctor.view` เป็นการจําเป็นสําหรับทุกคําสั่ง, รวมถึงผู้ที่มีอนุญาตเพิ่มเติม

| การอนุญาต | การเข้าถึง |
| --- | --- |
| `mrkdoctor.view` | ดูการตรวจสอบ, รายการเหตุการณ์และการเปลี่ยนแปลง, สร้างภาพรวดเร็ว, และตรวจสอบอนุญาต / คําสั่ง. |
| `mrkdoctor.report` | สร้างรายงาน |
| `mrkdoctor.dashboard` | ดูรายละเอียดเชื่อมต่อดัชบอร์ด และเปลี่ยนใบรับรอง |
| `mrkdoctor.admin` | การเข้าใช้บริการ รวมถึงการโหลดใหม่ และอนุญาตที่ระบุด้านบน |

{% hint style="warning" %}
อย่าให้อนุญาตทางการตรวจสอบกับนักเล่นทั่วไป รายงานและการตั้งค่าเชื่อมต่ออาจมีข้อมูลที่มีความรู้สึก
{% endhint %}

คันหูที่จํากัด `mrkdoctor.trace`, `mrkdoctor.rollback`, และ `mrkdoctor.update` ไม่เปิดการติดตาม, การย้อนกลับ, หรือการอัพเดทอัตโนมัติในฉบับนี้.
