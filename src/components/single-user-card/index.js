import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"

export default function SingleUserCard({ user }) {
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
          <Button className="flex-1">Edit</Button>
          <Button
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
