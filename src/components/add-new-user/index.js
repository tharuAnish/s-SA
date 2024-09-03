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
import { addNewUserAction } from "@/actions"

export default function AddNewUser() {
  const [openPopUp, setOpenPopUp] = useState(false)
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  )

  console.log(addNewUserFormData)

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    )
  }

  async function handleAddNewUserAction() {
    const result = await addNewUserAction(
      addNewUserFormData,
      "/user-management"
    )
    console.log(result)
    setOpenPopUp(false)
    setAddNewUserFormData(addNewUserFormInitialState)
  }

  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>AddNewUser</Button>
      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false)
          setAddNewUserFormData(addNewUserFormInitialState)
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
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
