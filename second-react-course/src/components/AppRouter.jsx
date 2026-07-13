import { Routes, Route, Navigate} from 'react-router'
import { publicRoutes, privateRoutes } from '../router'
import Navbar from '../UI/Navbar'
import { useContext } from 'react'
import { AuthContext } from '../context'
import Spinner from '../UI/Spinner'

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext)

	if(isLoading) {
		<Spinner/>
	}

	return (
		<div>
			{isAuth && <Navbar/>}

				{isAuth ?
					<Routes>
						{privateRoutes.map(route => 
						<Route path={route.path} Component={route.component} key={route.path}/>
					)}

					<Route path='*' element={<Navigate to='/' replace/>}/>
					</Routes>
					:
					<Routes>
						{publicRoutes.map(route => 
						<Route path={route.path} Component={route.component} key={route.path}/>
						)}

					 <Route path='*' element={<Navigate to='/login' replace/>}/>
					</Routes>
				}
					
		</div>
	)
}

export default AppRouter