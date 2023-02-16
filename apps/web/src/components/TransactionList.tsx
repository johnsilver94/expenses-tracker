import { useContext, useEffect } from 'react'

import { TransactionsContext } from '../context/transactions.provider'

import { Transaction } from './Transaction'

export const TransactionList = () => {
	const {
		state: { transactions },
		getTransactions
	} = useContext(TransactionsContext)

	useEffect(() => {
		getTransactions ? getTransactions() : null
	}, [])
	return (
		<>
			<h3>History</h3>
			<ul id="list" className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	)
}
