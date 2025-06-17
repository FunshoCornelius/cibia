import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {aboutFeatures} from "@/constants";
import {BadgeCheck, BookOpenCheck, FileSearch, GraduationCap, TrendingUp, Users,} from "lucide-react";

function WhyJoinUs() {
    return (
        <section id={"why-join-us"} className="mt-20 max-w-5xl px-4 mx-auto">
            <h2 className="md:text-3xl text-xl font-bold text-center text-slate-900 mb-10">
                Why Join CIBIA?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutFeatures.map((item, index) => {
                    const Icon =
                        index === 0
                            ? BadgeCheck
                            : index === 1
                                ? TrendingUp
                                : index === 2
                                    ? Users
                                    : index === 3
                                        ? BookOpenCheck
                                        : index === 4
                                            ? FileSearch
                                            : index === 5
                                                ? GraduationCap
                                                : "";

                    return (
                        <Card
                            key={index}
                            className={`shadow-sm group hover:scale-105 transition-all duration-500 ${item.bgColor}`}
                        >
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <Icon
                                        className={`w-6 h-6 transition-colors duration-300 ${
                                            item.preserveTextOnHover ? "" : "group-hover:text-white"
                                        }`}
                                        color={item.iconColor}
                                    />
                                </div>
                                <h3
                                    className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                                        item.preserveTextOnHover
                                            ? "text-slate-800"
                                            : "text-white group-hover:text-white"
                                    }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-sm transition-colors duration-300 ${
                                        item.preserveTextOnHover
                                            ? "text-slate-600"
                                            : "text-white group-hover:text-white"
                                    }`}
                                >
                                    {item.desc}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}

export default WhyJoinUs;
