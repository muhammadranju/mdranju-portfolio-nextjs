"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { MdArrowBack } from "react-icons/md";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      className="rounded-lg"
      variant={"outline"}
    >
      <MdArrowBack /> Back
    </Button>
  );
};

export default BackButton;
