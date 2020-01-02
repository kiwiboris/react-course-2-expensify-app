import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with empty message', () => {
    const wrapper = shallow(<ExpenseSummary />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with all expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={200} />);
    expect(wrapper).toMatchSnapshot();
});