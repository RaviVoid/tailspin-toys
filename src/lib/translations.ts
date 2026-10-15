const gameTitles: Record<string, string> = {
    'DevOps Dominion': '데브옵스 제국',
    'Pipeline Conquest': '파이프라인 정복전',
    'Server Siege': '서버 공성전',
    'Repo Rulers': '저장소 지배자들',
    'Code Puzzle Chronicles': '코드 퍼즐 연대기',
    'Merge Conflict Mystery': '병합 충돌 미스터리',
    'Bug Buster Brainteaser': '버그 퇴치 두뇌 퍼즐',
    'Stack Trace Secrets': '스택 트레이스의 비밀',
    'Virtual Server Simulator': '가상 서버 시뮬레이터',
    'Container Chaos': '컨테이너 대혼란',
    'Infrastructure Innovator': '인프라 혁신가',
    'Deployment Dynasty': '배포 왕조',
    'Code Quest Odyssey': '코드 퀘스트 대모험',
    'Binary Frontier': '바이너리 프런티어',
    "Digital Debugger's Dream": '디지털 디버거의 꿈',
    'Refactor Realms': '리팩터링 왕국',
    'Script Strike': '스크립트 스트라이크',
    'Terminal Turbulence': '터미널 대소동',
    'Repo Rampart': '저장소 방벽',
    'Syntax Smashdown': '문법 격파전',
    'Cloud Conqueror': '클라우드 정복자',
};

const gameDescriptions: Record<string, string> = {
    'DevOps Dominion': '전략적인 계획과 고도화된 배포 전술이 빠르게 펼쳐지는 코드 전장에서 승리를 이끄세요. 모나와 함께 디지털 전사들을 지휘하고 파이프라인과 마이크로서비스 전투를 헤쳐 나가며, 명령 하나하나로 우위를 차지하세요.',
    'Pipeline Conquest': '예상치 못한 시스템 장애에 맞서 지속적 통합 워크플로를 최적화하세요. 모나와 함께 자동 빌드와 배포 파이프라인을 실시간으로 정비하고 흔들림 없는 승리를 쟁취하세요.',
    'Server Siege': '끊임없는 사이버 위협에 포위된 디지털 요새를 지켜내세요. 모나와 방어 전략을 세우고 로드 밸런서와 버전 관리를 조율해 네트워크 요새를 굳건히 지키세요.',
    'Repo Rulers': '서로 연결된 서버를 장악하려면 날카로운 전술과 능숙한 저장소 관리가 필요합니다. 모나의 안내에 따라 브랜치 보호 규칙을 적용하고 풀 리퀘스트를 관리해 긴박한 전장에서 승리하세요.',
    'Code Puzzle Chronicles': '수수께끼 같은 알고리즘과 난해한 디버깅 임무를 풀어내는 두뇌 퍼즐에 도전하세요. 모나와 함께 실마리를 따라가며 실제 코딩 문제에서 영감을 얻은 논리 퍼즐의 달인이 되어 보세요.',
    'Merge Conflict Mystery': '코드 병합의 미로에서 퍼즐 조각마다 돌파구를 찾아보세요. 모나의 도움으로 오류의 원인을 밝혀내고 복잡한 코드 브랜치의 충돌을 해결해 통합 과정을 매끄럽게 만드세요.',
    'Bug Buster Brainteaser': '실제 디버깅 상황을 본뜬 재치 있는 퍼즐로 분석력을 시험해 보세요. 모나와 함께 숨어 있는 버그를 찾아내고, 명쾌한 해결의 즐거움을 맛보세요.',
    'Stack Trace Secrets': '겹겹이 쌓인 오류 로그를 해독하고 코드 속에 숨은 단서를 찾아내세요. 모나의 안내를 받으며 모든 오류 메시지를 소프트웨어 구조를 완성하는 퍼즐 조각으로 바꿔 보세요.',
    'Virtual Server Simulator': '자원 관리가 생존을 좌우하는 초현실적인 데이터 센터를 운영하세요. 모나와 함께 부하를 분산하고 서버 성능을 최적화해 역동적인 가상 생태계를 지켜내세요.',
    'Container Chaos': '명령 하나로 시스템을 안정시키거나 혼란에 빠뜨릴 수 있는 컨테이너 오케스트레이션의 긴장감을 경험하세요. 모나의 조언을 따라 도커와 확장 가능한 클라우드 서비스의 세계를 헤쳐 나가세요.',
    'Infrastructure Innovator': '튼튼한 네트워크를 처음부터 구축해야 하는 거대한 디지털 생태계에 도전하세요. 모나의 전략을 참고해 가상 환경의 혹독한 부하 테스트도 견뎌내는 시스템을 설계하고 구현하세요.',
    'Deployment Dynasty': '복잡한 시뮬레이션 환경에서 나만의 디지털 제국을 건설하고 운영하세요. 모나의 도움으로 확장, 모니터링, 자동 복구를 익혀 가상 영토를 지켜내세요.',
    'Code Quest Odyssey': '코딩 실력을 길잡이 삼아 마법 같은 디지털 세계를 누비는 장대한 여정을 시작하세요. 모나와 함께 고대 소스 코드의 비밀을 풀고 이야기와 기술이 어우러진 도전을 이겨내세요.',
    'Binary Frontier': '혁신적인 코드가 숨겨진 세계를 여는 미지의 사이버 공간으로 떠나세요. 모나의 안내를 받으며 광활한 디지털 풍경을 탐험하고 코딩의 신비가 깃든 이야기 속에서 새로운 영역을 개척하세요.',
    "Digital Debugger's Dream": '수사 모험과 현실감 넘치는 디버깅을 결합한 몰입형 여정을 경험하세요. 모나와 함께 한 걸음씩 나아갈수록 풀리지 않은 사이버 미스터리의 진실이 드러납니다.',
    'Refactor Realms': '체계적인 코드 개선으로 고대 디지털 문명을 다시 빚어내는 세계를 탐험하세요. 모나의 지도를 받으며 레거시 시스템을 세련된 걸작으로 바꾸고 아름다운 가상 환경을 누비세요.',
    'Script Strike': '키 입력 하나가 치열한 코드 전투의 흐름을 바꾸는 빠른 속도의 전장에 뛰어드세요. 모나와 함께 부대를 이끌고 실시간 도전에서 재치 있는 스크립트 실행 능력을 발휘하세요.',
    'Terminal Turbulence': '순간적인 판단과 정확한 입력이 승부를 가르는 명령줄 대결에 도전하세요. 모나의 디지털 감각을 빌려 혼란스러운 서버 환경에서 재빠르게 대응하세요.',
    'Repo Rampart': '모든 명령으로 소중한 코드 저장소를 지켜내는 박진감 넘치는 방어 임무에 뛰어드세요. 모나와 전략을 세우고 침입을 막아 짜릿한 전투에서 신속하게 대응하세요.',
    'Syntax Smashdown': '빠른 코딩 반사 신경이 폭발적인 디지털 전투의 승패를 가르는 짜릿한 아케이드 게임입니다. 용감한 모나와 함께 오류를 날려 버리고 문법을 최고의 무기로 삼아 최고 점수에 도전하세요.',
    'Cloud Conqueror': '폭풍우 치는 하늘에서 반란을 일으킨 클라우드 서비스를 상대로 긴박한 공중전을 펼치세요. 모나와 함께 비행하며 디지털 적을 따돌리고 가상 세계의 주도권을 되찾으세요.',
};

const categoryNames: Record<string, string> = {
    Strategy: '전략',
    Puzzle: '퍼즐',
    Simulation: '시뮬레이션',
    Adventure: '모험',
    Action: '액션',
};

const publisherNames: Record<string, string> = {
    'CodeForge Studios': '코드포지 스튜디오',
    'DevMasters Inc.': '데브마스터스',
    'GitHub Games': '깃허브 게임즈',
    'Ops Interactive': '옵스 인터랙티브',
};

export function translateGameTitle(title: string): string {
    return gameTitles[title] ?? title;
}

export function translateGameDescription(title: string, description: string): string {
    const translatedDescription = gameDescriptions[title];
    return translatedDescription
        ? `${translatedDescription} 이 게임의 크라우드펀딩을 후원해 주세요!`
        : description;
}

export function translateCategory(name: string): string {
    return categoryNames[name] ?? name;
}

export function translatePublisher(name: string): string {
    return publisherNames[name] ?? name;
}
