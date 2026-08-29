---
description: "สืบสวนปัญหาการเข้าถึงผู้เล่นออนไลน์"
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# ตรวจสอบอนุญาตและคําสั่ง

ผู้เล่นเป้าต้องอยู่บนระบบ ใช้ชื่อผู้เล่นแม่นยํา

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

คําสั่งแรกตรวจสอบอนุญาตที่กําหนด ส่วนที่สองช่วยระบุ Plugin ของคําสั่งและตรวจสอบการเข้าใช้งาน เพียงแค่ส่งชื่อคําสั่ง โดยไม่ต้องท่าเถียงเพิ่มเติม

หากการเข้าถึงยังล้มเหลว, ตรวจสอบสัญลักษณ์ของคําสั่ง, การตั้งค่ากลุ่มอนุญาต, การจํากัดโลก, และการเย็น. MRK Doctor ไม่เปลี่ยนอนุญาตของผู้เล่นหรือเปลี่ยนผู้จัดการอนุญาตของคุณ.

การตรวจสอบเหล่านี้สามารถเปิดให้กับผู้ใช้งานที่มี `mrkdoctor.view`ได้ ดังนั้นให้ node นั้นเป็นเพียงพนักงานที่เชื่อถือได้
