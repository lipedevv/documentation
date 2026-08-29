---
description: "ใช้การตรวจสอบที่มีอยู่ เพื่อวางแผนการรักษาความปลอดภัยต่อไป"
icon: magnifying-glass
---

> [English source](../../../mrk-doctor/diagnostics/incident-investigation.md) · [Language home](../../README.md) · Machine-translated edition


<a id="investigate-a-problem"></a>
# สืบสวนปัญหา

1. ยืนยันสิ่งที่นักเตะกําลังประสบ และระบุเมื่อมันเริ่มต้น
2. วิ่ง `/doctor status` และ `/doctor incidents`
3. เปิดเหตุการณ์ในแผ่นดัชบอร์ดและอ่านรายละเอียดที่มีและการตรวจสอบที่แนะนํา
4. เปรียบเทียบเวลากับ [การเปลี่ยนแปลงล่าสุด](../changes/change-tracker.md)
5. อ่านความผิดพลาดของคอนโซลที่เกี่ยวข้องและตรวจสอบเอกสารของ Plugin ที่ได้รับผลกระทบ
6. เก็บรายงาน [report](../reports/creating-reports.md) ก่อนเปลี่ยนเซอร์เวอร์
7. ยืนหลัง ทําการเปลี่ยนแปลงที่สามารถเปลี่ยนได้ และสังเกตผล

{% hint style="warning" %}
พบกับ Plugin ที่สงสัย และการแสดงความมั่นใจใดๆ เป็นแนวทางการสอบสวน ไม่ใช่การรับประกัน โดย MRK Doctor ไม่ทําการซ่อม, ปรับปรุง Plugin หรือการย้อนกลับไปให้คุณ
{% endhint %}
