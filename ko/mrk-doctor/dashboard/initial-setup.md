---
description: "웹 패시보드에 안전한 접근을 설정합니다."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# 래시보드를 연결

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### 자격증을 작성
`/doctor dashboard setup` 를 운영자로 실행하고 표시된 토큰을 즉시 복사하고 안전하게 저장합니다.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### 주소 설정
`plugins/MRKDoctor/config.yml`에서, `doctor.dashboard.port` 를 할당된 포트에 설정합니다. 기본 `0.0.0.0` 결합은 서버 할당에서 듣습니다. 동일한 호스트에서 역 프록시가 유일한 직접 클라이언트일 때 `127.0.0.1` 로 변경합니다.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### 임베디드 데시보드를 열
브라우저에서 `http://SERVER_ADDRESS:PORT` 를 열고 토큰을 입력합니다. 패시보드 UI, API 및 자동 업데이트는 이 단일 구성 포트를 사용합니다.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### 연결 설정 변경 후만 다시 시작
새로 생성된 토큰은 즉시 활성화됩니다. Minecraft 서버는 결합 주소, 포트 또는 활성화 된 상태를 변경한 후에만 다시 시작됩니다.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
공중 인터넷에서 진단 포트를 보호받지 않은 상태로 두지 마십시오. 신뢰할 수 있는 역임 대리인 TLS및 방화벽으로 원격 액세스 보호. 웹 출처 설정을 인증의 대가로 취급하지 마십시오.
{% endhint %}

다른 토큰을 생성하면 즉시 자격증을 대체합니다. 신 신탁 브라우저를 새로운 토큰으로 업데이트합니다. [Pterodactyl](pterodactyl.md) 및 [보안](security.md)참조하십시오.
