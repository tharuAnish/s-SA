"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { deleteUserAction } from "@/actions"
import { useContext } from "react"
import { UserContext } from "@/context"

export default function SingleUserCard({ user }) {
  //for editing the data
  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } =
    useContext(UserContext)

  async function handleDelete(currentUserId) {
    const result = await deleteUserAction(currentUserId, "user-management")

    console.log(result)
  }

  function handleEdit(getCurrentUser) {
    setOpenPopup(true)
    setAddNewUserFormData({
      firstName: getCurrentUser?.firstName,
      lastName: getCurrentUser?.lastName,
      email: getCurrentUser?.email,
      address: getCurrentUser?.address,
    })
    setCurrentEditedID(getCurrentUser?._id)
  }

  return (
    <div clasName="">
      <Card>
        <CardHeader>
          <CardTitle>
            {user?.firstName} {user?.lastName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{user?.email}</CardDescription>
          <p className="truncate  whitespace-nowrap">{user?.address}</p>
        </CardContent>
        <CardFooter className="flex gap-x-3">
          <Button onClick={() => handleEdit(user)} className="flex-1">
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(user?._id)}
            variant="outline"
            className="flex-1 border-red-500 text-red-500 hover:bg-red-200"
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
