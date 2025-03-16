import * as React from 'react';
import { TertiaryButton } from './tertiary-button';
import Image from 'next/image';
import emptyStateImage1 from '../assests/Empty State1.svg';

type Transaction = {
  id: number;
  description: string;
  amount: string;
  date: string;
};

export interface TransactionHistoryContainerProps {
  transactions?: Transaction[];
  title?: string;
  emptyStateText?: string;
  //* eslint-disable @typescript-eslint/no-unused-vars */
  emptyStateImage?: string;
  //* eslint-enable @typescript-eslint/no-unused-vars */
  downloadButtonText?: string;
}

const TransactionHistoryContainer: React.FC<TransactionHistoryContainerProps> = ({
  transactions = [],
  title = "Transaction History",
  emptyStateText = "You have no transactions",
  emptyStateImage,
  downloadButtonText = "Download Analytics"
}) => {
  const transactionCount = transactions.length;

  return (
    <div className="w-full items-center justify-center flex flex-col rounded bg-transparent">
      <div className="flex justify-between w-full items-center mb-4 px-[0.6rem] lg:px-0">
        <div className="flex items-center justify-center">
          <h2 className="text-base font-medium text-gray-900">{title}</h2>
          <div className="ml-2 px-2 py-1 rounded-full border border-gray-200 text-xs">
            {transactionCount}
          </div>
        </div>
        
        <TertiaryButton className='cursor-pointer'>
          {downloadButtonText}
        </TertiaryButton>
      </div>
      
      <div 
        className="flex-1 w-full min-h-[200px] bg-white"
        style={{
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
          borderRadius: "20px"
        }}
      >
        {transactionCount === 0 && (
          <div className="h-full flex flex-col items-center justify-center p-6">
            {emptyStateImage ? (
              <Image
                height={100}
                width={100}
                src={emptyStateImage}
                alt="Empty state" 
                className="w-[100px] h-[100px]"
              />
            ) : (
              <Image
                src={emptyStateImage1}
                alt="No transactions"
                width={219}
                height={68}
                className="w-[219px] h-auto mb-3"
              />
            )}
            <p className="mt-4 text-gray-400 text-sm font-medium">{emptyStateText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistoryContainer; 