import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HandleMedicalCertificationChange } from "@/shared";
import { FC } from "react";

export type InputFileProps = {
  handleChange: HandleMedicalCertificationChange;
};

export const InputFile: FC<InputFileProps> = ({ handleChange }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">File</Label>
      <Input
        id="picture"
        type="file"
        className="cursor-pointer"
        onChange={(file) => handleChange("file", file.target.files![0])}
        accept="image/*"
      />
    </div>
  );
};
