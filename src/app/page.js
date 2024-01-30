import Image from 'next/image'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main
      className={'relative min-h-screen w-full bg-sl-primary-green text-white'}
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
        <div className={'mt-[3rem] flex justify-end'}>
          <Button
            url={'/menu'}
            classes={
              'text-16 rounded-[1.5rem] px-[2.8rem] py-[1rem] font-[900] bg-sl-primary-white text-sl-primary-green flex gap-x-[1.3rem] items-center'
            }
            type={'link'}
          >
            <p>Start</p>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="9056976_arrow_long_right_icon 1">
                <path
                  id="Vector"
                  d="M24.0289 12.4926L19.6021 8.08061L18.1314 9.55623L20.0432 11.4617L0.971327 11.4596L0.9711 13.5429L20.0384 13.545L18.1412 15.4487L19.6168 16.9194L24.0289 12.4926Z"
                  fill="#97DAAA"
                />
              </g>
            </svg>
          </Button>
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
