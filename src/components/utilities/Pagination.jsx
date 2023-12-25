const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
      scrollTo({
        behavior: 'smooth',
        top: 0
      })
  }

  const handleNextPage = () => {
    if (page >= lastPage) return
    setPage((prev) => prev + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    if (page <= 1) return
    setPage((prev) => prev - 1)
    scrollTop()
  }

  return (
    <div className="flex justify-center items-center gap-5 p-4 text-xl text-warne-primary font-semibold">
        <button onClick={handlePrevPage} className="hover:text-warne-accent transition-all">PREV</button>
        <span>{page} of {lastPage}</span>
        <button onClick={handleNextPage} className="hover:text-warne-accent transition-all">NEXT</button>
    </div>
  )
}

export default Pagination