import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean | string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, error, errorMessage, ...props }, ref) => {
    return (
      <div className="justify-between">
        <input
          type={type}
          id="shadcn-input"
          className={cn(
            `flex h-10 w-full rounded-md border-2 ${
              !!error ? "border-red-600" : ""
            } bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-black dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-800`,
            className
          )}
          ref={ref}
          {...props}
        />
        {Boolean(error) && <p className="text-red-700 text-sm mt-1 ml-1">{errorMessage}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
