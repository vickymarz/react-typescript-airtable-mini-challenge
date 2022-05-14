import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../css/homepage.module.css'
import { getStudent } from '../redux/students/student'
import { useAppSelector, useAppDispatch } from '../app/hooks'

// type LinkProps = {
// 	to: React.AnchorHTMLAttributes<HTMLAnchorElement>
// }

const Homepage = () => {
	const [name, setName] = useState('')
	const dispatch = useAppDispatch()
	const recordList = useAppSelector(selectRecords)

	const handleSubmit = () => {
		if (name.trim() !== '') dispatch(getStudent(name))
	}

	return (
		<section className={styles.inputDetails}>
			<div className={styles.studentInput}>
				<form>
					<label htmlFor='student'>Student Name:</label>
					<Input
						type='text'
						name='student'
						id='student'
						value={name}
						onChange={e => setName(e.target.value)}
					/>

					<Button type='submit' onClick={handleSubmit}>
						<Link to={name.trim() !== '' && '/records'} state={recordList}>
							Login
						</Link>
					</Button>
				</form>
			</div>
		</section>
	)
}

export default Homepage
