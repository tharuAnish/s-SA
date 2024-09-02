"use server"

import connectToDB from "@/database"
import User from "@/models/user"
import { revalidatePath } from "next/cache"

//add new user action

export async function addNewUserAction(formData, pathToRevalidate) {
  await connectToDB()

  try {
    //validate data using joi/ other packages you can use

    const newlyCreatedUser = await User.create(formData)
    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate)
      return {
        success: true,
        message: "User added successfully",
      }
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      }
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: "Some error occured! Please try again",
    }
  }
}

//fetch users actions
export async function fetchUsersAction() {
  await connectToDB()
  try {
    const listOfUsers = await User.find({})
    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      }
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      }
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: "Some error occured! Please try again",
    }
  }
}
