import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('doesnt show previous and next for one page', async () => {
    // Arrange
    const pageNo = 1
    const perPage = 10
    const totalResults = 1
    const setPageNo = vi.fn()

    // Act
    render(
      <Pagination
        pageNo={pageNo}
        perPage={perPage}
        totalResults={totalResults}
        setPageNo={setPageNo}
      />,
    )

    // Assert
    expect(screen.queryByText('Previous')).toBe(null)
    expect(screen.queryByText('Next')).toBe(null)
  })

  it('shows next but not previous on first page', async () => {
    // Arrange
    const pageNo = 1
    const perPage = 10
    const totalResults = 20
    const setPageNo = vi.fn()

    // Act
    render(
      <Pagination
        pageNo={pageNo}
        perPage={perPage}
        totalResults={totalResults}
        setPageNo={setPageNo}
      />,
    )

    // Assert
    expect(screen.queryByText('Previous')).toBe(null)
    expect(await screen.findByText('Next')).toBeInTheDocument()
  })

  it('shows previous but not next on last page', async () => {
    // Arrange
    const pageNo = 2
    const perPage = 10
    const totalResults = 20
    const setPageNo = vi.fn()

    // Act
    render(
      <Pagination
        pageNo={pageNo}
        perPage={perPage}
        totalResults={totalResults}
        setPageNo={setPageNo}
      />,
    )

    // Assert
    expect(screen.queryByText('Next')).toBe(null)
    expect(await screen.findByText('Previous')).toBeInTheDocument()
  })

  it('changes page with previous button', async () => {
    // Arrange
    const pageNo = 2
    const perPage = 5
    const totalResults = 30
    const setPageNo = vi.fn()

    // Act
    render(
      <Pagination
        pageNo={pageNo}
        perPage={perPage}
        totalResults={totalResults}
        setPageNo={setPageNo}
      />,
    )

    const button = await screen.findByText('Previous')
    await userEvent.click(button)

    // Assert
    expect(setPageNo).toHaveBeenCalledWith(1)
  })

  it('changes page with next button', async () => {
    // Arrange
    const pageNo = 1
    const perPage = 5
    const totalResults = 30
    const setPageNo = vi.fn()

    // Act
    render(
      <Pagination
        pageNo={pageNo}
        perPage={perPage}
        totalResults={totalResults}
        setPageNo={setPageNo}
      />,
    )

    const button = await screen.findByText('Next')
    await userEvent.click(button)

    // Assert
    expect(setPageNo).toHaveBeenCalledWith(2)
  })
})
