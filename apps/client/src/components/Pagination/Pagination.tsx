import {
  PaginationNav,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationProps {
  pageNo: number
  perPage: number
  totalPages: number
  setPageNo: (pageNo: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  pageNo,
  perPage,
  totalPages,
  setPageNo,
}) => {
  if (totalPages <= 0) return <></>

  const pageNumbers = new Array(Math.round(totalPages / perPage))
    .fill(0)
    .map((_, idx) => idx + 1)

  return (
    <PaginationNav className="mt-6 ">
      <PaginationContent className="bg-white">
        {pageNo > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setPageNo(pageNo - 1)}
            />
          </PaginationItem>
        )}
        {pageNumbers.slice(pageNo - 1, pageNo + 2).map((pageIdx) => (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={pageNo === pageIdx}
              onClick={() => setPageNo(pageIdx)}
            >
              {pageIdx}
            </PaginationLink>
          </PaginationItem>
        ))}
        {pageNumbers.length > 3 && pageNo < pageNumbers.length - 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {pageNo < pageNumbers.length && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setPageNo(pageNo + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationNav>
  )
}

export default Pagination
