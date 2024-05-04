import { Button } from "@/components/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FC } from "react";

export type WeekDropdownProps = {
  items: any[];
  onChange: (w: number) => void
}

export const WeekDropdown: FC<WeekDropdownProps> = ({ items, onChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-24 h-8 dark:bg-black">Select week</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Weeks</DropdownMenuLabel>
        {items.map((el: any, i) =>
          <DropdownMenuItem onClick={() => onChange(el)} key={i}>
            <span>{el}</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu >
  )
};