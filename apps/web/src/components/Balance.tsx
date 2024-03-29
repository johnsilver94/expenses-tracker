import { useContext } from 'react'

import { TransactionsContext } from '../context/transactions.provider'
import { numberWithCommas } from '../utils/format'

export const Balance = () => {
	const {
		state: { transactions }
	} = useContext(TransactionsContext)

	const amounts = transactions.map((transaction) => transaction.amount)
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
	return (
		<div>
			<h4> Your Balance</h4>
			<h1 id="balance">${numberWithCommas(total)}</h1>
		</div>
	)
}
