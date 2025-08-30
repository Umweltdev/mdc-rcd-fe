'use client'
import React from 'react';
import FloatingBlobs from './_components/FloatingBlob';
import Footer from './_components/Footer';
import Header from './_components/Header';
import How from './_components/How';
import Demo from './_components/Demo';
import Referral from './_components/Referral';
import Benefit from './_components/Benefit';
import Stats from './_components/Stats';
import CTA from './_components/CTA';
import Hero from './_components/Hero';

const LandingPage = () => {

  return (
    <div>
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* How It Works Section */}
      <How/>

      {/* Interactive Demo */}
      <Demo/>

      {/* Referral Network Section */}
      <Referral/>

      {/* Benefits Grid */}
      <Benefit/>

      {/* Stats Section */}
      <Stats/>

      {/* CTA Section */}
      <CTA/>

      {/* Footer */}
      <Footer/>
      {/* FloatingBlobs */}
      <FloatingBlobs/>
    </div>
  );
};

export default LandingPage;