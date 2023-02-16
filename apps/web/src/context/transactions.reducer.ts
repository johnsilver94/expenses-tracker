import { ActionMap, Reducer, Transaction } from '../types'

import { TransactionsState } from './transactions.provider'

// CRUD Create | Read | Update | Delete
export enum Actions {
	GetAll = 'GetAll',
	Create = 'CREATE',
	Read = 'Read',
	Update = 'Update',
	Delete = 'DELETE',
	Error = 'Error'
}

type Payload = {
	[Actions.GetAll]: {
		transactions: Transaction[]
	}
	[Actions.Create]: {
		transaction: Transaction
	}
	[Actions.Delete]: {
		id: string
	}
	[Actions.Update]: {
		id: string
		transaction: Partial<Transaction>
	}
	[Actions.Error]: {
		error: string
	}
}

export type TransactionsActions = ActionMap<Payload>[keyof ActionMap<Payload>]

export type TransactionsReducerType = Reducer<TransactionsState, TransactionsActions>

export const TransactionsReducer: TransactionsReducerType = (state, action) => {
	const { transactions } = state
	const { type, payload } = action
	switch (type) {
		case Actions.GetAll:
			return {
				...state,
				transactions: payload.transactions
			}
		case Actions.Delete:
			return {
				...state,
				transactions: transactions.filter((transaction) => transaction.id !== payload.id)
			}
		case Actions.Create:
			return {
				...state,
				transactions: [...state.transactions, payload.transaction]
			}

		case Actions.Error:
			return {
				...state,
				error: payload.error
			}
		default:
			return state
	}
}
