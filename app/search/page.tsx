"use client"

import { HomeCards } from "@/components/homeCards";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal } from "lucide-react";

export default function Search() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="px-5 mt-12 md:px-8 lg:px-10 xl:px-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Hi there, John
          </h1>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            What would like to know?
          </h1>
          <p className="text-neutral-800 font-extralight py-2">
            Use one of the most common prompts below or use your own to begin
          </p>
        </div>
        <div className="flex justify-center items-center relative my-4">
          <Textarea
            placeholder="Ask whatever you want.."
            className="w-[440px] md:[460px] lg:[480px] xl:[640px]"
          />
          <div className="flex items-center space-x-2 absolute right-4 top-2">
            <Switch id="airplane-mode" />
            <span className="text-gray-800 font-semibold">✨AI</span>
          </div>
          <div className="absolute bottom-2 right-4">
            <Button className="bg-white hover:bg-white cursor-pointer w-12">
              <SendHorizonal className="" size="28" color="#e408e7" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
