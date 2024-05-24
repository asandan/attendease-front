import { FC, PropsWithChildren } from "react";
import { Breadcrumb } from "../Breadcrumbs";

export type WithbreadcrumbsProps = {
  href: string;
  label: string;
};

export const WithBreadcrumbs: FC<PropsWithChildren<WithbreadcrumbsProps>> = ({
  children,
  href,
  label,  
}) => {
  return (
    <div className="flex flex-col w-full mt-3 h-full">
      <Breadcrumb
        className="ml-14 text-2xl font-bold pt-3"
        links={[{ href, label }]}
      />
      {children}
    </div>
  );
};
