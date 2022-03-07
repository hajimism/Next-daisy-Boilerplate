# Nextwind Prototyping Boilerplate

A boilerplate for prototyping with Next.js & Tailwind CSS, which would save your time a lot!

This project is made with...

- Next.js
- TypeScript
- Tailwind CSS
- Storybook
- husky & lint-staged
- scaffdog

These are demo sites.

- [App](https://nextwind-prototyping-boilerplate.vercel.app/)
- [Storybook](https://61f8f16f224018003f2121c3-nrfgktmbqm.chromatic.com/?path=/story/model-user-usertable--default)

## Sammary of Strength

- Tailwind & Storybook are already set!
- Nicely structured folders, which would be familier with OOUI prototyping.
- Useful ESlint plugins and rules.
  - Tailwind className sort
  - import order
  - unused import deletion
- Pre-commit hook is also set!
- Scaffdog generates a nice component folder template!
- A useful Spacer component is included.

## Structure

I assume this boilerplate being used in OOUI-aware prototyping. So you would develop like this.

1. Define the type of model (or Object in OOUI) is `@/types` (`@/` means `/src/` here)
2. Create a mock data that follows the model
3. Create UI components under `@/components/model`

And scaffdog will help you a lot. See [here](#scaffdog)!

```zsh
.
├── .husky
├── .scaffdog
├── .storybook
├── public
└── src
    ├── components
    │   ├── model # components related to models
    │   ├── page # components which represents page
    │   └── ui # components indifferent to models
    ├── mocks # mock data related to models
    ├── pages
    │   └── api
    ├── styles
    └── types # type definition of models
```

## Usage

### Development

You can quickly start development with these commands.

```zsh
# package install
yarn

# start localhost
yarn dev

# start storybook
yarn sb
```

### Scaffdog

Scaffdog help us by generaing a template of project folder.
I already set some commands and the following is a description of those commands. See also [official document of scaffdog](https://github.com/cats-oss/scaffdog#scaffdog).

**Create a new model**

When you create a new model, use this command at first.

```zsh
npx scaffdog generate m
```

Then, scaffdog will ask you some questions. This is an example of creating Student model.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Please enter model name student # Enter model name. Multiple words are also fine.

🐶 Generated 2 files!

     ✔ src/types/Student.ts
     ✔ src/mocks/Student.ts

```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/model.md). You can customize this file.

**Create a new component related to model**

When you create a new component related to model, and...

① when the component describes single of model, use this command at first.
```zsh
npx scaffdog generate mcs
```

Then, scaffdog will ask you some questions. This is an example of creating Student List Component, which is related to Student model.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Which model? student # Enter model name. Multiple words are also fine.
? Plese enter component name student # Enter component name. Multiple words are also fine.

🐶 Generated 3 files!

     ✔ src/components/model/Student/Student/index.ts
     ✔ src/components/model/Student/Student/StudentList.tsx
     ✔ src/components/model/Student/Student/StudentList.stories.tsx


```

② when the component describes list of model, use this command at first.
```zsh
npx scaffdog generate mcl
```

Then, scaffdog will ask you some questions. This is an example of creating Student List Component, which is related to Student model.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Which model? student # Enter model name. Multiple words are also fine.
? Plese enter component name student list # Enter component name. Multiple words are also fine.

🐶 Generated 3 files!

     ✔ src/components/model/Student/StudentList/index.ts
     ✔ src/components/model/Student/StudentList/StudentList.tsx
     ✔ src/components/model/Student/StudentList/StudentList.stories.tsx


```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/model-component.md). You can customize this file.

**Create a new page component**

When you create a new page component, use this command at first.

```zsh
npx scaffdog generate pc
```

Then, scaffdog will ask you some questions. This is an example of creating About page component.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Please enter component name about # Enter component name. Multiple words are also fine.

🐶 Generated 4 files!

     ✔ src/components/page/About/index.ts
     ✔ src/components/page/About/Page.tsx
     ✔ src/components/page/About/View.tsx
     ✔ src/components/page/About/About.stories.tsx


```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/page-component.md). You can customize this file.

**Create a new ui component**

When you create a new component indifferent to model, use this command at first.

```zsh
npx scaffdog generate uc
```

Then, scaffdog will ask you some questions. This is an example of creating Button component.

```zsh

? Please select the output destination directory. . # Choose root(.)
? Please enter component name button # Enter component name. Multiple words are also fine.

🐶 Generated 2 files!

     ✔ src/components/ui/Button/index.tsx
     ✔ src/components/ui/Button/Button.stories.tsx


```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/ui-component.md). You can customize this file.
