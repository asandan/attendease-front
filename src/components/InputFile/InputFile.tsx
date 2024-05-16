import { FC, forwardRef, LegacyRef, MutableRefObject, Ref } from "react";
import { Input } from "../ui";
import { HandleMedicalCertificationChange } from "@/shared";
import { Label } from "../ui/label";

export type InputFileProps = {
  handleChange: HandleMedicalCertificationChange;
  ref?: LegacyRef<HTMLInputElement>;
};
export const InputFile: FC<InputFileProps> = forwardRef(
  ({ handleChange }, ref) => {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture" className="font-semibold">
          File
        </Label>
        <Input
          ref={ref}
          id="picture"
          type="file"
          className="cursor-pointer"
          onChange={(file) => handleChange("file", file.target.files![0])}
          accept="image/*"
        />
      </div>
    );
  }
);

InputFile.displayName = "InputFile"

