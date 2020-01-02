import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
        { props.expenseCount === 0 ? (
            <p></p>
        ) : (
            <p>Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
        )
    }
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
       expensesTotal: selectTotalExpenses(visibleExpenses),
       expenseCount: visibleExpenses.length
      };
};

export default connect(mapStateToProps)(ExpenseSummary);