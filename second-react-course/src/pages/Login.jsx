
const Login = () => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-xl ml-2 font-medium my-5">Страница авторизации</h1>

			<form className="flex flex-col gap-1 ml-1">
				<input className="bg-gray-300 rounded-2xl p-2 w-fit" type="text" placeholder="Введите логин"/>
				<input className="bg-gray-300 rounded-2xl p-2 w-fit" type="password" placeholder="Введите пароль"/>
				<button className="cursor-pointer bg-teal-500 ml-10 w-25 my-2 rounded-xl">Войти</button>
			</form>
		</div>
	)
}

export default Login