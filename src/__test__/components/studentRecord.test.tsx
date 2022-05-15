import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import StudentRecord from '../../pages/StudentRecord'
import { BrowserRouter } from 'react-router-dom'

test('expect component to render correctly', () => {
	const records = render(
		<BrowserRouter>
			<Provider store={store}>
				<StudentRecord />
			</Provider>
		</BrowserRouter>,
	)
	expect(records).toMatchSnapshot()
})
