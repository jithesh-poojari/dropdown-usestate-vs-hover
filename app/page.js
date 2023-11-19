import UseStateDropDown from "@/components/UseStateDropDown"
import HoverDropDown from "@/components/HoverDropDown"

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <UseStateDropDown/>
      <HoverDropDown/>
    </div>
  )
}
