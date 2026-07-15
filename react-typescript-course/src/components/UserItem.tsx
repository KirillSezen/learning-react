import type { FC } from 'react'
import type { IUser } from '../types/types'

interface UserItemProps {
	user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div>
			<div style={{background: 'white', marginTop: '15px', color: 'black', borderRadius: '10px'}}>
					<div>
						User: {user.id}. {user.email} -- {user.name}
					</div>
					<div>
						Address: {user.address.city} -- {user.address.street} -- {user.address.zipcode}
					</div>
				</div>
		</div>
	)
}

export default UserItem