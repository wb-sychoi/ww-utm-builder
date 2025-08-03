import * as React from "react";
import { Button } from "@/components/ui/button";
import InputPopover from "../components/InputPopover/InputPopover";
import { adGroupInputs } from "../components/InputPopover/constants";
import SelectField from "../components/SelectField/SelectField";
import { adGroupSelects } from "../components/SelectField/constants";

export default function CreateAdGroupName() {
  return (
    <>
      <div className="flex flex-row gap-3 p-2 items-center">
        <div className="text-lg font-semibold">광고그룹명 생성하기</div>
        <small className="text-sm leading-none font-medium">
          예: 00.AA-자사몰_일반-BR-A-M-NSPW
        </small>
        <Button size="sm">생성하기</Button>
        <p>(여기에 출력됩니다)</p>
      </div>
      {adGroupInputs.map((input, index) => (
        <InputPopover
          key={index}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          description={input.description}
        />
      ))}
      <div className="flex flex-row gap-3 p-2 items-center">
        {adGroupSelects.map((select, index) => (
          <SelectField
            key={index}
            id={select.id}
            label={select.label}
            placeholder={select.placeholder}
            options={select.options}
          />
        ))}
      </div>
    </>
  );
}
