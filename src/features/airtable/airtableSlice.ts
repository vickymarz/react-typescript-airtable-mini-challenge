import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import getStudentsFromClass from './services/studentServices' 

const GET_STUDENT = 'mini-extension/student/GET_STUDENT'
// const LOGOUT = 'mini-extension/student/LOGOUT'

export type RecordState = {
	records: any[]
}

const initialState: RecordState = {
	records: [],
}

export const getStudentsList = createAsyncThunk(GET_STUDENT, async (name: string) => {
	const result = await getStudentsFromClass(name)
	return result
})

export const airtableSlice = createSlice({
	name: 'records',
	initialState,
	
	reducers: {
		getStudent: (state, action: PayloadAction<string>) => {
			const { payload } = action
			state.records = [...state.records, ...payload]
		},
		logout: (state) => {
			state.records = []
		}
	},
	
})

export const { getStudent, logout } = airtableSlice.actions

export const recordList = (state: RootState) => state.records

export default airtableSlice.reducer
