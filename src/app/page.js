import Image from 'next/image'
export default function Home() {
  return (
    <main
      className={'relative  min-h-screen w-full bg-sl-primary-green text-white'}
    >
      <section className={'flex w-full flex-col px-[1.5rem] pt-[10vh]'}>
        <div>
          <h2 className={'font-[900]'}>Willkommen bei</h2>
          <h1 className={'font-[900] underline underline-offset-8'}>
            {' '}
            Sna-lad
          </h1>
          <p className={'mt-[1rem] font-[500] text-sl-secondary-black'}>
            Azubi U21 Project E-Center Hawig
          </p>
        </div>
        <div className={'mt-[3rem]'}>
          <Image
            className={'aspect-[0.867] w-full'}
            src="/img/hero.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="absolute bottom-0 flex w-full justify-center pb-[1.7rem]">
          <p className={'text-12 text-sl-secondary-black'}>
            Copyright - Azubi-team, E Center Hawig
          </p>
        </div>
      </section>
    </main>
  )
}
