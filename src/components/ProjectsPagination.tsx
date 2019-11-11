import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface ProjectsPaginationProps {
  projects: {
    title: string;
    tags: string[];
    src: string;
    features: string[];
    github: string;
    demo: string;
    note?: string;
    testAccount?: { username: string; password: string };
  }[];
  currentPage: number;
  handPageClick: (page: number) => void;
  projectsPerPage: number;
}
const ProjectsPagination = ({
  projects,
  currentPage,
  handPageClick,
  projectsPerPage
}: ProjectsPaginationProps) => {
  console.log('currentPage ', currentPage);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className='mt-auto mx-auto flex-wrap' size='lg'>
      <PaginationItem disabled={currentPage === pageNumbers[0]}>
        <PaginationLink first onClick={() => handPageClick(pageNumbers[0])} />
      </PaginationItem>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink
          previous
          onClick={() => handPageClick(currentPage - 1)}
        />
      </PaginationItem>
      {pageNumbers.map(pN => (
        <PaginationItem active={pN === currentPage} key={pN}>
          <PaginationLink onClick={() => handPageClick(pN)}>
            {pN}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={currentPage === pageNumbers[pageNumbers.length - 1]}>
        <PaginationLink next onClick={() => handPageClick(currentPage + 1)} />
      </PaginationItem>
      <PaginationItem
        disabled={currentPage === pageNumbers[pageNumbers.length - 1]}>
        <PaginationLink
          last
          onClick={() => handPageClick(pageNumbers[pageNumbers.length - 1])}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default ProjectsPagination;
