import { useRoutes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import StudentRecord from './pages/StudentRecord'

function App() {
	type IRoute = {
		path: string
		element: React.ReactNode
	}[]

	const routes: IRoute = [
		{ path: '/', element: <Homepage /> },
		{ path: '/records', element: <StudentRecord /> },
	]

	const elements = useRoutes([...routes])

	return elements
}

export default App
