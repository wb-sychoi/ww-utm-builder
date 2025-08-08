"use client";

import { Label } from "@/core/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/ui/select";
import { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
}

export default function SelectField(props: SelectFieldProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-row gap-3 p-2 items-center">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]" id={props.id} data-value={value}>
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.options.map((option, index) => (
              <SelectItem key={index} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
