import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Display from './Display'

test('muestra correctamente diferentes valores en el display', () => {
  const values = ["123", "456", "789", "0", "ERROR"]
  values.forEach(value => {
    const { getByText } = render(<Display value={value} />)
    const displayElement = getByText(new RegExp(value, 'i'))
    expect(displayElement).toBeInTheDocument()
  })
})

test('maneja valores de longitud máxima y muestra "ERROR" correctamente', () => {
  const maxValue = "123456789"
  const { getByText, rerender } = render(<Display value={maxValue} />)
  let displayElement = getByText(new RegExp(maxValue, 'i'))
  expect(displayElement).toBeInTheDocument()

  const errorValue = "ERROR"
  rerender(<Display value={errorValue} />)
  displayElement = getByText(new RegExp(errorValue, 'i'))
  expect(displayElement).toBeInTheDocument()
})

test('maneja valores largos y muestra "ERROR" para valores fuera de rango', () => {
  const longValue = "12345678901234567890"
  const { getByText } = render(<Display value={longValue} />)
  const displayElement = getByText(/ERROR/)
  expect(displayElement).toBeInTheDocument()
  expect(displayElement.textContent).toBe("ERROR") // El display debería mostrar "ERROR" para valores largos
})

test('muestra "ERROR" para números mayores a 999999999', () => {
  const largeNumber = "1000000000"
  const { getByText } = render(<Display value={largeNumber} />)
  const displayElement = getByText(/ERROR/)
  expect(displayElement).toBeInTheDocument()
  expect(displayElement.textContent).toBe("ERROR") // El display debería mostrar "ERROR" para números mayores a 999999999
})
