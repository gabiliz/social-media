import { prisma } from "../../../lib/prisma";
import UserCard from "../components/UserCard";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 lg:pt-32">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}