export const handleCreateCampaignName = () => {
    const campaignNameOutput = document.getElementById("campaign-name-output")  as HTMLElement;
    const campaignNumber = document.getElementById("campaign_number") as HTMLInputElement;
    const campaignName = document.getElementById("campaign_name") as HTMLInputElement;
    const campaignCode = document.getElementById("campaign_code") as HTMLInputElement;
  
    campaignNameOutput.textContent = `${campaignNumber.value}.${campaignName.value}-${campaignCode.value}`;
  };
  
export const handleResetCampaignName = () => {
    const campaignNameOutput = document.getElementById("campaign-name-output")  as HTMLElement;
    const campaignNumber = document.getElementById("campaign_number") as HTMLInputElement;
    const campaignName = document.getElementById("campaign_name") as HTMLInputElement;
    const campaignCode = document.getElementById("campaign_code") as HTMLInputElement;
  
    campaignNumber.value = "";
    campaignName.value = "";
    campaignCode.value = "";
  
    campaignNameOutput.textContent = "(여기에 출력됩니다)";
  };