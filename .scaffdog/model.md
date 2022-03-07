---
name: "m"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter model name"
---

# `src/types/{{ inputs.name | pascal }}.ts`

```ts
export type {{ inputs.name | pascal }} = {
  name: string
}

export interface {{ inputs.name | pascal }}Props {
  {{ inputs.name | camel }}: {{ inputs.name | pascal }}
}

export interface {{ inputs.name | pascal }}ListProps {
  {{ inputs.name | camel }}s: {{ inputs.name | pascal }}[]
}
```

# `src/mocks/{{ inputs.name | pascal }}.ts`

```ts
import { {{ inputs.name | pascal }} } from "@/types/{{ inputs.name | pascal }}"

export const mock{{ inputs.name | pascal }}: {{ inputs.name | pascal }} = {
  name: "Hajime",
}

export const mock{{ inputs.name | pascal }}List = [mock{{ inputs.name | pascal }}, mock{{ inputs.name | pascal }}, mock{{ inputs.name | pascal }}]
```
