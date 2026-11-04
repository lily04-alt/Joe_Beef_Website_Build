/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuOfferings } from './components/MenuOfferings';
import { AboutSection } from './components/AboutSection';
import { TrustReassurance } from './components/TrustReassurance';
import { ReservationSection } from './components/ReservationSection';
import { LocationVisit } from './components/LocationVisit';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 selection:bg-red-900 selection:text-white">
      {/* Primary Top Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 2. Services & Menu Offerings */}
        <MenuOfferings onOpenReservation={handleOpenReservation} />

        {/* 3. About the Restaurant */}
        <AboutSection />

        {/* 4. Trust & Experience Reassurance */}
        <TrustReassurance />

        {/* 5. Online Reservation Engine */}
        <ReservationSection />

        {/* 6. Location, Hours & Direct Contact */}
        <LocationVisit onOpenReservation={handleOpenReservation} />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* 9. Mobile Sticky Action Bar */}
      <MobileBottomBar onOpenReservation={handleOpenReservation} />

      {/* 10. Instant Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={handleCloseReservation} />
    </div>
  );
}
