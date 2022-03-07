import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TopPageView } from "@/components/page/Top/View"

export default {
  title: "Page/Top",
  component: TopPageView,
} as ComponentMeta<typeof TopPageView>

const Template: ComponentStory<typeof TopPageView> = (args) => (
  <TopPageView {...args} />
)

export const Default = Template.bind({})
Default.args = {}
