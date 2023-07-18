import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if(!session) {
    redirect('api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 lg:pt-24">
      <ProfileForm user={user} />
    </div>
  )
}