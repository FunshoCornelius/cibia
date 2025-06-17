import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {subscriptionTiers} from "@/constants";

export default function AnnualSubscription() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold text-center mb-10">
                    Annual Subscription
                </h2>
                <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                    An <strong>Annual Subscription</strong> is a yearly contribution paid
                    by students or members to support the sustainability and development
                    of the Institute. Payment is due every <strong>January 1st</strong>.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {subscriptionTiers.map((tier, index) => (
                        <Card
                            key={index}
                            className={`transition hover:scale-105 shadow-sm ${tier.bgColor}`}
                        >
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <CardTitle
                                    className={`text-xl font-semibold mb-2 ${tier.textColor}`}
                                >
                                    {tier.title}
                                </CardTitle>
                                <span
                                    className={`text-3xl font-bold ${tier.textColor}`}
                                >
                                  {tier.amount}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}