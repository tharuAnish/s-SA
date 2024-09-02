import { fetchUsersAction } from "@/actions"
import AddNewUser from "@/components/add-new-user"

export default async function UserManagement() {
  const getListofUsers = await fetchUsersAction()
  console.log(getListofUsers)

  return (
    <div className="p-20 mx-auto max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
    </div>
  )
}
