export default function Pagination (array) {
    const pageNumbers = array.map(number => {
     return <li key={number} className="page-item"><a href="!#" className="page-link">{number}</a></li>
  })
  console.log(pageNumbers)
    return (
    <section className="pagination-container">
      <ul className="pagination">{pageNumbers}</ul>
    </section>
  )
}