export const handleCreateAdGroupName = () => {
  const adGroupNameOutput = document.getElementById(
    "ad-group-name-output"
  ) as HTMLElement;
  const adGroupNumber = document.getElementById(
    "ad_group_number"
  ) as HTMLInputElement;
  const adGroupCode = document.getElementById(
    "ad_group_campaign_code"
  ) as HTMLInputElement;
  const adGroupTitle = document.getElementById(
    "ad_group_title"
  ) as HTMLInputElement;
  const adGroupObjective = document.getElementById(
    "ad_group_objective"
  ) as HTMLSelectElement;
  const adGroupOperationType = document.getElementById(
    "ad_group_operation_type"
  ) as HTMLSelectElement;
  const adGroupDevice = document.getElementById(
    "ad_group_device"
  ) as HTMLSelectElement;
  const adGroupMediaType = document.getElementById(
    "ad_group_media_type"
  ) as HTMLSelectElement;

  const getSelectValue = (element: HTMLElement) => {
    return element.getAttribute("data-value") || "";
  };

  adGroupNameOutput.textContent = `${adGroupNumber.value}.${
    adGroupCode.value
  }-${adGroupTitle.value}-${getSelectValue(adGroupObjective)}-${getSelectValue(
    adGroupOperationType
  )}-${getSelectValue(adGroupDevice)}-${getSelectValue(adGroupMediaType)}`;
};

export const handleResetAdGroupName = () => {
  const adGroupNameOutput = document.getElementById(
    "ad-group-name-output"
  ) as HTMLElement;
  const adGroupNumber = document.getElementById(
    "ad_group_number"
  ) as HTMLInputElement;
  const adGroupCode = document.getElementById(
    "ad_group_campaign_code"
  ) as HTMLInputElement;
  const adGroupTitle = document.getElementById(
    "ad_group_title"
  ) as HTMLInputElement;
  const adGroupObjective = document.getElementById(
    "ad_group_objective"
  ) as HTMLSelectElement;
  const adGroupOperationType = document.getElementById(
    "ad_group_operation_type"
  ) as HTMLSelectElement;
  const adGroupDevice = document.getElementById(
    "ad_group_device"
  ) as HTMLSelectElement;
  const adGroupMediaType = document.getElementById(
    "ad_group_media_type"
  ) as HTMLSelectElement;

  adGroupNumber.value = "";
  adGroupCode.value = "";
  adGroupTitle.value = "";

  adGroupObjective.setAttribute("data-value", "");
  adGroupOperationType.setAttribute("data-value", "");
  adGroupDevice.setAttribute("data-value", "");
  adGroupMediaType.setAttribute("data-value", "");

  adGroupNameOutput.textContent = "(여기에 출력됩니다)";
};
