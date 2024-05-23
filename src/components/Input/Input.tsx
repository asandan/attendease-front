import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FC, HTMLInputTypeAttribute } from "react";

export type InputWithLabelProps = {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  disabled?: boolean;
  value?: string;
};

export const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  disabled = false,
  ...props
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} disabled={disabled} className="focus-visible:ring-0" />
    </div>
  );
};
