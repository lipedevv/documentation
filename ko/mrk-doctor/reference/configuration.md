---
description: "유니버설 에디션의 고객 설정이 지원됩니다."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# 구성 참조

이 참조는 `plugins/MRKDoctor/config.yml` 를 범용판에서 포함합니다. 설정을 재충전하는 동작을 확인하지 않은 경우 편집 후 다시 시작하십시오.

| 설정 | 기본 | 목적 |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | 이 서버에 사용된 레이블 |
| `doctor.performance.healthy-sample-seconds` | `15` | 정상 작동 중 모니터링 간격 |
| `doctor.performance.incident-sample-seconds` | `5` | 사고 중 모니터링 간격 |
| `doctor.changes.enabled` | `true` | 최근 변화의 모니터링을 가능하게 합니다. |
| `doctor.changes.interval-seconds` | `30` | 변경 검사 간격; 최소 10초를 사용하십시오. |
| `doctor.changes.max-file-bytes` | `1048576` | 상세한 텍스트 파일 비교의 크기의 제한 |
| `doctor.dashboard.enabled` | `true` | 패시보드 연결을 활성화하십시오. |
| `doctor.dashboard.bind` | `0.0.0.0` | 서버 할당에 대해 들어보세요. 같은 호스트의 역 프록시를 통해 접근해야 할 때 `127.0.0.1` 를 사용하세요. |
| `doctor.dashboard.port` | `7854` | 임베디드 대시보드와 그 인증된 API가 사용하는 단일 포트 |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | 고급 프록시 배포에 대해서는 선택적으로 허용된 기원은; 동일한 기원에 대한 액세스에는 별도의 프론트엔드 주소가 필요하지 않습니다. |
| `doctor.dashboard.token-hash` | 공허 | `/doctor dashboard setup`에 의해 관리됩니다. |
| `storage.raw-retention-hours` | `24` | 상세한 측정기록을 위한 저장 기간 |
| `logging.debug` | `false` | 기본으로 남겨두기; 이 버전에서 추가 로깅을 허용하지 않습니다. |

긍정적인 모니터링 간격과 유효한 대시보드 포트를 사용하십시오. 간격을 줄이는 것은 모니터링 작업을 증가시킵니다. 먼저 스테이지 서버에서 테스트 변경.

{% hint style="warning" %}
디시보드 토큰을 구성 예제에 붙이지 말고 명령어를 통해 인증서를 생성하고 진단 포트를 보호하십시오.
{% endhint %}
