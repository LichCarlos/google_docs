"use client";

import Link from "next/link";
import { AlertTriangleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const ErrorPage = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-rose-100 p-3 rounded-full">
            <AlertTriangleIcon className="size-10 text-rose-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            看起来好像有什么东西不太对劲呢... 😢
          </h2>
          <p>
            {error.message}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Button
          onClick={reset}
          className="font-medium px-6"
        >
          再试一次QAQ
        </Button>
        <Button
          asChild
          variant="ghost"
          className="font-medium"
        >
          <Link href="/">
            回到首页吧
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;