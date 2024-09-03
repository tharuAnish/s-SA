"use client"
import { useState } from "react"

import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddNewUserFormControls, addNewUserFormInitialState } from "@/utils"
import { addNewUserAction, editUserAction } from "@/actions"
import { useContext } from "react"
import { UserContext } from "@/context"

export default function AddNewUser() {
  const {
    openPopup,
    setOpenPopup,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedID,
    setCurrentEditedID,
  } = useContext(UserContext)

  console.log(addNewUserFormData)

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    )
  }

  async function handleAddNewUserAction() {
    // check if the user is editing or adding new data
    const result =
      currentEditedID !== null
        ? await editUserAction(
            currentEditedID,
            addNewUserFormData,
            "/user-management"
          )
        : await addNewUserAction(addNewUserFormData, "/user-management")
    console.log(result)
    setOpenPopup(false)
    setAddNewUserFormData(addNewUserFormInitialState)
  }

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>AddNewUser</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false)
          setAddNewUserFormData(addNewUserFormInitialState)
          setCurrentEditedID(null)
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {" "}
              {currentEditedID !== null ? <p>Edit User</p> : <>Add New User</>}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddNewUserAction} className="grid gap-4  py-4">
            <div className="space-y-3">
              {AddNewUserFormControls.map((controlItem) => (
                <div key={controlItem.name}>
                  <Label htmlFor={controlItem.name} className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    className="col-span-3"
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(event) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [controlItem.name]: event.target.value,
                      })
                    }
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button
                className="disabled:opacity-50 mt-5"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
