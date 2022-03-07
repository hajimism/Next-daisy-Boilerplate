import { VFC } from "react"

import { UserProps, UserListProps } from "@/types/User"

const UserTableItem: VFC<UserProps> = ({ user }) => {
  const { id, name, gitHubUserName } = user
  const gitHubUserPage = `https://github.com/${gitHubUserName}`

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {gitHubUserName ? (
          <a
            href={gitHubUserPage}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-800 no-underline hover:underline"
          >
            {gitHubUserName}
          </a>
        ) : (
          <span className="text-gray-300">{"none"}</span>
        )}
      </td>
    </tr>
  )
}

export const UserTable: VFC<UserListProps> = ({ users }) => {
  return (
    <table className="table shadow">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableItem user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  )
}
