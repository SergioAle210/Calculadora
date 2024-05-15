import Display from './Display'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    value: { control: 'text' },
    className: { control: 'text' }
  }
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '123456789',
  className: 'display'
}

export const Error = Template.bind({})
Error.args = {
  value: 'ERROR',
  className: 'display'
}

export const Empty = Template.bind({})
Empty.args = {
  value: '',
  className: 'display'
}
