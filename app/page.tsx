"use client";
import PromoCountdownHeader from "@/components/PromoCountdown";
import SuccessHeroSlider from "@/components/SuccessHeroSlider";
import { useMemo, useState, useEffect } from "react";
import ReviewsTicker from "@/components/ReviewsTicker";
import { WhopCheckoutEmbed, useCheckoutEmbedControls } from "@whop/checkout/react";
import LoadingScreen from "@/components/LoadingScreen";
import { FaXTwitter, FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaGlobe } from "react-icons/fa6";

import { gaEvent } from "./(lib)/ga";

export default function Checkout() {
  const ref = useCheckoutEmbedControls();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <LoadingScreen />
    ) : (
    <main className="page-bg min-h-screen px-4 pt-8">
      <div className="max-w-[1470px] mx-auto">
        {/* FOMO Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-green-800 font-semibold font-body">
              <span className="font-bold">5,000+ Active Resellers</span> • <span className="font-bold">1,000+ 5-Star Reviews</span> • <span className="font-bold">Limited Spots Available</span>
            </p>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <PromoCountdownHeader title="Your Spot is Reserved for the Next:" seconds={180} />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Main Content */}
          <div className="space-y-10">
            <section className="text-center">
              <h1 className="font-display text-4xl font-extrabold tracking-tight leading-tight text-gray-900">
                Get Our <span className="text-[#7a3cff]">Secret Clearance</span>
                <br />
                AI Software
                <br />
                <span className="text-[#7a3cff]">5,000+ Resellers</span> Use
              </h1>
              <p className="mt-4 text-lg text-gray-600 font-body">
                $0 Upfront - Cancel Anytime - Join 5,000+ Active Users
              </p>
            </section>

            <SuccessHeroSlider
              items={[
                { src: "/success/vanity.jpg", caption: "REDWAKE - $0.01 VANITY SOLD FOR $250" },
                { src: "/success/pokemon.jpg", caption: "RYAN - POKEMON $180 PROFIT SECURED" },
                { src: "/success/chairs.png.jpg", caption: "JEFFREY - $250 PROFIT FROM CHAIRS" },
                { src: "/success/garage.jpg", caption: "DEBRA - GARAGE DOOR OPENER FOR $0.01" },
                { src: "/success/pennyitem.jpg", caption: "ILIA - $600 DOWN TO $0.06" },
              ]}
            />
            <ReviewsTicker />

            {/* Social Proof Statistics */}
            <section className="bg-gray-50 rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">Join the Success</h3>
                <p className="text-gray-600 font-body">See why thousands choose eMoney Deals</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 font-heading">5,000+</div>
                  <div className="text-sm text-gray-600 font-body">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 font-heading">$2.3M+</div>
                  <div className="text-sm text-gray-600 font-body">Total Profits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 font-heading">1,000+</div>
                  <div className="text-sm text-gray-600 font-body">5-Star Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 font-heading">94%</div>
                  <div className="text-sm text-gray-600 font-body">Success Rate</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Checkout and Reviews */}
          <div className="space-y-8">
            <section id="checkout">
              <div className="card p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-2 font-heading">FREE TRIAL</div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
                    <p className="text-green-800 font-bold font-body text-lg">
                      Start Your Risk-Free Trial Today
                    </p>
                    <p className="text-green-700 font-body text-sm mt-1">
                      No credit card required • Cancel anytime • Full access included
                    </p>
                  </div>
                </div>
                
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <WhopCheckoutEmbed
                    ref={ref}
                    planId="plan_QOk7Ldw02rMJH"
                    theme="light"
                    fallback={<LoadingScreen />}
                  />
                </div>
                
                <div className="mt-4 space-y-2">
                  <p className="text-center text-sm text-gray-500 font-body">Secured by Whop • Encrypted checkout</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-600 font-body">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      SSL Protected
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Instant Access
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Money Back Guarantee
                    </span>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>

        {/* Final Ur */}

        {/* Enhanced Footer */}
        <footer className=" border-t bg-white/50 border-gray-200 mt-12">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-3">EMONEY Free Trial</h3>
                <p className="text-sm text-gray-600">
                  Find the best local deals and clearance items near you.
                </p>
              </div>

              <div>
                <h4 className="font-heading mb-3">Quick Links</h4>
                <ul className="text-sm space-y-2 text-gray-600 font-body">
                  <li><a href="/" className="hover:text-brand-purple">Home</a></li>
                  <li><a href="#" className="hover:text-brand-purple">How It Works</a></li>
                  <li><a href="#" className="hover:text-brand-purple">About Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading mb-3">Support</h4>
                <ul className="text-sm space-y-2 text-gray-600 font-body">
                  <li><a href="/contact" className="hover:text-brand-purple">Contact Us</a></li>
                  <li><a href="/faq" className="hover:text-brand-purple">FAQ</a></li>
                  <li><a href="/help" className="hover:text-brand-purple">Help Center</a></li>
                  <li><a href="/support" className="hover:text-brand-purple">Customer Support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading mb-3">Legal</h4>
                <ul className="text-sm space-y-2 text-gray-600 font-body">
                  <li><a href="/privacy" className="hover:text-brand-purple">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-brand-purple">Terms of Service</a></li>
                  <li><a href="/cookies" className="hover:text-brand-purple">Cookie Policy</a></li>
                  <li><a href="/refund" className="hover:text-brand-purple">Refund Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-5 text-gray-500">
                    <a href="https://x.com/eMoney_HQ" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-gray-700">
                        <FaXTwitter className="text-xl" />
                    </a>
                    <a href="https://instagram.com/nick.hustles" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-700">
                        <FaInstagram className="text-xl" />
                    </a>
                    <a href="https://www.youtube.com/@samdebaets767" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gray-700">
                        <FaYoutube className="text-xl" />
                    </a>
                    <a href="https://tiktok.com/@sam.hustles" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-gray-700">
                        <FaTiktok className="text-xl" />
                    </a>
                    <a href="https://facebook.com/people/Emoney-Deals/61554122287343" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-700">
                        <FaFacebook className="text-xl" />
                    </a>
                    <a href="https://www.joinemoney.com/register" target="_blank" rel="noopener noreferrer" aria-label="Join eMoney" className="hover:text-gray-700">
                        <FaGlobe className="text-xl" />
                    </a>
                </div>

            <div className="pt-6 border-t border-gray-200 text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} EMONEY Deals. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
    )
  )  
}
