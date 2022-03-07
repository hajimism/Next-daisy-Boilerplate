import { VFC } from "react"

import { UserTable } from "@/components/model/User/UserTable"

import { Spacer } from "@/components/ui/Spacer"

import { mockUserList } from "@/mocks/User"

export const TopPageView: VFC = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen">
      <h1>Welcome to Nextwind Prototyping Template!</h1>
      <Spacer size={32} />
      <UserTable users={mockUserList} />
    </main>
  )
}
