"use client";
import React, { useState } from "react";
// import { url } from "@/components/Url/page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useAppContext } from "@/components/Context/admincontext";

export default function Page() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRoleChange = (role: string) => {
    setUser({ ...user, role });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        alert("Server Error");
        throw new Error("Failed to submit data");
      } else {
        setLoading(false);
        setTimeout(() => {
          router.back();
        }, 3000);
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <Card className="border-[1px] border-gray-300">
      <CardHeader className="space-y-4">
        <CardTitle>Teacher Details</CardTitle>
        <CardDescription>
          Please select the Post of the Teacher and fill in the required
          information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col w-1/4 space-y-3">
              <Label htmlFor="framework" className="text-xs">
                Select role
              </Label>
              <Select required onValueChange={handleRoleChange}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="provost">Professor</SelectItem>
                  <SelectItem value="a">Assistant Professor</SelectItem>
                  <SelectItem value="b">Lecturer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="font-semibold text-sm">
                  Enter Teacher Informations
                </h1>
              </div>
              <div className="space-y-2 ">
                <div className="space-y-2 ">
                  <Label className="text-xs" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="name"
                    className="w-1/2"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-1/2"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    className="w-1/2"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs" htmlFor="password">
                    Mobile No
                  </Label>
                  <Input
                    type="number"
                    id="password"
                    className="w-1/2"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs" htmlFor="password">
                    Institute
                  </Label>
                  <Input
                    type="name"
                    id="password"
                    className="w-1/2"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <CardFooter className="flex justify-end mt-7">
            {isLoading ? (
              <Button
                type="submit"
                className=" bg-[#FF2EBC] text-xs hover:bg-pink-500 hover:transition-all hover:delay-100"
              >
                Submit
              </Button>
            ) : (
              <Button
                type="submit"
                disabled
                className=" bg-[#FF2EBC] hover:bg-pink-500 hover:transition-all hover:delay-100"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
              </Button>
            )}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
