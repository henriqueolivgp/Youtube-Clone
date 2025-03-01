import Image from 'next/image'

export const Mic = () =>{
  return(
    <>
              <section className="flex end-0 justify-center items-center w-10 h-10 rounded-full bg-neutral-800">
                {/* <Mic size={20} color="white"/> */}
                <Image
                  alt="Mic"
                  src="/Icons/mic.svg"
                  width={25}
                  height={25}
                  className="fill-white"
                />
              </section>
    </>
  )
}