'use client'

import { useState } from 'react'
import Project from '@/components/assets/case/Project'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { CONFIG } from '@/constants/config'
import { projects } from '@/data/projects'
import type { ProjectTypes } from '@/types'

export default function PaginatedProjects() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = CONFIG.APP.PROJECTS_PER_PAGE
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage)

  function handlePreviousClick() {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  function handleNextClick() {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <section className="container case-studies flex-box">
      {currentProjects.map((project: ProjectTypes, index) => (
        <Project
          key={project.id}
          data={project}
          isProjectPage={true}
          index={index}
        />
      ))}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePreviousClick}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => setCurrentPage(page)}
                isActive={currentPage === page}
                className="cursor-pointer">
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={handleNextClick}
              aria-disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  )
}
