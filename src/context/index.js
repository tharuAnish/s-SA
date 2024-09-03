"use client"

import { addNewUserFormInitialState } from "@/utils"
import { createContext, useState } from "react"

export const UserContext = createContext(null)

export default function UserState({ children }) {
  const [currentEditedID, setCurrentEditedID] = useState(null)
  const [openPopup, setOpenPopup] = useState(false)
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  )

  return (
    <UserContext.Provider
      value={{
        currentEditedID,
        setCurrentEditedID,
        openPopup,
        setOpenPopup,
        addNewUserFormData,
        setAddNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
