import {
  PaginationNav,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationProps {
  pageNo: number
  perPage: number
  totalResults: number
  setPageNo: (pageNo: number) => void
}

const NUM_PAGES = 5

const Pagination: React.FC<PaginationProps> = ({
  pageNo,
  perPage,
  totalResults,
  setPageNo,
}) => {
  if (totalResults <= 0) return <></>

  const totalPages = Math.round(totalResults / perPage)
  const pageNumbers = new Array(totalPages).fill(0).map((_, idx) => idx + 1)
  const maxOffset = totalPages - NUM_PAGES

  let offset = 0
  if (pageNo >= NUM_PAGES) {
    if (pageNo > maxOffset) {
      offset = maxOffset
    } else {
      offset = pageNo - 3
    }
  }
  const activePages = pageNumbers.slice(offset, offset + NUM_PAGES)

  return (
    <PaginationNav className="mt-12">
      <PaginationContent>
        {pageNo > 1 && (
          <PaginationItem key="pagination-prev">
            <PaginationPrevious
              href="#"
              onClick={() => setPageNo(pageNo - 1)}
            />
          </PaginationItem>
        )}
        {activePages.map((pageIdx) => (
          <PaginationItem key={`pagination-page-${pageIdx}`}>
            <PaginationLink
              href="#"
              isActive={pageNo === pageIdx}
              onClick={() => setPageNo(pageIdx)}
              aria-label={`Go to page ${pageIdx}`}
            >
              {pageIdx}
            </PaginationLink>
          </PaginationItem>
        ))}
        {pageNo < totalPages && (
          <PaginationItem key="pagination-next">
            <PaginationNext href="#" onClick={() => setPageNo(pageNo + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationNav>
  )
}

export default Pagination
