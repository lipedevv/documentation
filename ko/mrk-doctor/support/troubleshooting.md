---
description: "일반적인 문제들에 대한 실제적인 검진"
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# 문제 해결

<a id="plugin-will-not-start"></a>
## 플러그인은 시작되지 않습니다

올바른 에디션과 한 개의 MRK Doctor JAR만 설치한 것을 확인합니다. 서버의 Java 요구 사항, 자유 디스크 공간, 파일 권한 및 첫 번째 관련 콘솔 오류를 확인합니다. 문제를 수정한 후에 정상적으로 다시 시작하십시오.

<a id="server-is-lagging-or-shows-errors"></a>
## 서버가 지연하거나 오류를 표시하고 있습니다

Record when the issue began. Check `/doctor status`, open incidents, and recent changes. Review the affected plugin's console errors, then [create a report](../reports/creating-reports.md). Test one reversible change at a time using a backup.

<a id="dashboard-will-not-connect"></a>
## 대시보드는 연결되지 않습니다

MRK Doctor가 활성화 된 것을 확인하고 구성된 임베디드 대시보드 주소를 열십시오. 결합 주소를 확인하고, 단일 호스팅 할당, 방화벽, 프록시 경로 및 구성된 포트를 확인합니다. 새로 생성된 토큰은 즉시 활성화됩니다. 보안을 비활성화하거나 제한없는 포트를 해결 방법으로 노출하지 마십시오.

<a id="a-player-cannot-use-a-command"></a>
## 플레이어는 명령어를 사용할 수 없습니다.

정확한 명령어, 플레이어의 권한, 세계 제한 및 소유 플러그인의 구성을 확인하십시오. [권한 확인을 따라](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## 기억은 계속 증가합니다.

시간 간 사용량을 관찰하고 플레이어 활동과 비교하십시오. 높은 읽기만 있으면 누출이나 플러그인 소유의 증거가 아닙니다. 더 자세한 정보가 필요할 때 서버의 지원되는 프로필 도구를 사용하십시오.

<a id="reports-or-history-are-unavailable"></a>
## 보고나 역사 자료가 없습니다

무료 디스크 공간 및 `plugins/MRKDoctor/`의 읽기/쓰기 권한을 확인합니다. 복구 시도 전에 서버를 중지하고 전체 폴더를 백업하십시오. 확인된 백업 없이 문제를 해결하기 위해 데이터 파일을 삭제하지 마십시오.

<a id="monitoring-overhead-seems-high"></a>
## 감시 대비가 높다고 보입니다

모니터링 간격을 기본으로 되돌려 놓고 불필요한 대규모 텍스트 파일을 추적하지 말고 비슷한 부하에서 성능을 비교하십시오. 계속되면, 관련 로그 및 설정을 [지원](../../support.md), 인증 없이 보내십시오.
