import React from "react";
import quickWatchOne from "../../assets/images/quick-watch-one.png";
import QuickWatchVids from "./QuickWatchVids";

function QuickWatch() {
  return (
    <section className="px-4 md:px-8 lg:px-14">
      <h3 className="text-4xl md:text-6xl font-medium text-center">
        Quick watch
      </h3>
      <div className="flex flex-col gap-12 mt-10">
        <QuickWatchVids img={quickWatchOne} />
        <QuickWatchVids img={quickWatchOne} />
      </div>
    </section>
  );
}

export default QuickWatch;
