import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../css/homepage.module.css'
import { getStudent } from '../redux/students/student'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const Homepage = () => {
	const [name, setName] = useState('')
	const dispatch = useDispatch()
	const recordList = useSelector(state => state.records, shallowEqual)

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
