import React from 'react';
import {render} from 'react-testing-library';
import Display from '../Display/Display';
import 'jest-dom/extend-expect'

describe("<Display />", () => {

    it('renders the Strikes', () => {
        const {getByTestId} = render(<Display />);
        const title = getByTestId("strikes")
        expect(title).toHaveTextContent(/strikes/i)
    })
    it('renders the Strikes', () => {
        const {getByTestId} = render(<Display />);
        const title = getByTestId("balls")
        expect(title).toHaveTextContent(/balls/i)
    })
})