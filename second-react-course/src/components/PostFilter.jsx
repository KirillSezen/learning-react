
const PostFilter = ({filter, setFilter}) => {


	return(
		<div>
        <input className="p-2 m-10 bg-gray-200 w-fit border-teal-500 border-2 rounded-2xl" placeholder="Поиск: " type="text" value={filter.query} onChange={event => setFilter({...filter, query: event.target.value})}/>

        <select value={filter.sort} onChange={event => setFilter({...filter, sort: event.target.value})}>
          
          <option disabled value=''>Сортировка</option>
          <option value='title'>По названию</option>
          <option value='body'>По описанию</option>

        </select>
      </div>
	)
}

export default PostFilter