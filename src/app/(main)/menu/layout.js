export default function Layout({ children }) {
  return (
    <>
      <header
        className={
          'container fixed z-20 mb-[7rem] flex h-[7rem] w-full items-center bg-sl-primary-white'
        }
      >
        <p className={'text-20 font-[900] text-sl-secondary-black'}>Sna-lad</p>
      </header>
      <main className={' relative mt-[7rem] min-h-screen w-full bg-white'}>
        {children}
      </main>
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
