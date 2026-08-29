---
description: "패시보드에 대한 호스팅 할당을 준비하세요."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Pterodactyl 호스팅

서버 패널에서 사용 가능한 `7854`와 같은 할당을 선택하고 `doctor.dashboard.port` 를 해당 포트에 설정합니다. 별도의 웹 애플리케이션이나 두 번째 할당이 필요하지 않습니다.

호스팅 네트워크가 요구하는 뱅드 주소를 사용하세요. 컨테이너의 로컬호스트 주소는 별도의 컨테이너에서 액세스할 수 없습니다. 호스트가 `0.0.0.0`를 필요로 하는 경우, 액세스 권한을 활성화하기 전에 방화벽 또는 보안 프록시에 의해 할당된 것이 보호되어 있는지 확인하십시오.

웹 패시보드는 플러그인이 직접 서비스한다. [초기 설정을 따라](initial-setup.md), 뱅 주소 또는 포트를 변경한 후 다시 시작하고, 할당된 주소를 사용하여 페이지를 테스트하십시오.

{% hint style="warning" %}
연결 문제를 해결하기 위해 제한없는 포트를 열지 마십시오. 만약 당신의 계획은 할당을 선택하거나 노출시키지 않는다면, 호스팅 제공업체는 입력 패시보드 포트를 접근할 수 있습니다. 플러그인은 호스트 방화벽을 우회할 수 없습니다.
{% endhint %}
