import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FC } from "react";
import { Label } from "@/components/ui/label";
import { AppSubStates, HandleChange } from "@/shared";

export type DatePickerProps = {
  date: Date | undefined;
  handleChange: HandleChange;
  label: string;
  state: AppSubStates;
  isValid?: boolean;
  errorMessage?: string;
};

export const DatePicker: FC<DatePickerProps> = ({
  date,
  handleChange,
  label,
  state,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="date" className="self-start">
            {label}
          </Label>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date && date instanceof Date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            handleChange(state, date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
