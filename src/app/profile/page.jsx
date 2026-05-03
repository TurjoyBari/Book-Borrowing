"use client";


import { UpdateUserModal } from "@/component/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if(!user) {
    redirect('/signin')
  }

    const handleSignOut = async () => {
        await authClient.signOut();
      }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="max-w-96 mx-auto border mt-10 shadow-lg rounded-2xl">
      
      <div className="flex flex-col items-center gap-4 p-6">

        {/* Avatar */}
        <Avatar className="h-24 w-24 text-large border-4 border-blue-500">
          <Avatar.Image
            alt={user?.name || "user"}
            src={user?.image || "/images/default-user.png"}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0) || "U"}
          </Avatar.Fallback>
        </Avatar>

        {/* Name */}
        <h2 className="text-xl font-bold">
          {user?.name}
        </h2>

        {/* Email */}
        <p className="text-gray-500 text-sm">
          {user?.email}
        </p>

        {/* Status */}
        <Chip color="success" variant="flat">
          Active User
        </Chip>

        {/* Stats */}
        <div className="flex justify-between w-full mt-4 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">12</span>
            <span className="text-gray-500">Borrowed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">5</span>
            <span className="text-gray-500">Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">3</span>
            <span className="text-gray-500">Returned</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full mt-5">
          <UpdateUserModal />
          <Button onClick={handleSignOut} size="sm" variant="danger" className="w-full">
            Logout
          </Button>
        </div>

      </div>
    </Card>
    </div>
  );
};

export default ProfilePage;
