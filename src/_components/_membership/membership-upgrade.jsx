"use client";

import React, {useState} from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {upgradeOptions} from "@/constants";

function MembershipUpgrade() {
    const [_, setSelected] = useState(null);

    return (
        <section className="mb-8">
            <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center mb-10">
                Membership Upgrade
            </h2>
            <p className="text-center text-muted-foreground mb-10">
                Unlock new professional designations and access more benefits by
                upgrading your membership.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {upgradeOptions.map((option, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <Card
                                onClick={() => setSelected(option)}
                                className="cursor-pointer lg:hover:scale-105 all bg-stone-100 duration-300"
                            >
                                <CardContent className="p-6">
                                    <CardTitle className="mb-2">{option.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {option.short}
                                    </p>
                                    <p className="text-xs font-semibold text-primary">
                                        Designation: {option.designation}
                                    </p>
                                    <span className={'text-xs mt-6'}>More Info &rarr;</span>
                                </CardContent>
                            </Card>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                                <DialogTitle>{option.title}</DialogTitle>
                                <DialogDescription className="text-sm text-muted-foreground">
                                    Designation: <strong>{option.designation}</strong>
                                </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4">
                                <p className="mb-4 text-sm text-gray-700">
                                    {option.condition}
                                </p>
                                <h4 className="font-semibold mb-2">Requirements:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                    {option.details.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </section>
    );
}

export default MembershipUpgrade;
