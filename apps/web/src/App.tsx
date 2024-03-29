import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { TransactionsProvider } from './context/transactions.provider'
import './App.css'

function App() {
	return (
		<TransactionsProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTransaction />
			</div>
		</TransactionsProvider>
	)
}

export default App
