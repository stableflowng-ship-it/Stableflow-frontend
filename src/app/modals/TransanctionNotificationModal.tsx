import React,{useState} from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import Image from 'next/image';
import usd from '../../assests/usdcoin.svg'
import logo from '../../assests/loggo.svg'
import download from '../../assests/document-download.svg'
import { PrimaryButton } from '@/components';
import { SecondaryButton } from '@/components';
import { motion } from "framer-motion"


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

interface ChildProps {
    notification: Transactionss;
  } 
const TransanctionNotificationModal : React.FC<ChildProps> = ({ notification }) => {
  return (
    <Dialog.Portal >
    
                <Dialog.Overlay  >
                <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
           className="fixed z-20 inset-0 duration-500 bg-black/50 backdrop-blur-md"
          /> 
                </Dialog.Overlay>
               
                <Dialog.Content>
  <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", duration :0.2,stiffness: 400,bounce:0.25,mass:0.5, }}
                 className="z-30 fixed top-3/5 lg:top-3/6 mt-[2rem]  left-1/2 flex flex-col gap-[2rem] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg w-[95%] lg:w-120"
                 style={{ backgroundImage: "url('/image3.svg')", backgroundPosition: "center" }}
                >
                  <Dialog.Title className="text-xl font-bold flex items-center justify-center"  
                  >
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
                  <div  className={`flex items-center justify-center font-[500] text-[15px] ${notification.status === "completed" ? "text-green-500 bg-green-100 py-[0.1rem] px-[0.1rem] rounded-md" : notification.status === "pending" ? "text-yellow-500 bg-yellow-100 py-[0.1rem] px-[0.1rem] rounded-md"  : "text-red-500 bg-red-100 py-[0.1rem] px-[0.1rem] rounded-md"}`}>{notification.status}</div>
                  <div className='flex gap-[0.5rem] items-center justify-center'>
                  <Image 
src={usd}
height={20}
width={20}
alt='usd logo'
/>
<h3 className='font-[600] text-[18px] lg:text-[20px] text-black'>+{""}{notification.crypto_value}</h3>
                  </div>
                  </div>
                  <h4 className='text-[14px] text-[#7C7C7C] font-[500] pr-[0.5rem]'>You recieved {""}{notification.naira_received}</h4>
                  </div>
                  <div className='grid gap-[1rem] '>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Crypto value</p>
                  <div className='flex gap-[0.5rem] items-center justify-center'>
                  <Image 
src={usd}
height={17}
width={17}
alt='usd logo'
/>
<h3 className='font-[600] text-[16px] text-black'>+{""}{notification.crypto_value}</h3>
                  </div>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Naira recieved</p>
<h3 className='font-[600] text-[16px] text-black'>{notification.naira_received}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Recipient account</p>
<h3 className='font-[600] text-[16px] text-black'>{notification.recipient_account}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Recipient bank</p>
<h3 className='font-[600] text-[16px] text-black'>United Bank of Africa</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Date</p>
<h3 className='font-[600] text-[16px] text-black'>{notification.date}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Timestamp</p>
<h3 className='font-[600] text-[16px] text-black'>{notification.timestamp}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Transaction ID</p>
<h3 className='font-[600] text-[16px] text-black'>{notification.transaction_id}</h3>
                  </div>
                  <div className='flex items-center justify-between'>
                  <p className='font-[500] text-[#7C7C7C] text-[16px]'>Status</p>
                  <div  className={`flex items-center justify-center font-[500] text-[13px] ${notification.status === "completed" ? "text-green-500 bg-green-100 py-[0.2rem] px-[0.3rem] rounded-md" : notification.status === "pending" ? "text-yellow-500 bg-yellow-100 py-[0.2rem] px-[0.3rem] rounded-md"  : "text-red-500 bg-red-100 py-[0.2rem] px-[0.3rem] rounded-md"}`}>{notification.status}</div>
                  </div>
                  </div>
                  </div>
                  <div className='flex flex-row w-full gap-[2rem] items-center justify-center'>
                  <Dialog.Close asChild>
                    <SecondaryButton className="w-full cursor-pointer py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      Cancel
                    </SecondaryButton>
                  </Dialog.Close>
                  <PrimaryButton shortcut=' ' className='flex flex-row items-center justify-center cursor-pointer w-[50%]'>
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
  )
}

export default TransanctionNotificationModal