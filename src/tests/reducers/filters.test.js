import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set up sortBy to date', () => {
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(currState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SET_TEXT',
        text: 'New text'
    };
    const state = filtersReducer(currState, action);
    expect(state).toEqual({
        ...currState,
        text: action.text
    });
});

test('should set start date', () => {
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0).add(4, 'month')
    };
    const state = filtersReducer(currState, action)
    expect(state).toEqual({
        ...currState,
        startDate: action.startDate
    })
});

test('should set end date', () => {
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0).add(4, 'month')
    };
    const state = filtersReducer(currState, action)
    expect(state).toEqual({
        ...currState,
        endDate: action.endDate
    })
});