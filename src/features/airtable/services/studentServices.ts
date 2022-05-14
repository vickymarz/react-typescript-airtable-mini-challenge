import get from './fetchApi'
import urlencode from 'urlencode'
import { BASE_URL } from './rootEndpoints'
import { STUDENTS_FIELD_ID } from './rootEndpoints'
import { CLASS_FIELD_ID } from './rootEndpoints'

const getStudentDetails = async name => {
	const formular = urlencode(`({Name} = '${name}')`)
	const result = await get(`${BASE_URL}/${STUDENTS_FIELD_ID}/?filterByFormula=${formular}`)
	return result.records
}

const getClassDetails = async name => {
	const classDetails = await getStudentDetails(name)
	let classIds = classDetails.map(classDetail => classDetail.fields.Classes)
	let arr = []
	let result

	classIds.forEach(classId => {
		arr = arr.concat(classId)
	})

	result = await get(`${BASE_URL}/${CLASS_FIELD_ID}/?filterByFormula=${filterByFormula(arr)}`)
	return result.records.map(record => ({
		name: record.fields.Name,
		students: record.fields.Students,
	}))
}

const getStudentsFromClass = async name => {
	const results = await getClassDetails(name)
	let studentList = []
	results.forEach(result => (studentList = [...studentList, ...result.students]))
	studentList = [...new Set(studentList)]
	const studentNames = await get(
		`${BASE_URL}/${STUDENTS_FIELD_ID}/?filterByFormula=${filterByFormula(studentList)}`,
	)

	const studentMap = new Map()
	studentNames.records.forEach(student => {
		studentMap.set(student.id, student.fields.Name)
	})

	results.forEach(result => {
		result.students = result.students.map(id => studentMap.get(id))
	})

	return results
}

const filterByFormula = arr => {
	let formularStr = 'OR('
	arr.forEach((id, index) => {
		formularStr += `RECORD_ID() = '${id}'`
		formularStr += index < arr.length - 1 ? ', ' : ')'
	})
	const formular = urlencode(formularStr)
	return formular
}

export default getStudentsFromClass
