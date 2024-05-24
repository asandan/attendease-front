import { FC } from "react";
import { Label } from "../ui/label";
import { Textarea as TextareaComponent } from "../ui/textarea";
import { HandleChange } from "@/shared";

export type TextAreaProps = {
  label: string;
  handleChange: HandleChange;
  value: string;
};

export const TextArea: FC<TextAreaProps> = ({ label, handleChange, value }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <Label>{label}</Label>
      <TextareaComponent
        value={value}
        onChange={(e) => handleChange("description", e.target.value)}
      />
    </div>
  );
};
