import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correctly ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={15630} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={15630} />);
    expect(wrapper).toMatchSnapshot();
});