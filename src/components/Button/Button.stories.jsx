import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    value: { control: 'text' },
    className: { control: 'text' }
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '1',
  className: 'button'
}

export const Operator = Template.bind({})
Operator.args = {
  value: '+',
  className: 'button operator'
}

export const Clear = Template.bind({})
Clear.args = {
  value: 'C',
  className: 'button clear'
}

export const Equal = Template.bind({})
Equal.args = {
  value: '=',
  className: 'button equal'
}

export const Mult = Template.bind({})
Mult.args = {
  value: '*',
  className: 'button operator'
}