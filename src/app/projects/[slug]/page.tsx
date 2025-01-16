"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ProjectPage({ params }:{ params: { slug:string } }) {

    return (
        <div className="h-[200vh] bg-black">
            <Navbar sections={[]}/>
            <div className="w-full h-1/4 mt-16 relative">
                <Image
                    src="/images/projects/booking.png"
                    alt="Project Image"
                    layout="fill" // Fill the container
                    className="object-cover object-top opacity-70"
                />
                <div className="container relative h-full flex flex-col justify-end gap-3 py-10">
                    <h2 className="text-3xl font-bold">{params.slug}</h2>
                    <p className="text-xl">A web app being used to allow students to book their favorite gaming stations in the NSCC Truro Campus E-Sports Lounge. Features an admin dashboard that allows staff to customize availability, edit game stations, see usage data and much more.</p>
                </div>
            </div>
        </div>
    );
  
  }