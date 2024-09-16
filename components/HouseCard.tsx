import React from 'react'
import { Card, CardHeader, CardContent } from './ui/card'
import Image from 'next/image'

export default function HouseCard() {
  return (
    <>
        <Card className="min-w-[200px]">
            <CardHeader title="House">
                <Image 
                  src="https://source.unsplash.com/random/200x200?house" 
                  alt="House" 
                  width={200} 
                  height={200} 
                />   
            </CardHeader>
            <CardContent>
                <h2 className="text-2xl font-bold">House Name</h2>
                <p className="text-sm">House Description</p>
                <p className="text-sm">House Price</p>
            </CardContent>
        </Card>
    </>
  )
}