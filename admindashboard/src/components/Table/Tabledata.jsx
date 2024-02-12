// PaymentHistory.jsx
//  import CardData from '../cards/carddata'; // Corrected import statement
import React, { useState } from 'react';
import './Tabledata.css'

const Tabledata = () => {
    // Example payment data
    const examplePayments = [
        { paymentNumber: 1, amount: 100, status: 'Completed' },
        { paymentNumber: 2, amount: 150, status: 'Pending' },
        { paymentNumber: 3, amount: 75, status: 'Failed' },
        // Add more example payments as needed
    ];

    // State to track whether to display all transactions
    const [showAllTransactions, setShowAllTransactions] = useState(false);

    // Function to toggle showing all transactions
    const handleViewAllTransactions = () => {
        setShowAllTransactions(!showAllTransactions);
    };

    return (
        <div className="container">
            <div className="table-container">
                <h2>Payment History</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Payment Number</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showAllTransactions
                                ? examplePayments.map((payment, index) => (
                                    <tr key={index}>
                                        <td>{payment.paymentNumber}</td>
                                        <td>{payment.amount}</td>
                                        <td>{payment.status}</td>
                                    </tr>
                                ))
                                : examplePayments.slice(0, 5).map((payment, index) => (
                                    <tr key={index}>
                                        <td>{payment.paymentNumber}</td>
                                        <td>{payment.amount}</td>
                                        <td>{payment.status}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-primary" onClick={handleViewAllTransactions}>
                    {showAllTransactions ? 'Hide All Transactions' : 'View All Transactions'}
                </button>
            </div>
            {/* <div className="card-container">
                
                <CardData />
            </div> */}
        </div>
    );
};

export default Tabledata;
