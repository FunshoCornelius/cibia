import MembershipCategories from "@/_components/_membership/membership-categories";
import MembershipHero from "@/_components/_membership/membership-hero";
import WhyJoinUs from "@/_components/_membership/why-join-us";
import MembershipUpgrade from "@/_components/_membership/membership-upgrade";
import AnnualSubscription from "@/_components/_membership/annual-subscription";

export default function MembershipPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800  ">
            <MembershipHero/>
            <WhyJoinUs/>
            <MembershipCategories/>
            <MembershipUpgrade/>
            <AnnualSubscription/>
        </main>
    );
}
