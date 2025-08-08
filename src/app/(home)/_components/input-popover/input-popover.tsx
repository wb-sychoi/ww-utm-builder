"use client";

import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { Label } from "@/core/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/components/ui/popover";

export default function InputPopover(props: {
  id: string;
  label: string;
  placeholder: string;
  description: string;
}) {
  return (
    <div className="flex flex-row gap-3 p-2">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input id={props.id} className="w-50" placeholder={props.placeholder} />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="sm">
            입력가이드
          </Button>
        </PopoverTrigger>
        <PopoverContent>{props.description}</PopoverContent>
      </Popover>
    </div>
  );
}
