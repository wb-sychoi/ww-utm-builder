const adGroupObjectives = [
  {
    label: "브랜딩",
    value: "BR",
  },
  {
    label: "전환",
    value: "CV",
  },
  {
    label: "리드",
    value: "LD",
  },
  {
    label: "트래픽",
    value: "TR",
  },
  {
    label: "참여",
    value: "EG",
  },
  {
    label: "리타게팅",
    value: "RT",
  },
  {
    label: "프로모션",
    value: "PM",
  },
  {
    label: "혼합",
    value: "MX",
  },
];

const adGroupOperationTypes = [
  {
    label: "상시",
    value: "A",
  },
  {
    label: "일시",
    value: "T",
  },
  {
    label: "정기",
    value: "R",
  },
];

const adGroupDevices = [
  {
    label: "전체",
    value: "A",
  },
  {
    label: "모바일",
    value: "M",
  },
  {
    label: "데스크탑",
    value: "p",
  },
  {
    label: "테블릿",
    value: "T",
  },
  {
    label: "영상기기(TV)",
    value: "V",
  },
];

const adGroupMediaTypes = [
  {
    label: "네이버 파워링크",
    value: "NSPW",
  },
  {
    label: "네이버 쇼핑검색",
    value: "NSSP",
  },
  {
    label: "네이버 브랜드검색",
    value: "NSBR",
  },
  {
    label: "네이버 파워콘텐츠",
    value: "NSPC",
  },
  {
    label: "네이버 플레이스",
    value: "NSPL",
  },
  {
    label: "구글 검색",
    value: "GGSA",
  },
  {
    label: "구글 디스플레이",
    value: "GGDA",
  },
  {
    label: "구글 디멘드젠",
    value: "GGDG",
  },
  {
    label: "구글 동영상",
    value: "GGVA",
  },
  {
    label: "구글 PMAX",
    value: "GGPX",
  },
  {
    label: "메타 인지도",
    value: "MTAR",
  },
  {
    label: "메타 트래픽",
    value: "MTTR",
  },
  {
    label: "메타 참여",
    value: "MTEG",
  },
  {
    label: "메타 리드",
    value: "MTLD",
  },
  {
    label: "메타 앱 홍보",
    value: "MTAP",
  },
  {
    label: "메타 판매",
    value: "MTSL",
  },
  {
    label: "크리테오 신규 트래픽",
    value: "CTCA",
  },
  {
    label: "크리테오 리타겟팅",
    value: "CTRT",
  },
];

export const adGroupSelects = [
  {
    id: "ad_group_objective",
    label: "핵심목표",
    placeholder: "필수선택",
    options: adGroupObjectives,
  },
  {
    id: "ad_group_operation_type",
    label: "운영방식",
    placeholder: "필수선택",
    options: adGroupOperationTypes,
  },
  {
    id: "ad_group_device",
    label: "디바이스",
    placeholder: "필수선택",
    options: adGroupDevices,
  },
  {
    id: "ad_group_media_type",
    label: "매체/유형",
    placeholder: "필수선택",
    options: adGroupMediaTypes,
  },
];
