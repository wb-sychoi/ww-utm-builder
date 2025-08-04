'use client';

import InputPopover from "../components/InputPopover/InputPopover";
import { campaignInputs } from "../components/InputPopover/constants";
import { handleCreateCampaignName, handleResetCampaignName } from "./handler";
import NameGenerator from "../components/NameGenerator/NameGenerator";


export default function CreateCampaignName() {
  return (
    <>
      <NameGenerator
        id="campaign-name-output"
        label="캠페인명 생성하기"
        example="00.브랜드-AA"
        handleCreate={handleCreateCampaignName}
        handleReset={handleResetCampaignName}
      />
      {campaignInputs.map((input, index) => (
        <InputPopover
          key={index}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          description={input.description}
        />
      ))}
    </>
  );
}
