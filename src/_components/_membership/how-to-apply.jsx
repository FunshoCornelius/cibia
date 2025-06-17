import React from "react";

function HowToApply() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">How to Apply</h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <Image
          src="/images/apply.jpg"
          alt="Application process"
          width={600}
          height={350}
          className="rounded-lg"
        />
        <div>
          <p className="text-lg mb-4">
            Visit the application portal, select your membership type, and
            upload all required credentials. Ensure your information is accurate
            before submission.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowToApply;
