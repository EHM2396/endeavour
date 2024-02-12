import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function() {
  return (
    <div className="">
      <h1 className={`${titleFont.className} font-bold`}>New account</h1>
    </div>
  );
}
