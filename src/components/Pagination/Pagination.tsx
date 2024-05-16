import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { HandleMedicalCertificationChange } from "@/shared";
import { FC } from "react";

export type PaginationProps = {
  totalPages: number;
  activePage: number;
  handleChange: HandleMedicalCertificationChange;
};

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  activePage,
  handleChange,
}) => {
  console.log(activePage);
  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handleChange("activePage", activePage - 1)}
            className="w-[100px]"
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => {
          const currentPage = i + 1;
          return (
            <PaginationItem
              key={i}
              onClick={() => handleChange("activePage", currentPage)}
            >
              <PaginationLink href="#" isActive={currentPage === activePage}>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handleChange("activePage", activePage + 1)}
            className="w-[100px]"
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};
