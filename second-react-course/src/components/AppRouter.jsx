import { Routes, Route, Navigate} from 'react-router'
import { publicRoutes, privateRoutes } from '../router'

const AppRouter = () => {
	const isAuth = true

	return (

		<div>
			<Routes>
				{isAuth ?
					privateRoutes.map(route => 
						<Route path={route.path} Component={route.component}/>
					)
					:
					publicRoutes.map(route => 
						<Route path={route.path} Component={route.component}/>
					)   
				}
					 <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
		</div>
	)
}

export default AppRouter