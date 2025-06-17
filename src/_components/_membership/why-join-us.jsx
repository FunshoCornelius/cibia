import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";

function WhyJoinUs() {
    return (
        <section className={"py-8 flex flex-col gap-6 items-center"}>
            <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center">
                Why Join Us?
            </h2>
            <p className={"lg:max-w-5xl md:max-w-3xl mx-auto text-center lg:text-xl md:text-lg text-sm "}>
                At the forefront of innovation in business intelligence and analytics, our platform offers you more than
                just membership—it’s a gateway to professional growth, industry recognition, and global impact. Here's
                why professionals like you are joining us:
            </p>
            <Link href={'/about/#why-join-us'}>
                <Button>
                    See More
                </Button>
            </Link>
        </section>
    )
}

export default WhyJoinUs
