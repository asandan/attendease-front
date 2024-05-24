import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { FC } from "react";

export type BreadcrumbProps = {
  links: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ links, ...props }) => {
  return (
    <BreadcrumbComponent className={props.className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {links.map((link, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={`${link.href}`}>
                  {link.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index + 1 !== links.length && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbComponent>
  );
};
