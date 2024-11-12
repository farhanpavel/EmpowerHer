"use client";
import React, { useEffect, useState } from "react";
import { url } from "@/components/Url/page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from "js-cookie";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const women_id = Cookies.get("id");
  const [user, setUser] = useState({
    description: "",
    thana: "",
    policename: "",
    women_id: women_id,
    title: "",
    nidUrl: "",
    imageUrl: "",
  });
  const [nidFile, setNidFile] = useState(null); // For NID
  const [imageFile, setImageFile] = useState(null); // For additional image
  const [policeData, setPoliceData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch police data
  useEffect(() => {
    const fetchPoliceData = async () => {
      try {
        const response = await fetch(`${url}/api/police`);
        const data = await response.json();
        setPoliceData(data);
      } catch (error) {
        console.error("Error fetching police data:", error);
      }
    };
    fetchPoliceData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleNidFileChange = (e) => {
    setNidFile(e.target.files[0]);
  };

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Function to upload file to Cloudinary
  const uploadToCloudinary = async (file: File) => {
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/drjgiv0ex/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

    try {
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.secure_url; // Return the Cloudinary URL of the uploaded image
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload image to Cloudinary if present
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadToCloudinary(image);
      }

      // Prepare form data including the image URL if uploaded
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, String(formData[key as keyof typeof formData]));
      });
      if (imageUrl) {
        formDataObj.append("image", imageUrl); // Append Cloudinary image URL
      }

      // Send form data to your backend
      const response = await fetch(`${url}/api/complain`, {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setLoading(false);
        router.back();
      } else {
        alert("Failed to submit form.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
      alert("Failed to upload image.");
    }
  };

  return (
    <Card className="border-[1px] border-gray-300">
      <CardHeader className="space-y-4">
        <CardTitle>Police Details</CardTitle>
        <CardDescription>
          Please select the Post of the police and fill in the required
          information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            {/* Select Thana */}
            <div className="flex flex-col w-1/4 space-y-3">
              <Label htmlFor="thana" className="text-xs">
                Select Thana
              </Label>
              <Select
                onValueChange={(value) => setUser({ ...user, thana: value })}
              >
                <SelectTrigger id="thana">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {policeData.map((police, index) => (
                    <SelectItem key={index} value={police.thana}>
                      {police.thana}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Select Police Name */}
            <div className="flex flex-col w-1/4 space-y-3">
              <Label htmlFor="policeName" className="text-xs">
                Select Police Name
              </Label>
              <Select
                onValueChange={(value) =>
                  setUser({ ...user, policename: value })
                }
              >
                <SelectTrigger id="policeName">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {policeData.map((police, index) => (
                    <SelectItem key={index} value={police.name}>
                      {police.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-6">
              {/* Complain Section */}
              <div>
                <h1 className="font-semibold text-sm">Enter Complaint</h1>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="nid">
                  Enter Your NID or Birth Certificate Picture
                </Label>
                <Input
                  id="nid"
                  type="file"
                  className="w-1/4 h-[30%]"
                  name="nid"
                  onChange={handleNidFileChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="additionalImage">
                  Upload Additional Image (if any)
                </Label>
                <Input
                  id="additionalImage"
                  type="file"
                  className="w-1/4 h-[30%]"
                  name="additionalImage"
                  onChange={handleImageFileChange}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="title">
                  Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  className="w-[80%] h-[30%]"
                  name="title"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="description">
                  Description
                </Label>
                <Textarea
                  name="description"
                  placeholder="Type your message here."
                  required
                  onChange={(e) =>
                    setUser({ ...user, description: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <CardFooter className="flex justify-end mt-7">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#FF2EBC] text-xs hover:bg-pink-400"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
