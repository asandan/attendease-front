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
import {
  AppState,
  AppSubStates,
  HandleMedicalCertificationChange,
  MedicalCertificationAdminState,
  MedicalCertificationState,
} from "@/shared";
import { getConditionalColor } from "./getConditionalColor";

export type SelectProps = {
  items: {
    label: string;
    value: string;
  }[];
  label: string;
  value: string | undefined;
  state: AppSubStates;
  disabled?: boolean;
  width?: string;
  containerWidth?: string;
  withTopLabel?: boolean;
  defaultValue?: string;
  handleChange:
    | HandleMedicalCertificationChange
    | ((name: string, status: string) => void);
  paintItems?: (criteria: any) => string;
};

export const Select: FC<SelectProps> = ({
  items,
  handleChange,
  label,
  value,
  state,
  containerWidth = "w-full",
  width = "w-full",
  withTopLabel = true,
  defaultValue = "",
  disabled = false,
  paintItems,
}) => {
  const valueColor = getConditionalColor(
    paintItems,
    value || defaultValue,
    "font-semibold"
  );
  const placeholder = `Select ${label.toLowerCase()}`;
  return (
    <div className={`${containerWidth} flex flex-col gap-1.5`}>
      {withTopLabel && <Label>{label}</Label>}
      <SelectComponent
        onValueChange={(value) => handleChange(state, value)}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        <SelectTrigger className={`${width} self-end`}>
          <SelectValue placeholder={placeholder}>
            <span className={valueColor}>{value || placeholder}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {items.map((item) => {
              const color = paintItems
                ? `font-semibold ${paintItems(item.label)}`
                : "";
              return (
                <SelectItem key={item.value} value={item.value}>
                  <span className={color}>{item.label}</span>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </SelectComponent>
    </div>
  );
};
