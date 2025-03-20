'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import * as Dialog from "@radix-ui/react-dialog";
import close from "../../assests/add.svg"
import { PrimaryButton, TertiaryButton } from '@/components'
import yellow from '../../assests/image6.svg'
import green from '../../assests/tick-circle.svg'
import image5 from "../../assests/import.svg"
import { BusinessDropdownSelector } from './BusinessDropdwon';
import export2 from "../../assests/export2.svg"
import { motion } from "framer-motion"
import { StepBack } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { useAppDispatch } from '../store/store';
import { useAppSelector } from '../store/store';
import { setInputValue } from '../store/inputSlice';
interface ChildProps {
  closefunction: () => void; // Function type
  step : Number
  forward: () => void;
  back: () => void;
  progress : number
  checked : boolean
  finalize: () => void;
  close1 : () => void
}


const Modals: React.FC<ChildProps> = ({ closefunction, step,forward,back,progress,checked,finalize,close1 }) => {
   
  
   
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountType, setAccountType] = useState('');
    
    const dispatch =  useAppDispatch();
    const inputValue = useAppSelector((state) => state.input.value);
    
    const checklist = [
      "Business name added",
      "Configure receiver account",
      "Creating a crypto wallet",
      "You're set up!",
    ];
    
  return (
     <Dialog.Portal>
                   <Dialog.Overlay >
                    <motion.div
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               exit={{ opacity: 0 }}
                               transition={{ duration: 0.4 }}
                              className="fixed px-[0.5rem] inset-0 bg-black/50 z-30 backdrop-blur-md"
                             /> 
                              </Dialog.Overlay>
                   <Dialog.Content >
                   <motion.div
                   className="fixed left-1/2 top-4/6   transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-[20px] w-[90%] lg:w-[500px]" style={{ borderRadius: '20px' }}
                   initial={{ y: "100%", opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: "100%", opacity: 0 }}
                   transition={{ type: "spring", duration :0.2,stiffness: 400,bounce:0.25,mass:0.5, }}
                   >

                     <style jsx>{`
                       @keyframes gradient {
                         0% {
                           background-position: 0% 0%;
                         }
                         100% {
                           background-position: 200% 0%;
                         }
                       }
                     `}</style>
                     
                     {/* Step 1 */}
                     {step === 1 && (
                       <div className='grid gap-[16px]'>
                         <div className='flex flex-row items-center justify-between'>
                           <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up your business entity</Dialog.Title>
                           <Image 
                             src={close}
                             width={30}
                             height={30}
                             alt='close'
                             className='cursor-pointer'
                             onClick={close1}
                           />
                         </div>
                         <div className='grid'>
                           <p className="font-[400] text-[16px] mb-[8px]">Business Name</p>
                           <div className="relative w-full">
                             {/* Gradient Border Container */}
                             <div className={`relative rounded-[10px] ${focusedInput === 'businessName' ? 'p-0.5' : 'p-0'}`}>
                               {/* Animated gradient background (only visible when focused) */}
                               {focusedInput === 'businessName' && (
                                 <div 
                                   className="absolute inset-0 rounded-[10px]"
                                   style={{
                                     background: 'linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)',
                                     backgroundSize: '200% auto',
                                     animation: 'gradient 2s linear infinite',
                                   }}
                                 />
                               )}
                               
                               {/* Input container */}
                               <div 
                                 className={`
                                   relative flex items-center p-2 px-4 h-9 rounded-[10px]
                                   ${focusedInput === 'businessName' ? 'bg-white' : 'bg-gray-100 border border-gray-200'}
                                 `}
                               >
                                 <input
                                   type="text"
                                   placeholder="Enter business name"
                                   onFocus={() => setFocusedInput('businessName')}
                                   onBlur={() => setFocusedInput(null)}
                                   onChange={(e) => dispatch(setInputValue(e.target.value))}
                                   className={`
                                     w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                                     border-none outline-none focus:ring-0
                                   `}
                                 />
                               </div>
                             </div>
                           </div>
                           <h3 className='text-[#959595] font-[500] text-[12px]'>*Use your business name as incorperated</h3>
                         </div>
                         <div className='grid'>
                           <p className="font-[400] text-[16px] mb-[8px]">Business contact</p>
                           <div className="relative w-full">
                             {/* Gradient Border Container */}
                             <div className={`relative rounded-[10px] ${focusedInput === 'businessContact' ? 'p-0.5' : 'p-0'}`}>
                               {/* Animated gradient background (only visible when focused) */}
                               {focusedInput === 'businessContact' && (
                                 <div 
                                   className="absolute inset-0 rounded-[10px]"
                                   style={{
                                     background: 'linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)',
                                     backgroundSize: '200% auto',
                                     animation: 'gradient 2s linear infinite',
                                   }}
                                 />
                               )}
                               
                               {/* Input container */}
                               <div 
                                 className={`
                                   relative flex items-center p-2 px-4 h-9 rounded-[10px]
                                   ${focusedInput === 'businessContact' ? 'bg-white' : 'bg-gray-100 border border-gray-200'}
                                 `}
                               >
                                 <input
                                   type="text"
                                   placeholder="Enter business phone number"
                                   onFocus={() => setFocusedInput('businessContact')}
                                   onBlur={() => setFocusedInput(null)}
                                   className={`
                                     w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                                     border-none outline-none focus:ring-0
                                   `}
                                 />
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className='grid'>
                           <p className="font-[400] text-[16px] mb-[8px]">Business category</p>
                           <BusinessDropdownSelector
                             placeholder="Select Payment Method"
                             options={['Cash', 'POS']}
                             value={paymentMethod}
                             onChange={(option: string) => setPaymentMethod(option)}
                             width="100%"
                           />
                         </div>
                         <PrimaryButton shortcut="" onClick={forward} className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-[10px] border-0">
                           Continue
                         </PrimaryButton>
                       </div>
                     )}
   
                     {/* Step 2 */}
                     {step === 2 && (
                       <motion.div className='grid gap-[16px]'
                   initial={{ x: "-100%", opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   exit={{ y: "100%", opacity: 0 }}
                   transition={{ type: "spring", duration :0.2,stiffness: 400,bounce:0.25,mass:0.5, }}
                       >
                         <div className='flex flex-row items-center justify-between'>
                         <div className='flex flex-row items-center justify-center gap-[0.5rem]'>
                         <StepBack className='lg:text-[20px] text-[15px] font-[600] cursor-pointer' onClick={back} />
                           <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up receiver account</Dialog.Title>
                           </div>
                           <Image 
                             src={close}
                             width={30}
                             height={30}
                             alt='close'
                             className='cursor-pointer'
                             onClick={close1}
                           />
                         </div>
                         <div className='grid'>
                           <p className="font-[400] text-[16px] mb-[8px]">Business category</p>
                           <BusinessDropdownSelector
                             placeholder="Select a bank name"
                             options={['Sterling bank', 'First bank', 'Access bank', 'UBA']}
                             value={bankName}
                             onChange={(option: string) => setBankName(option)}
                             width="100%"
                           />
                         </div>
                         <div className='grid'>
                           <p className="font-[400] text-[16px] mb-[8px]">Account number</p>
                           <div className="relative w-full">
                             {/* Gradient Border Container */}
                             <div className={`relative rounded-[10px] ${focusedInput === 'accountNumber' ? 'p-0.5' : 'p-0'}`}>
                               {/* Animated gradient background (only visible when focused) */}
                               {focusedInput === 'accountNumber' && (
                                 <div 
                                   className="absolute inset-0 rounded-[10px]"
                                   style={{
                                     background: 'linear-gradient(90deg, #1F90FF, #504CF6, #1F90FF)',
                                     backgroundSize: '200% auto',
                                     animation: 'gradient 2s linear infinite',
                                   }}
                                 />
                               )}
                               
                               {/* Input container */}
                               <div 
                                 className={`
                                   relative flex items-center p-2 px-4 h-9 rounded-[10px]
                                   ${focusedInput === 'accountNumber' ? 'bg-white' : 'bg-gray-100 border border-gray-200'}
                                 `}
                               >
                                 <input
                                   type="text"
                                   placeholder="Enter account number"
                                   onFocus={() => setFocusedInput('accountNumber')}
                                   onBlur={() => setFocusedInput(null)}
                                   className={`
                                     w-full h-5 text-sm font-medium tracking-wide bg-transparent 
                                     border-none outline-none focus:ring-0
                                   `}
                                 />
                               </div>
                             </div>
                           </div>
                           <div className='text-[#868686] border-blue-600 rounded-[100px] border-[1px] w-fit flex items-start px-[8px] py-[4px] mt-[8px] text-[14px] font-[500]'>Temidayo Folajin</div>
                         </div>
                         <div className='grid'>
                           <p className="font-[400] text-[16px] mb-[8px]">Account type</p>
                           <BusinessDropdownSelector
                             placeholder="Select an account type"
                             options={['Cash', 'POS']}
                             value={accountType}
                             onChange={(option: string) => setAccountType(option)}
                             width="100%"
                           />
                         </div>
                         <PrimaryButton shortcut="" onClick={forward} className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-[10px] border-0">
                           Start accepting
                         </PrimaryButton>
                       </motion.div>
                     )}
   
                     {/* Step 3 */}
                     {step === 3 && (
                       <motion.div className='grid gap-[16px]'
                       initial={{ x: "100%", opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       exit={{ y: "100%", opacity: 0 }}
                       transition={{ type: "spring", duration :0.2,stiffness: 400,bounce:0.25,mass:0.5, }}
                           >
                             <div className='flex flex-row items-center justify-between'>
                             <div className='flex flex-row items-center justify-center gap-[0.5rem]'>
                             <StepBack className='lg:text-[20px] text-[15px] font-[600] cursor-pointer' onClick={back} />
                               <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">Set up receiver account</Dialog.Title>
                               </div>
                           <Image 
                             src={close}
                             width={30}
                             height={30}
                             alt='close'
                             className='cursor-pointer'
                             onClick={close1}
                           />
                         </div>
                         <div className="flex justify-between p-[1rem] items-center border-[2px] cursor-pointer rounded-2xl border-[#E2E2E2]">
                           <h3 className='text-black font-[600] text-[16px]'>Read our terms of service</h3>
                           <button 
                             onClick={finalize}
                             className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-[#8D8D8D] bg-white rounded-full shadow-sm hover:bg-gray-50"
                           >
                             <span>Read</span>
                             <Image 
                               src={export2}
                               height={16}
                               width={16}
                               alt='export'
                             />
                           </button>
                         </div>
                         <div className="w-full">
                           {checked == true ?
                             <PrimaryButton shortcut="" onClick={forward} className="mt-4 cursor-pointer px-4 py-2 w-full text-white rounded-[10px] border-0">
                               I consent
                             </PrimaryButton>
                           : <button className='bg-[#D3D3D3] w-full rounded-[10px] border-0 text-white p-[0.5rem] cursor-not-allowed'>I consent</button>}
                         </div>
                       </motion.div>
                     )}
                     
                     {/* Step 4 */}
                     {step === 4 && (
                       <div className='grid gap-[16px]'>
                         <div className='flex flex-row items-center justify-between'>
                           <Dialog.Title className="lg:text-[24px] text-[18px] font-[600]">
                            {progress > 4 ?
                          <div className='flex items-center justify-center gap-[0.3rem]'>
                          <div>You are ready</div> 
                          <ThumbsUp className='lg:text-[18px] text-[15px] font-[600] cursor-pointer' />
                          </div>
                           :
                           
                             <div>Setting up your account </div> 
}
                            </Dialog.Title>
                           <Image 
                             src={close}
                             width={30}
                             height={30}
                             alt='close'
                             className='cursor-pointer'
                             onClick={closefunction}
                           />
                         </div>
                         {checklist.map((item, index) => (
                           <div key={index} className="flex items-center gap-2">
                             <Image
                               src={progress > index ? green : yellow}
                               width={20}
                               height={20}
                               alt="check"
                               className="transition-all duration-300"
                             />
                             <p className={`text-[16px] ${progress > index ? "text-green-600 font-medium" : "text-gray-500"}`}>
                               {item}
                             </p>
                           </div>
                         ))}
                         {progress > 4 ?
                           <button className='flex items-center left-[50%] lg:left-[65%] relative'>
                             <Image
                               src={image5}
                               width={20}
                               height={20}
                               alt='import'
                             />
                             <h3 className='text-[#8D8D8D] cursor-pointer text-[16px]'>Download QR code</h3>
                           </button>
                         : ""}
                       </div>
                     )}
                     </motion.div>
                   </Dialog.Content>
                 </Dialog.Portal>
  )
}

export default Modals