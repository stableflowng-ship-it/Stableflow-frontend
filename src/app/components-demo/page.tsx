import * as React from 'react';
import { 
  PrimaryButton, 
  SecondaryButton, 
  TertiaryButton,
  TransactionHistoryContainer,
  TransactionNotification
} from '@/components';

// Define Transaction type for transactions
interface Transaction {
  id: number;
  description: string;
  amount: string;
  date: string;
}

export default function ComponentsDemo() {
  // Sample transactions for demonstration
  const sampleTransactions: Transaction[] = [
    { id: 1, description: 'Payment received', amount: '$250.00', date: '2023-04-15' },
    { id: 2, description: 'Invoice #1234', amount: '$120.50', date: '2023-04-10' },
  ];

  // Empty transactions for empty state demo
  const emptyTransactions: Transaction[] = [];

  return (
    <div className="min-h-screen bg-[#f7f7f7] pt-6 pb-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Components Demo</h1>
        
        {/* Buttons Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Button Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-md font-medium mb-3">Primary Button</h3>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton>Primary Action</PrimaryButton>
                <PrimaryButton shortcut="⌘S">With Shortcut</PrimaryButton>
                <PrimaryButton disabled>Disabled</PrimaryButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Secondary Button</h3>
              <div className="flex flex-wrap gap-4">
                <SecondaryButton>Secondary Action</SecondaryButton>
                <SecondaryButton shortcut="⌘D">With Shortcut</SecondaryButton>
                <SecondaryButton disabled>Disabled</SecondaryButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Tertiary Button</h3>
              <div className="flex flex-wrap gap-4">
                <TertiaryButton>Tertiary Action</TertiaryButton>
                <TertiaryButton label="Custom Label" />
                <TertiaryButton disabled>Disabled</TertiaryButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Transaction Widgets Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Transaction Widgets</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Transaction History Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-md font-medium mb-3">Transaction History (With Data)</h3>
                <TransactionHistoryContainer 
                  transactions={sampleTransactions}
                  title="Recent Transactions"
                  downloadButtonText="Export CSV"
                />
              </div>
              
              <div>
                <h3 className="text-md font-medium mb-3">Transaction History (Empty State)</h3>
                <TransactionHistoryContainer 
                  transactions={emptyTransactions}
                  title="Pending Transactions"
                  emptyStateText="No pending transactions"
                  emptyStateImage="/api/placeholder/200/120"
                  downloadButtonText="Download Report"
                />
              </div>
            </div>
            
            {/* Transaction Notification */}
            <div className="mt-8">
              <h3 className="text-md font-medium mb-3">Transaction Notification</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <TransactionNotification />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 