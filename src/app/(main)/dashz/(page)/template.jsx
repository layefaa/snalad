'use client'
import { usePathname } from 'next/navigation'

export default function Template({ children }) {
  const pathname = usePathname()

  function extractTrailingWord(text) {
    const trailingWord = text.match(/\/([^/]*)$/)?.[1] ?? ''
    if (!trailingWord) {
      return text
    }
    return trailingWord
  }

  return (
    <div className={''}>
      <div
        className={
          'container flex h-[4rem] items-center bg-sl-primary-white text-16 font-bold capitalize'
        }
      >
        <p>{extractTrailingWord(pathname)}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}
