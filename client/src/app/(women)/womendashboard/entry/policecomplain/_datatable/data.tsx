"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useAppContext } from "@/components/Context/admincontext";
import { DeleteDialog } from "@/components/Delete/page";
import { url } from "@/components/Url/page";
import { ColumnDef } from "@tanstack/react-table";

interface PoliceData {
  id: string;
  name: string;
  email: string;
  mobile: string;
  post: string;
}
export const ActionsCell: React.FC<{ user: PoliceData }> = ({ user }) => {
  const router = useRouter();
  const { setUserData, setpoliceData, userData } = useAppContext();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // const handleDelete = async () => {
  //   try {
  //     const response = await fetch(`${url}/api/police/${userData.id}`, {
  //       method: "DELETE",
  //     });

  //     if (!response.ok) {
  //       alert("Failed to delete user");
  //       throw new Error("Failed to delete user");
  //     } else {
  //       setpoliceData((prevData) =>
  //         prevData.filter((item) => item.id !== user.id)
  //       );
  //       setDeleteDialogOpen(false);
  //     }
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="  p-1 hover:bg-blue-200 outline-none rounded-full hover:transition-all hover:delay-100">
            <MoreHorizontal className="h-3 w-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="text-xs text-[#4a4a4a]">
            Actions
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setUserData({ id: user.id });
              router.push("/admindashboard/entry/police/edit");
            }}
            className="hover:bg-blue-200 rounded-lg hover:transition-all hover:delay-100 text-xs text-[#4a4a4a]"
          >
            Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setDeleteDialogOpen(true);
              setUserData({ id: user.id });
            }}
            className="hover:bg-blue-200 rounded-lg hover:transition-all hover:delay-100 text-xs text-[#4a4a4a]"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <DeleteDialog
        open={isDeleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
      /> */}
    </>
  );
};
