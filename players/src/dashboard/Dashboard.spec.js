import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Dashboard from '../Dashboard/Dashboard';
import 'jest-dom/extend-expect'

describe("<Dashboard />", () => {
    describe('Strike button', () => {
        it("Fires strike event", () => {
            const {getByText} = render(<Dashboard/>);
            const strikeButton = getByText(/Strike/i);
            fireEvent.click(strikeButton);
        })
    })
    describe('Ball button', () => {
        it("Fires ball event", () => {
            const {getByText} = render(<Dashboard/>);
            const ballButton = getByText(/ball/i);
            fireEvent.click(ballButton);
        })
    })
    describe('Foul button', () => {
        it("Fires foul event", () => {
            const {getByText} = render(<Dashboard/>);
            const foulButton = getByText(/foul/i);
            fireEvent.click(foulButton);
        })
    })
    describe('Hit button', () => {
        it("Fires hit event", () => {
            const {getByText} = render(<Dashboard/>);
            const hitButton = getByText(/hit/i);
            fireEvent.click(hitButton);
        })
    })
})