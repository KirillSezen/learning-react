import { getPagesArray } from "../utils/pages"

const Pagination = ({totalPages, changePage}) => {
  let pagesArray = getPagesArray(totalPages)

	return (
		 <div className="flex flex-row">
        {pagesArray.map(p => 
        <button key={p} onClick={() => changePage(p)} className="cursor-pointer bg-teal-500 ml-2 mx-0.5 w-full my-2 rounded-xl border-2 border-teal-500 ">{p}</button>
      )}
      </div>
	)
}

export default Pagination