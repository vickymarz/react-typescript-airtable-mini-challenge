import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../../app/store'
import StudentRecord from '../../pages/StudentRecord'

	test('expect rockets component to render correctly', () => {
		const records = render(
			<Provider store={store}>
				<StudentRecord />
			</Provider>,
		)
		expect(records).toMatchSnapshot()
	})
