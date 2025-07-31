import * as React from "react";
import { Button } from "@/components/ui/button";
import InputPopover from "../components/InputPopover/InputPopover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

const createAdGroupSchemas = [
  {
    id: "ad_group_number",
    label: "순번",
    placeholder: "00",
    description: "2자리 숫자로 입력해야 하며 첫 시작은 00입니다.",
  },
  {
    id: "ad_group_code",
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
      {createAdGroupSchemas.map((schema, index) => (
        <InputPopover
          key={index}
          id={schema.id}
          label={schema.label}
          placeholder={schema.placeholder}
          description={schema.description}
        />
      ))}
      <div className="flex flex-row gap-3 p-2 items-center">
        <Label htmlFor="ad_group_type">핵심목표</Label>
        <Select>
          <SelectTrigger className="w-[180px]" id="ad_group_type">
            <SelectValue placeholder="필수선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>핵심목표</SelectLabel>
              <SelectItem value="BR">브랜딩</SelectItem>
              <SelectItem value="CV">전환</SelectItem>
              <SelectItem value="LD">리드</SelectItem>
              <SelectItem value="TR">트래픽</SelectItem>
              <SelectItem value="EG">참여</SelectItem>
              <SelectItem value="RT">리타게팅</SelectItem>
              <SelectItem value="PM">프로모션</SelectItem>
              <SelectItem value="MX">혼합</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
