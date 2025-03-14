import * as React from 'react';
import { TertiaryButton } from './tertiary-button';
import transcationIcon from '../assests/link.svg'
import Image from 'next/image';
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
    <div className="w-full items-center justify-center h-64 flex flex-col bg-white p-4 rounded">
      <div className="flex justify-between  w-full items-center mb-4">
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
      
      <div className="flex-1 bg-white shadow-sm rounded-lg p-4" style={{ borderRadius: '20px' }}>
        {transactionCount === 0 && (
          <div className="h-full flex flex-col items-center justify-center">
            <Image
            height={24}
            width={24}
              src={transcationIcon} 
              alt="Empty state" 
              className="w-[100px] h-[100px]"
            />
            <p className="mt-2 text-gray-400 text-sm">{emptyStateText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistoryContainer; 