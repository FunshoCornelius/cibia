import React from "react";

import QualificationsHeader from "@/_components/_qualifications/header";
import QualificationsOverview from "@/_components/_qualifications/overview";
import QualificationPathway from "@/_components/_qualifications/pathway";
import QualificationCTA from "@/_components/_qualifications/cta";

const CIBIAQualifications = () => {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <QualificationsHeader />
      <QualificationsOverview />
      <QualificationPathway />
      {/* <QualificationStories /> */}
      <QualificationCTA />
    </main>
  );
};

export default CIBIAQualifications;
