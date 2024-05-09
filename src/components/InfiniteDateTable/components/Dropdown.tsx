import { Button } from "@/components/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FC } from "react";

export type DropdownProps = {
  items: any[];
  title: string;
  buttonTitle: string;
  onChange: (w: number) => void
}

export const Dropdown: FC<DropdownProps> = ({ items, onChange, title, buttonTitle }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-24 h-8 dark:bg-black">{buttonTitle}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        {items.map((el: any, i) =>
          <DropdownMenuItem onClick={() => onChange(el)} key={i}>
            <span>{el}</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu >
  )
};