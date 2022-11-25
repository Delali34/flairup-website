import React, { Suspense, lazy } from "react";
import Navbar from "../comp/Navbar";
import Video from "../comp/Video";
import OurWorks from "../comp/OurWorks";

const What = lazy(() => import("../comp/What"));
const Toggle = lazy(() => import("../comp/Toggle"));
const Message = lazy(() => import("../comp/Message"));
const Footer = lazy(() => import("../comp/Footer"));
const Mobile = lazy(() => import("../comp/Mobile"));
const Ourmission = lazy(() => import("../comp/Ourmission"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>
      <Video />
      <Suspense fallback={<div />}>
        <What />
      </Suspense>
      <Suspense fallback={<div />}>
        <Toggle />
      </Suspense>
      <Suspense fallback={<div />}>
        <Mobile />
      </Suspense>
      <OurWorks />
      <Suspense fallback={<div />}>
        <Ourmission />
      </Suspense>
      <Suspense fallback={<div />}>
        <Message />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
