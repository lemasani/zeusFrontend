import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import HouseCard from '@/components/HouseCard'

export default function Home() {
  return (
    <main className="min-h-screen">
        <section  className="hero min-h-[35vh] w-full bg-gray-600 p-10 text-white flex-col items-center justify-center bg-gradient-to-r from-custom-blue-1 via-custom-blue-2 to-custom-blue-3">
          <div className="welcome-text">
            <h1 className="text-4xl font-bold text-center mb-5">
              Find your Perfect Home Away from Home
            </h1>

            <p className="text-center text-lg">
              Find the best houses for rent in your city
            </p>

          </div>
          <div className="searchbar flex items-center justify-evenly py-2 mt-5">
            <Input placeholder="Search for houses by location" className='Inputwidith' />
            <Button> Search </Button>
          </div>

        </section>
      <div className="container mx-auto p-20">


        <h2 className='text-2xl text-center mb-5'>Featured Houses for <span className='text-[#063a80]  font-semibold'>Rent</span> </h2>
        <div className="houselist grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>

      </div>
    </main>
  )
}