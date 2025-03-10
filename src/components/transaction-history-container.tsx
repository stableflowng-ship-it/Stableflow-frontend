import * as React from 'react';
import { TertiaryButton } from './tertiary-button';

export interface TransactionHistoryContainerProps {
  transactions?: any[];
  title?: string;
  emptyStateText?: string;
  emptyStateImage?: string;
  downloadButtonText?: string;
}

const TransactionHistoryContainer: React.FC<TransactionHistoryContainerProps> = ({
  transactions = [],
  title = "Transaction History",
  emptyStateText = "You have no transactions",
  emptyStateImage = "/api/placeholder/200/120",
  downloadButtonText = "Download Analytics"
}) => {
  const transactionCount = transactions.length;

  return (
    <div className="w-full h-64 flex flex-col bg-white p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-base font-medium text-gray-900">{title}</h2>
          <div className="ml-2 px-2 py-1 rounded-full border border-gray-200 text-xs">
            {transactionCount}
          </div>
        </div>
        
        <TertiaryButton>
          {downloadButtonText}
        </TertiaryButton>
      </div>
      
      <div className="flex-1 bg-white shadow-sm rounded-lg p-4">
        {transactionCount === 0 && (
          <div className="h-full flex flex-col items-center justify-center">
            <img 
              src={emptyStateImage} 
              alt="Empty state" 
              className="w-24 h-24"
            />
            <p className="mt-2 text-gray-400 text-sm">{emptyStateText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistoryContainer; 