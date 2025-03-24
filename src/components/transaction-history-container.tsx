'use client'
import * as React from 'react';
import { TertiaryButton } from './tertiary-button';
import Image from 'next/image';
import emptyStateImage1 from '../assests/Empty State1.svg';
import transactionss from './mockData';
import { useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import usd from '../assests/usdcoin.svg'
import logo from '../assests/image1.png'
import { log } from 'console';
import { PrimaryButton } from './primary-button';
import { SecondaryButton } from './secondary-button';
import { motion } from "framer-motion"
import download from '../assests/document-download.svg'
type Transaction = {
  id: number;
  description: string;
  amount: string;
  date: string;
};



interface Transactionss {
  unique_id: string;
  transaction_id: string;
  crypto_value: string;
  naira_received: string;
  recipient_account: string;
  date: string;
  timestamp: string;
  status: any; 
}

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
  const [selectedTransaction, setSelectedTransaction] = useState<Transactionss | null>(null);
  return (
    <div className="w-full items-center justify-center flex flex-col rounded bg-transparent">
      <div className="flex justify-between w-full items-center mb-4 px-[0.6rem] lg:px-0">
        <div className="flex items-center justify-center">
          <h2 className="text-base font-medium text-gray-900">{title}</h2>
          <div className="ml-2 px-2 py-1 rounded-full border border-gray-200 text-xs">
            {transactionss.length}
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
        {transactionss ? 
         <div className='grid'>
         {transactionss.map((transact)=>(

          <Dialog.Root key={transact.unique_id} >
            <Dialog.Trigger asChild>
<div className='cursor-pointer flex flex-row justify-between items-center w-full border-b-2 p-[0.5rem] px-[1.3rem] border-[#F1F1F1]' 
onClick={() => setSelectedTransaction(transact)}
 >
<div className='flex flex-row gap-[1.5rem]'> 
<div className='flex items-center justify-center w-[19%]  '
style={{ backgroundImage: "url('/usdbg.svg')", backgroundPosition: "center" ,
  backgroundRepeat: "no-repeat",  borderRadius: "50%", }}
>
<Image 
src={usd}
height={20}
width={20}
alt='usd logo'
/>
</div>
<div className='grid gap-[0.2rem] w-fit'> 
<h3 className='font-[500] text-[13px] text-[#9B9B9B] '>{transact.date}</h3>
<h4 className='text-[15px] font-[500] text-[#121212] w-full'>You recieved {""}{transact.naira_received}</h4>
</div>
</div>
<div className='flex flex-col gap-[0.2rem]'>
<h4 className='text-[15px] font-[500] text-[#121212]'>+{""}{""} {transact.crypto_value}</h4>
<h3
  className={`font-[500] text-[13px] ${
    transact.status === "completed"
      ? "text-green-500"
      : transact.status === "pending"
      ? "text-yellow-500"
      : "text-red-500"
  }`}
>
  {transact.status}
</h3>

   </div>
   </div>
   </Dialog.Trigger> 
   <Dialog.Portal>
                <Dialog.Overlay >
                  <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                           className="fixed z-20 inset-0 bg-black/50 backdrop-blur-md"
                          /> 
                /</Dialog.Overlay>
                <Dialog.Content >
                  <motion.div
                  className="z-30 fixed  top-1/2 lg:top-3/6 mt-[1rem] left-1/2 flex flex-col gap-[1rem] lg:gap-[2rem] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg "
                  style={{ backgroundImage: "url('/image3.svg')", backgroundPosition: "center" }}
                  initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "tween", duration :0.2 }}>
                  <Dialog.Title className="text-xl font-bold flex items-center justify-center">
                  <Image 
                  src={logo}
                  alt='logo'
                  height={30}
                  width={130}
                  />
                  </Dialog.Title>
                  <div className="mt-2 grid  lg:w-full gap-[2rem]">
                  <div className='bg- pl-[1rem] lg:pl-0 pr-[1rem] lg:pr-0 bg-[#F7F7F7] py-[0.5rem]  lg:w-full  flex  flex-row justify-between items-center  rounded-2xl '>
                  <div className='grid gap-[0.3rem] pt-[0.3rem] lg:px-[1rem]'>
                  <h3
  className={`font-[500] text-[13px] ${
    transact.status === "completed"
      ? "text-green-500"
      : transact.status === "pending"
      ? "text-yellow-500"
      : "text-red-500"
  }`}
>
  {transact.status}
</h3>
                  <div className='flex gap-[0.5rem] items-center justify-center'>
                  <Image 
src={usd}
height={20}
width={20}
alt='usd logo'
/>
<h3 className='font-[600] text-[18px] lg:text-[20px] text-black'>+{""}{transact.crypto_value}</h3>
                  </div>
                  </div>
                  <h4 className='text-[14px] text-[#7C7C7C] font-[500] pr-[0.5rem]'>You recieved {""}{transact.naira_received}</h4>
                  </div>
                  <div className='grid gap-[1rem]  '>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Crypto value</p>
                  <div className='flex gap-[0.5rem] items-center justify-center'>
                  <Image 
src={usd}
height={17}
width={17}
alt='usd logo'
/>
<h3 className='font-[600] text-[16px] text-black'>+{""}{transact.crypto_value}</h3>
                  </div>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Naira recieved</p>
<h3 className='font-[600] text-[16px] text-black'>{transact.naira_received}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Recipient account</p>
<h3 className='font-[600] text-[16px] text-black'>{transact.recipient_account}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Recipient bank</p>
<h3 className='font-[600] text-[16px] text-black'>United Bank of Africa</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Date</p>
<h3 className='font-[600] text-[16px] text-black'>{transact.date}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Timestamp</p>
<h3 className='font-[600] text-[16px] text-black'>{transact.timestamp}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Transaction ID</p>
<h3 className='font-[600] text-[16px] text-black'>{transact.transaction_id}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Status</p>
                  <div 
                  
                  
                  className={`flex items-center justify-center font-[500] text-[13px] ${transact.status === "completed" ? "text-green-500 bg-green-100 py-[0.2rem] px-[0.3rem] rounded-md" :  transact.status === "pending" ? "text-yellow-500 bg-yellow-100 py-[0.2rem] px-[0.3rem] rounded-md"  : ""}`}>{transact.status}</div>
                  </div>
                  </div>
                  </div>
                  <div className='flex flex-row w-full gap-[2rem] items-center justify-center'>
                  <Dialog.Close asChild>
                    <SecondaryButton className="w-full cursor-pointer py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      Cancel
                    </SecondaryButton>
                  </Dialog.Close>
                  <PrimaryButton shortcut=' ' className='flex flex-row w-[50%] items-center justify-center cursor-pointer'>
                  <div className='flex flex-row items-center py-[0.1rem] justify-center gap-[0.2rem] lg:gap-[0.4rem]'>
                  <Image 
src={download}
height={15}
width={15}
alt='download'
className='pl-[0.1rem]'
/>
<p className='text-[13px]'>Download Receipt</p>
</div>
                  </PrimaryButton>
                  </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
          </Dialog.Root> 

         ))}
          </div>
        :  
        <div className="h-full flex flex-col items-center justify-center p-6">
        <Image
                src={emptyStateImage1}
                alt="No transactions"
                width={219}
                height={68}
                className="w-[219px] h-auto mb-3"
              />
            <p className="mt-4 text-gray-400 text-sm font-medium">{emptyStateText}</p>
          </div>}
      </div>
    </div>
  );
};

export default TransactionHistoryContainer; 