import { FC } from "react";
import { Label } from "../ui/label";
import { Textarea as TextareaComponent } from "../ui/textarea";
import { HandleMedicalCertificationChange } from "@/shared";

export type TextAreaProps = {
  label: string;
  handleChange: HandleMedicalCertificationChange;
};

export const TextArea: FC<TextAreaProps> = ({
  label,
  handleChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <Label>{label}</Label>
      <TextareaComponent
        onChange={(e) => handleChange("description", e.target.value)}
      />
    </div>
  );
};
