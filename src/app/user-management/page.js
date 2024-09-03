import { fetchUsersAction } from "@/actions"
import AddNewUser from "@/components/add-new-user"
import SingleUserCard from "@/components/single-user-card"

export default async function UserManagement() {
  const getListofUsers = await fetchUsersAction()
  console.log(getListofUsers)

  return (
    <div className="p-20 mx-auto max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getListofUsers &&
        getListofUsers.data &&
        getListofUsers.data.length > 0 ? (
          getListofUsers.data.map((userItem) => (
            <SingleUserCard user={userItem} />
          ))
        ) : (
          <p>No Users</p>
        )}
      </div>
    </div>
  )
}
