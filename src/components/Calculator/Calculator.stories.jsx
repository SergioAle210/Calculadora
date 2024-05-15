import Calculator from './Calculator'

export default {
  title: 'Components/Calculator',
  component: Calculator,
  argTypes: {},
}

const Template = (args) => <Calculator {...args} />

export const Default = Template.bind({})
Default.args = {}
