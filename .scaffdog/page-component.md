---
name: "pc"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name"
---

# `src/components/page/{{ inputs.name | pascal }}/index.ts`

```ts
import { {{ inputs.name | pascal }}Page } from "./Page"
export default {{ inputs.name | pascal }}Page
```

# `src/components/page/{{ inputs.name | pascal }}/Page.tsx`

```tsx
import Head from "next/head"

import { {{ inputs.name | pascal }}PageView } from "./View"

import type { NextPage } from "next"

export const {{ inputs.name | pascal }}Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{{ inputs.name }}</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <{{ inputs.name | pascal }}PageView />
    </>
  )
}
```

# `src/components/page/{{ inputs.name | pascal }}/View.tsx`

```tsx
import type { VFC } from "react"

export const {{ inputs.name | pascal }}PageView: VFC = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen">
      <h1>Hello world!</h1>
    </main>
  )
}
```

# `src/components/page/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { {{ inputs.name | pascal }}PageView } from "./View"

export default {
  title: "Page/{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }}PageView,
} as ComponentMeta<typeof {{ inputs.name | pascal }}PageView>;

const Template: ComponentStory<typeof {{ inputs.name | pascal }}PageView> = (args) => (
  <{{ inputs.name | pascal }}PageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}
```
