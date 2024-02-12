import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function() {
  return (
    <div>
      <h1 className={`${titleFont.className} font-bold`}>Information</h1>
    </div>
  );
}
