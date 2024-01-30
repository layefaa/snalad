'use client'
import { useRouter } from 'next/navigation'

const Button = ({ children, type = 'action', url, handleAction, classes }) => {
  const router = useRouter()
  const classNames = ` text-16 hover:scale-2  ${classes}`
  const handleNavigation = (url) => router.push(url)

  switch (type) {
    case 'action':
      return (
        <button onClick={handleAction} className={` ${classNames}`}>
          {children}
        </button>
      )
    case 'link':
      return (
        <button
          onClick={() => handleNavigation(url)}
          className={` ${classNames}`}
        >
          {children}
        </button>
      )
    default:
      throw new Error('No Type of Button')
  }
}

export default Button
