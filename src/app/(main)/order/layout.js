'use client'
import { useRouter } from 'next/navigation'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <header
        className={
          'container fixed z-10 flex h-[5rem] w-full items-center bg-sl-primary-white'
        }
      >
        <div
          onClick={() => router.push('/menu')}
          className={'flex items-center '}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M0.971172 12.5074L5.39794 16.9194L6.86867 15.4438L4.9568 13.5383L24.0287 13.5404L24.0289 11.4571L4.96159 11.455L6.85888 9.55124L5.38326 8.08061L0.971172 12.5074Z"
              fill="#4F4F4F"
            />
          </svg>
          <p className={'ml-[1rem] text-16 font-[600] text-sl-secondary-black'}>
            Back
          </p>
        </div>
      </header>
      <main className={' relative min-h-dvh w-full bg-white'}>{children}</main>
      <footer
        className={
          'fixed bottom-0 flex h-[4.5rem] w-full items-center justify-center bg-sl-primary-white text-12 text-sl-secondary-black'
        }
      >
        <p className={''}>Copyright - Azubi-team, E Center Hawig</p>
      </footer>
    </>
  )
}
