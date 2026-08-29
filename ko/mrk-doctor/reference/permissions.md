---
description: "직원들에게 필요한 접근만 해주세요."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# 허가

모든 MRK Doctor 권한은 기본적으로 운영자에게 사용된다. 추가 권한이 있는 명령어들을 포함하여 모든 명령에 `mrkdoctor.view` 가 요구된다.

| 허가 | 접근 |
| --- | --- |
| `mrkdoctor.view` | 진단을 보거나, 사건과 변경 사항을 나열하고, 스냅샷을 만들고, 권한/ 명령 확인을 수행합니다. |
| `mrkdoctor.report` | 보고서를 작성하세요. |
| `mrkdoctor.dashboard` | 데시보드 연결 세부사항을 확인하고 인증서를 교체하십시오. |
| `mrkdoctor.admin` | 관리적 접근, 재충전 및 위의 권한을 포함하여. |

{% hint style="warning" %}
일반 플레이어에게 진단 권한을 부여하지 마십시오. 보고 및 연결 설정은 민감한 정보를 포함할 수 있습니다.
{% endhint %}

예약된 노드 `mrkdoctor.trace`, `mrkdoctor.rollback`, 및 `mrkdoctor.update` 는 이 버전에서 추적, 롤백 또는 자동 업데이트를 잠금하지 않습니다.
