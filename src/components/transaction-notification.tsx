"use client"
import { useState } from "react"
import { TertiaryButton } from "./tertiary-button"
import { SmallSecondaryButton } from "./secondary-button"
import { AlertCircle } from "lucide-react"
import transactionss from "./mockData"
import * as Dialog from "@radix-ui/react-dialog";

import TransanctionHistoryModal from "@/app/modals/TransanctionNotificationModal"
export interface TransactionNotificationProps {
  initialNotifications?: Array<{
    id: number;
    title: string;
    time: string;
    description: string;
  }>;
}

export default function TransactionNotification({ 
  initialNotifications 
}: TransactionNotificationProps = {}) {

  const lastThree = transactionss?.slice(-3)
  const [notifications, setNotifications] = useState(
    initialNotifications || lastThree
  )
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
  const [isClearing, setIsClearing] = useState(false)
  const [clearingIndices, setClearingIndices] = useState<number[]>([])
  const [containerClearing, setContainerClearing] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  
  
  const clearAllNotifications = () => {
    if (isClearing) return // Prevent multiple clicks during animation

    setIsClearing(true)

    // Start clearing notifications one by one from left to right
    const totalNotifications = notifications?.length

    // Clear notifications one by one with a delay
    for (let i = 0; i < totalNotifications; i++) {
      setTimeout(() => {
        setClearingIndices((prev) => [...prev, i])
      }, i * 200) // 200ms delay between each notification
    }

    // After all notifications are cleared, clear the container
    setTimeout(
      () => {
        setContainerClearing(true)

        // Finally, reset everything after animations complete
        setTimeout(() => {
          setNotifications([])
          setIsClearing(false)
          setClearingIndices([])
          setContainerClearing(false)
        }, 500) // Container animation duration
      },
      totalNotifications * 200 + 100,
    ) // Wait for all notifications to clear + a small buffer
  }

  if (notifications.length === 0 && !containerClearing && !isClearing) {
    return null
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className={`flex flex-col w-full items-start p-0 gap-4 ${containerClearing ? "animate-container-clear" : ""}`}
      >
        {/* Header row */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-2">
            <h2
              className="font-medium text-base leading-tight pl-[1rem]"
              style={{
                fontFamily: "'SF Pro Text', sans-serif",
                letterSpacing: "-0.02em",
                color: "#121212",
              }}
            >
              Recent transactions
            </h2>
            <div
              className="flex justify-center items-center"
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid #E2DEDE",
                borderRadius: "10000px",
                padding: "6px",
              }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  fontFamily: "'SF Pro Text', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "-0.02em",
                  color: "#121212",
                  lineHeight: "1",
                }}
              >
                {lastThree.length}
              </span>
            </div>
          </div>
          <TertiaryButton
            label="Clear all"
            onClick={clearAllNotifications}
            disabled={isClearing || notifications.length === 0}
            className="cursor-pointer lg:mr-0"
          >
            Clear all
          </TertiaryButton>
        </div>

        {/* Stacked notifications */}
        <div className="relative grid  w-screen" style={{ height: "120px" }}>
          {lastThree.map((notification, index) => {
            // Use different sizes based on screen size but allow for full width
           

            const isClearing = clearingIndices.includes(index)

            return (
              <div
                key={notification.unique_id}
                className={`absolute left-1/2 flex items-center justify-center transform -translate-x-1/2 ${isClearing ? "animate-clear-notification" : ""}`}
                style={{
                  width: 'max-content',
                  height: 'fit-content',
                  top: index * -45, // -45px vertical spacing
                  zIndex: 3 - index,
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                  opacity: isClearing ? 0 : 1, // Start with opacity 1, animation will handle the transition
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                {/* Gradient border - using pseudo-element approach */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, #4AA2FF 0%, #7175F9 100%)",
                    borderRadius: "15px",
                    padding: "1px", // This creates the border effect
                  }}
                >
                  {/* Inner content container with 100% corner radius smoothing */}
                  <div
                    className="absolute inset-0 flex flex-row justify-center items-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(233, 233, 233, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
                      margin: "1px", // This creates space for the border
                      padding: sizes[index].padding,
                      gap: sizes[index].gap,
                      borderRadius: "14px", // Slightly smaller than parent to show border
                      // Apply 100% corner radius smoothing
                      borderTopLeftRadius: "14px 14px",
                      borderTopRightRadius: "14px 14px",
                      borderBottomLeftRadius: "14px 14px",
                      borderBottomRightRadius: "14px 14px",
                    }}
                  >
                    {/* Notification content */}
                    <div className="flex flex-row items-center justify-between w-full">
                      {/* Left side with icon and text */}
                      <div className="flex flex-row items-center gap-2">
                        {/* Circle icon */}
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{
                            width: "36px",
                            height: "36px",
                            background: "linear-gradient(180deg, #7073F9 0%, #4AA2FF 100%)",
                          }}
                        >
                          <AlertCircle className="w-5 h-5 text-white" />
                        </div>

                        {/* Text content */}
                        <div className="flex flex-col">
                          {/* First row */}
                          <div className="flex flex-row items-center gap-2">
                            <span
                              style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#121212",
                              }}
                            >
                             Transaction alert!
                            </span>
                            <span
                              style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                fontWeight: 400,
                                fontSize: "12px",
                                textDecorationLine: "underline",
                                color: "#929292",
                              }}
                            >
                            at{""} {notification.date}
                            </span>
                          </div>

                          {/* Second row */}
                          <span
                            style={{
                              fontFamily: "'SF Pro Text', sans-serif",
                              fontWeight: 500,
                              fontSize: "12px",
                              color: "#959595",
                            }}
                          >
                         You just received  <span className="bg-gradient-to-r from-[#1F90FF] to-[#504CF6] text-transparent bg-clip-text">{notification.crypto_value}</span>  approx <span className="bg-gradient-to-r from-[#1F90FF] to-[#504CF6] text-transparent bg-clip-text">{notification.naira_received}</span>
                          </span>
                        </div>
                      </div>

                      {/* Right side with button */}
                   
                      <Dialog.Root>
                     
                      <Dialog.Trigger asChild>
                      <SmallSecondaryButton 
                        text="View transaction"
                       
                        />
                         </Dialog.Trigger> 
                         <TransanctionHistoryModal notification={notification} />
                        
</Dialog.Root>

                    </div>
                  </div>
                </div>        
              </div>
            )
          })}
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes clearNotification {
          0% {
            opacity: 1;
            transform: translateX(-50%);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
        @keyframes clearContainer {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        
        .animate-clear-notification {
          animation: clearNotification 0.4s ease-in-out forwards;
        }
        
        .animate-container-clear {
          animation: clearContainer 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
} 