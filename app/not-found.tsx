import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto flex flex-col max-w-5xl gap-10 overflow-hidden px-5 py-8 xl:px-0 h-full justify-center items-center w-full">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[20rem] font-semibold">404</h1>
        <span className="text-2xl text-muted-foreground ">Page not found</span>
      </div>
      <div
        className="mb-12 w-full flex items-center justify-center"
        title="Go Back"
      >
        <Link href="/">
          <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-2 bg-transparent">
            <ChevronLeft className="size-4" />
            <span className="text-muted-foreground">Back to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
