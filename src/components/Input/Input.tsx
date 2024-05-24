import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppSubStates, HandleChange } from "@/shared";
import { FC, FocusEvent, HTMLInputTypeAttribute } from "react";

export type InputWithLabelProps = {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  state?: AppSubStates;
  placeholder: string;
  disabled?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  error?: boolean | string;
  errorMessage?: string;
  handleChange: HandleChange;
  handleBlur?: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
};

export const InputWithLabel: FC<InputWithLabelProps> = ({
  label,
  disabled = false,
  state,
  handleChange,
  handleBlur,
  ...props
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id}>{label}</Label>
      <Input
        onChange={(value) => state && handleChange(state, value.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
        className="focus-visible:ring-0"
        {...props}
      />
    </div>
  );
};
