import { useTheme } from "next-themes"
import { VFC } from "react"

import { UserTable } from "@/components/model/User/UserTable"

import { Spacer } from "@/components/ui/Spacer"

import { mockUserList } from "@/mocks/User"

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]

export const TopPageView: VFC = () => {
  const { theme, setTheme } = useTheme()

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTheme(event.target.value)
  }

  return (
    <main
      className="flex flex-col justify-center items-center p-4 h-screen"
      onChange={handleChange}
    >
      <select className="w-full max-w-xs select select-bordered">
        <option disabled selected>
          Pick your favorite theme
        </option>
        {THEMES.map((themeName) => (
          <option key={themeName}>{themeName}</option>
        ))}
      </select>
      <Spacer size={8} />
      <div className="text-center prose">
        <h1>Play with daisyUI on Next.js!</h1>
        <h2>
          current theme is
          <span className="pl-2 text-primary">{theme}</span>
        </h2>
      </div>
      <Spacer size={8} />
      <UserTable users={mockUserList} />
    </main>
  )
}
