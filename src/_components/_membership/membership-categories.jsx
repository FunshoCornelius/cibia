import React from "react";
import {Card, CardContent} from "@/components/ui/card";

import {membershipCategories} from "@/constants";

function MembershipCategories() {
    return (
        // <section className="mb-16">
        //   <h2 className="text-3xl font-semibold mb-8 text-center">
        //     Membership Categories
        //   </h2>
        //   <Tabs defaultValue="student" className="w-full">
        //     <TabsList className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        //       <TabsTrigger value="student">Student</TabsTrigger>
        //       <TabsTrigger value="graduate">Graduate</TabsTrigger>
        //       <TabsTrigger value="associate">Associate (ACIBIA)</TabsTrigger>
        //       <TabsTrigger value="full">Full (MCIBIA)</TabsTrigger>
        //       <TabsTrigger value="fellow">Fellow (FCIBIA)</TabsTrigger>
        //     </TabsList>

        //     <TabsContent value="student">
        //       <Card>
        //         <CardContent className="p-6">
        //           <Image
        //             src="/images/student.jpg"
        //             alt="Student membership"
        //             width={600}
        //             height={300}
        //             className="rounded-lg mb-4"
        //           />
        //           <h3 className="text-2xl font-bold mb-2">Student Membership</h3>
        //           <p>
        //             Designed for undergraduates pursuing a career in business
        //             intelligence. Gain access to resources and mentorship.
        //           </p>
        //         </CardContent>
        //       </Card>
        //     </TabsContent>

        //     <TabsContent value="graduate">
        //       <Card>
        //         <CardContent className="p-6">
        //           <Image
        //             src="/images/graduate.jpg"
        //             alt="Graduate membership"
        //             width={600}
        //             height={300}
        //             className="rounded-lg mb-4"
        //           />
        //           <h3 className="text-2xl font-bold mb-2">Graduate Membership</h3>
        //           <p>
        //             For recent graduates who are transitioning into the business
        //             intelligence field.
        //           </p>
        //         </CardContent>
        //       </Card>
        //     </TabsContent>

        //     <TabsContent value="associate">
        //       <Card>
        //         <CardContent className="p-6">
        //           <Image
        //             src="/images/associate.jpeg"
        //             alt="Associate member"
        //             width={600}
        //             height={300}
        //             className="rounded-lg mb-4"
        //           />
        //           <h3 className="text-2xl font-bold mb-2">
        //             Associate Membership (ACIBIA)
        //           </h3>
        //           <p>
        //             For professionals with 2+ years of experience in data analysis,
        //             visualization, or BI systems.
        //           </p>
        //         </CardContent>
        //       </Card>
        //     </TabsContent>

        //     <TabsContent value="full">
        //       <Card>
        //         <CardContent className="p-6">
        //           <Image
        //             src="/images/full.jpeg"
        //             alt="Full member"
        //             width={600}
        //             height={300}
        //             className="rounded-lg mb-4"
        //           />
        //           <h3 className="text-2xl font-bold mb-2">
        //             Full Membership (MCIBIA)
        //           </h3>
        //           <p>
        //             Recognizes professionals who have made significant contributions
        //             in the field of business intelligence.
        //           </p>
        //         </CardContent>
        //       </Card>
        //     </TabsContent>

        //     <TabsContent value="fellow">
        //       <Card>
        //         <CardContent className="p-6">
        //           <Image
        //             src="/images/fellow.webp"
        //             alt="Fellow member"
        //             width={600}
        //             height={300}
        //             className="rounded-lg mb-4"
        //           />
        //           <h3 className="text-2xl font-bold mb-2">Fellowship (FCIBIA)</h3>
        //           <p>
        //             Reserved for seasoned experts who demonstrate exceptional
        //             leadership in BI practices.
        //           </p>
        //         </CardContent>
        //       </Card>
        //     </TabsContent>
        //   </Tabs>
        // </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center mb-10">
                Membership Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {membershipCategories.map((item, idx) => (
                    <Card
                        key={idx}
                        className={`${item.bgColor} shadow-xl border border-slate-200 lg:hover:scale-105 transition-transform duration-300`}
                    >
                        <CardContent className="p-6">
                            <h3 className="font-semibold lg:text-xl text-md mb-2">{item.title}</h3>
                            <ul className="text-sm text-slate-700 list-disc list-outside pl-4 flex flex-col gap-1">
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default MembershipCategories;
