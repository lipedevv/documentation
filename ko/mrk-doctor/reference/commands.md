---
description: "서버 관리자에게 사용할 수 있는 명령어"
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# 명령

All commands require `mrkdoctor.view`. Permissions default to operators. See [permissions](permissions.md) before delegating access.

| 지휘 | 사용 | 추가 허가 |
| --- | --- | --- |
| `/doctor` | 게임 내 개요를 열고 콘솔 상태를 표시하십시오. | — |
| `/doctor status` | 현재 건강 및 실행 시간 정보를 표시합니다. | — |
| `/doctor health` | 같은 건강 요약을 보여주세요. | — |
| `/doctor incidents` | 공개된 사건들을 나열해 보세요. | — |
| `/doctor changes` | 최근 추적된 변경사항을 표시합니다. | — |
| `/doctor timeline` | 최근 변경된 목록을 유니버설에서 보여드리겠습니다. | — |
| `/의사 허가 <player> <node>` | Check an online player's permission. | — |
| `/박사 명령 <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | 진단 스냅샷을 저장해두세요. | — |
| `/doctor report` | 보고서를 생성합니다. | `mrkdoctor.report` |
| `/doctor dashboard` | 구성된 임베디드 대시보드 주소를 표시합니다. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | 새로운 패시보드 인증서를 생성하고 즉시 활성화하십시오. | `mrkdoctor.dashboard` |
| `/doctor reload` | 구성 값을 다시 로드하십시오. 일부 변경 사항은 여전히 다시 시작해야 합니다. | `mrkdoctor.admin` |

플레이어 체크에 정확한 온라인 플레이어 이름을 사용하십시오. `/doctor dashboard` 에 의해 인쇄된 주소는 구성된 결합 주소를 사용합니다. 원격으로 열 때 `127.0.0.1` 또는 `0.0.0.0` 를 공개 호스트 이름으로 교체하십시오.

최적화된 종이판은 추가로 `/doctor 플러그인을 제공합니다 <plugin>`는 플러그인 요약에 해당한다. 이 명령어는 유니버설에서 사용할 수 없습니다.

`/doctor trace` 는 이 버전에서 사용 가능성 알림을만 표시합니다. 추적을 시작하지 않습니다. 자동 업데이트 또는 롤백 명령어는 없습니다.
