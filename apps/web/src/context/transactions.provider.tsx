import { createContext, FC, ReactNode, useReducer } from 'react'
import axios from 'axios'

import { CreateTransaction, Transaction } from '../types'

import { Actions, TransactionsReducer, TransactionsReducerType } from './transactions.reducer'

export type TransactionsState = {
	transactions: Transaction[] | []
	error: string | null
	state: 'loading' | 'error' | 'success' | 'uninitialized'
}

type ITransactionsContext = {
	state: TransactionsState
	getTransactions?: () => Promise<void>
	deleteTransaction?: (id: string) => Promise<void>
	addTransaction?: (transaction: CreateTransaction) => Promise<void>
}

const initialState: TransactionsState = {
	transactions: [],
	error: null,
	state: 'uninitialized'
}

export const TransactionsContext = createContext<ITransactionsContext>({ state: initialState })

export const TransactionsProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer<TransactionsReducerType>(TransactionsReducer, initialState)

	const getTransactions = async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/v1/transactions')

			dispatch({
				type: Actions.GetAll,
				payload: { transactions: res.data }
			})
		} catch (error: any) {
			dispatch({
				type: Actions.Error,
				payload: error.message
			})
		}
	}

	const deleteTransaction = async (id: string) => {
		try {
			await axios.delete(`http://localhost:5000/api/v1/transactions/${id}`)
			dispatch({
				type: Actions.Delete,
				payload: { id }
			})
		} catch (error: any) {
			dispatch({
				type: Actions.Error,
				payload: error.message
			})
		}
	}

	const addTransaction = async (transaction: CreateTransaction) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('http://localhost:5000/api/v1/transactions', transaction, config)

			dispatch({
				type: Actions.Create,
				payload: { transaction: res.data }
			})
		} catch (error: any) {
			dispatch({
				type: Actions.Error,
				payload: error.message
			})
		}
	}

	return (
		<TransactionsContext.Provider value={{ state, getTransactions, deleteTransaction, addTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}
