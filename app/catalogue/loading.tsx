import { Spinner } from "@/components/ui/shadcn-io/spinner";
export default function loading() {
  return (
    <div className=" flex flex-col justify-center items-center mx-auto w-full h-noNav">
      <Spinner variant="circle" />
    </div>
  );
}
