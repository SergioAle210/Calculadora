import { test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('Renders correctly', () => {
    render(<Button />)
 })

test('Muestra el valor del botón', () => {
  const { getByText } = render(<Button value="1" onClick={() => {}} />)
  const buttonElement = getByText(/1/i)
  expect(buttonElement).toBeInTheDocument()
})

test('muestra correctamente diferentes valores del botón', () => {
    const values = ["1", "2", "+", "-", "*", "/"]
    values.forEach(value => {
      const { getByText } = render(<Button value={value} onClick={() => {}} />)
      const buttonElement = getByText(new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i')) // Escapar caracteres especiales
      expect(buttonElement).toBeInTheDocument()
    })
})
  
test('llama a la función onClick cuando se hace clic en el botón', () => {
    const handleClick = vi.fn()
    const { getByText } = render(<Button value="5" onClick={handleClick} />)
    const buttonElement = getByText(/5/i)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith("5")
})
  
test('maneja valores especiales como operadores matemáticos', () => {
    const handleClick = vi.fn()
    const operators = ["+", "-", "*", "/"]
    operators.forEach(operator => {
      const { getByText } = render(<Button value={operator} onClick={handleClick} />)
      const buttonElement = getByText(new RegExp(`\\${operator}`, 'i')) // Escapar caracteres especiales
      fireEvent.click(buttonElement)
      expect(handleClick).toHaveBeenCalledWith(operator)
    })
})