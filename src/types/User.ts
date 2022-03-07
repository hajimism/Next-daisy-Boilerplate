export type User = {
  id: number
  name: string
  gitHubUserName?: string
}

export interface UserProps {
  user: User
}

export interface UserListProps {
  users: User[]
}
