import Image from "next/image";

import { DialogTrigger } from "@radix-ui/react-dialog";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import GoogleIcon from "@/public/google-icon.svg";
import Logo from "@/public/logo.png";

import { Button } from "./ui/button";

export default function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try For Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row items-center justify-center gap-2">
          <Image src={Logo} alt="logo" className="h-10 w-14" />
          <h4 className="text-3xl font-semibold">
            Cal<span className="text-primary">Meeting</span>
          </h4>
        </DialogHeader>
        <div className="mt-5 flex flex-col">
          <Button>
            <Image
              src={GoogleIcon}
              alt="google-icon"
              className="mr-2 h-4 w-4"
            />
            Sign in with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
