export const campaignInputs = [
  {
    id: "campaign_number",
    label: "순번",
    placeholder: "00",
    description: "2자리 숫자로 입력해야 하며 첫 시작은 00입니다.",
  },
  {
    id: "campaign_name",
    label: "캠페인명",
    placeholder: "{아이템}_{아이템}_...",
    description:
      "캠페인 주제에 해당하는 내용을 설정하고 띄어쓰기가 필요할 경우 언더바 _ 로 설정해야 합니다. (띄어쓰기 금지)",
  },
  {
    id: "campaign_code",
    label: "코드",
    placeholder: "AA, AB, BA, CA, ...",
    description:
      "고유한 코드값이 설정되어야 하며 A-Z까지 두자리로 설정해야 합니다. 수량이 많은 경우 Z다음에 0-9까지 사용 가능합니다.",
  },
];

export const adGroupInputs = [
  {
    id: "ad_group_number",
    label: "순번",
    placeholder: "00",
    description: "2자리 숫자로 입력해야 하며 첫 시작은 00입니다.",
  },
  {
    id: "ad_group_campaign_code",
    label: "캠페인 코드 자동 추출",
    placeholder: "예: 00.브랜드-AA",
    description: "위에서 생성된 캠페인명이 자동으로 입력됩니다.",
  },
  {
    id: "ad_group_name",
    label: "광고그룹명",
    placeholder: "{아이템}_{아이템}_...",
    description:
      "광고그룹과 관련된 내용을 설정하고 띄어쓰기가 필요할 경우 언더바 _ 로 설정해야 합니다. (띄어쓰기 금지)",
  },
];
