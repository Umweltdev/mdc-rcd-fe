'use client'
import { TrendingUp, Gift } from 'lucide-react'
import React, { useState, useEffect } from 'react'

function How() {
  const [mounted, setMounted] = useState(false)
  const [mcdHovered, setMcdHovered] = useState(false)
  const [rcdHovered, setRcdHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>      
      <div className="relative py-20 px-5 overflow-hidden" id='How'>
        
        {/* Background Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className={`text-5xl font-black text-slate-900 text-center mb-16 transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Two Algorithms,
            </span>
            <br />
            Perfect Balance
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* MCD Card */}
            <div 
              className={`glass-card rounded-3xl transition-all duration-700 hover:scale-[1.02] ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
              onMouseEnter={() => setMcdHovered(true)}
              onMouseLeave={() => setMcdHovered(false)}
            >
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transition-all duration-500 icon-mcd ${
                    mcdHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    <TrendingUp size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 leading-tight">
                    Marketing Cost<br />Displacement
                  </h3>
                </div>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  When advertising costs rise, prices automatically adjust to maintain profitability. 
                  No more losing money on marketing campaigns.
                </p>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-sm font-bold text-slate-500 mb-4 tracking-wider">
                    REAL EXAMPLE
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Weekly ad spend:</span>
                      <span className="font-bold text-slate-800 text-lg">$1,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Revenue ratio:</span>
                      <span className="font-bold text-slate-800 text-lg">10%</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                      <span className="text-slate-600">Price adjustment:</span>
                      <span className="font-black text-red-500 text-2xl">+8.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RCD Card */}
            <div 
              className={`glass-card rounded-3xl transition-all duration-700 hover:scale-[1.02] ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
              onMouseEnter={() => setRcdHovered(true)}
              onMouseLeave={() => setRcdHovered(false)}
            >
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center transition-all duration-500 icon-rcd ${
                    rcdHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    <Gift size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 leading-tight">
                    Returning Customer<br />Discount
                  </h3>
                </div>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Regular customers automatically earn increasing discounts. The more you shop, 
                  the more you save - no loyalty cards needed.
                </p>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-sm font-bold text-slate-500 mb-4 tracking-wider">
                    CUSTOMER PROFILES
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Sarah (monthly, $200):</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
                        8.5% off
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">John (weekly, $50):</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
                        12.3% off
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">New customer:</span>
                      <span className="font-semibold text-slate-500">0% (builds over time)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default How