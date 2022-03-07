---
name: "mcl"
root: "."
output: "**/*"
ignore: []
questions:
  model: "Which model?"
  component: "Plese enter component name"
---

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/index.ts`

```ts
export { {{ inputs.component | pascal }} } from "./{{ inputs.component | pascal }}"
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.tsx`

```tsx
import { VFC } from "react"

import { {{ inputs.model | pascal }}ListProps } from "@/types/{{ inputs.model | pascal }}"

export const {{ inputs.component | pascal }}: VFC<{{ inputs.model | pascal }}ListProps> = ({ {{ inputs.model | camel }}s }) => {
  return <></>
}
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { {{ inputs.component | pascal }} } from "@/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}"

import { mock{{ inputs.model | pascal }}List } from "@/mocks/{{ inputs.model | pascal }}"

export default {
  title: "Model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}",
  component: {{ inputs.component | pascal }},
} as ComponentMeta<typeof {{ inputs.component | pascal }}>

const Template: ComponentStory<typeof {{ inputs.component | pascal }}> = (args) => (
  <{{ inputs.component | pascal }} {...args} />
)

export const Default = Template.bind({})
Default.args = {
  {{ inputs.model | camel }}s: mock{{ inputs.model | pascal }}List,
}
```
