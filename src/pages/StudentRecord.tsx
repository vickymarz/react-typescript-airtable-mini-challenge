import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/students/student'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import Button from '../components/Button'

type RecordProp = {
	name: string
	students: any[]
}

const StudentRecord = () => {
	const dispatch = useAppDispatch()
	const recordList = useAppSelector(selectRecords)
	const navigate = useNavigate()

	const handleClick = () => {
		dispatch(logout())
		navigate('/')
	}
	return (
		<>
			<Button type='button' className={styles.button} onClick={handleClick}>
				Logout
			</Button>
			<ul className={styles.recordList}>
				{recordList
					.sort(
						(a: { name: string }, b: { name: string }) =>
							Number(a.name.split(' ')[1]) - Number(b.name.split(' ')[1]),
					)
					.map((record: RecordProp, id: string) => (
						<li key={id} className={styles.records}>
							<p>
								<strong>Name</strong> <br />
								{record.name}
							</p>
							<br />
							<p>
								<strong>Students</strong> <br />
								{record.students.map((element, id) => (
									<span key={id}> {element} </span>
								))}
							</p>
						</li>
					))}
			</ul>
		</>
	)
}

export default StudentRecord
