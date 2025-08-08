export const handleCreateCampaignName = () => {
  const campaignNameOutput = document.getElementById(
    "campaign-name-output"
  ) as HTMLElement;
  const campaignNumber = document.getElementById(
    "campaign_number"
  ) as HTMLInputElement;
  const campaignTitle = document.getElementById(
    "campaign_title"
  ) as HTMLInputElement;
  const campaignCode = document.getElementById(
    "campaign_code"
  ) as HTMLInputElement;

  campaignNameOutput.textContent = `${campaignNumber.value}.${campaignTitle.value}-${campaignCode.value}`;
};

export const handleResetCampaignName = () => {
  const campaignNameOutput = document.getElementById(
    "campaign-name-output"
  ) as HTMLElement;
  const campaignNumber = document.getElementById(
    "campaign_number"
  ) as HTMLInputElement;
  const campaignTitle = document.getElementById(
    "campaign_title"
  ) as HTMLInputElement;
  const campaignCode = document.getElementById(
    "campaign_code"
  ) as HTMLInputElement;

  campaignNumber.value = "";
  campaignTitle.value = "";
  campaignCode.value = "";

  campaignNameOutput.textContent = "(여기에 출력됩니다)";
};
