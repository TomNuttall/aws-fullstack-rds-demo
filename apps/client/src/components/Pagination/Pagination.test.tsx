import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('doesnt show previous and next for one page', async () => {
    // Arrange
    const pageNo = 1
    const perPage = 10
    const totalPages = 1
    const setPageNo = vi.fn()

    // Act
    render(
      <Pagination
        pageNo={pageNo}
        perPage={perPage}
        totalPages={totalPages}
        setPageNo={setPageNo}
      />,
    )

    // Assert
    expect(screen.queryByText('Previous')).toBe(null)
    expect(screen.queryByText('Next')).toBe(null)
  })
})
