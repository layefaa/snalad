'use client'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header
        className={
          'container fixed z-20  flex h-[5rem] w-full items-center bg-sl-primary-white'
        }
      >
        <p className={'text-20 font-[900] text-sl-secondary-black'}>
          <Link href={'/menu'}>Sna-lad</Link>
        </p>
      </header>
      <main className={' relative mt-[6rem] w-full bg-white'}>{children}</main>
    </>
  )
}
