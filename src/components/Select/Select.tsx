import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC, useState } from "react";
import { Label } from "../ui/label";
import { HandleMedicalCertificationChange } from "@/shared";

export type SelectProps = {
  items: {
    label: string;
    value: string;
  }[];
  label: string;
  value: string | undefined;
  handleChange: HandleMedicalCertificationChange;
};

export const Select: FC<SelectProps> = ({
  items,
  handleChange,
  label,
  value,
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <Label>{label}</Label>
      <SelectComponent
        onValueChange={(value) => handleChange("subjectId", value)}
      >
        <SelectTrigger className="w-full" value={value}>
          <SelectValue placeholder={`Select a ${label.toLowerCase()}`}>
            {value}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectComponent>
    </div>
  );
};
