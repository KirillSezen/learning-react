import { type FC } from 'react'
import { useEffect, useState } from "react"
import { type IUser } from "../types/types"
import axios from 'axios'
import List from "../components/List"
import UserItem from "../components/UserItem"

const UserPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([])
  

  const fetchUsers = async () => {
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

	 useEffect(() => {
			fetchUsers()
		}, [])


	return (
		<div>
			 <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
		</div>
	)
}

export default UserPage