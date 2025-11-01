import styles from "./Pagination.module.css"

export function Pagination({ currentPage = 1, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const navPages = pages.map(page => (
        <a
            key={page}
            href="#"
            className={currentPage === page ? styles.isActive : ""}
            onClick={(event) => handleChangePage(event, page)}
        >
            {page}
        </a>
    ))

    const handlePrevClick = (event) => {
        event.preventDefault()
        if (!isFirstPage) {
            onPageChange(currentPage - 1)
        }
    }
    const handleNextClick = (event) => {
        event.preventDefault()
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }
    }

    const handleChangePage = (event, page) => {
        event.preventDefault()
        if (page !== currentPage) {
            onPageChange(page)
        }
    }


    return (
        <nav className={styles.pagination}>
            {!isFirstPage && (
                <a onClick={handlePrevClick} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                </svg></a>
            )}
            {navPages}
            {!isLastPage && (<a onClick={handleNextClick} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
                strokeLinecap="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
            </svg></a>)}
        </nav>
    )
}