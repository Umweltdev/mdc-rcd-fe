'use client'
import React, { useState } from 'react'
import { styles } from '../utils'

function Demo() {
  const [marketingSpend, setMarketingSpend] = useState(500)
  const [customerSpend, setCustomerSpend] = useState(1000)
  const [visits, setVisits] = useState(12)

  const [basePrice] = useState(100)

  // Calculate MCD multiplier
  const mcdMultiplier = 1 + (marketingSpend / 5000) * 0.87
  const priceAfterMCD = basePrice * mcdMultiplier

  // Calculate RCD discount
  const vectorMagnitude = Math.sqrt(
    Math.pow(customerSpend * 2, 2) + Math.pow(visits, 2)
  )
  const normalizedMagnitude = vectorMagnitude / 2000
  const rcdDiscount = Math.min(normalizedMagnitude * 20, 20)
  const finalPrice = priceAfterMCD * (1 - rcdDiscount / 100)

  return (
    <div className="px-5 py-16" id='demo'>
      <div className="max-w-[1200px] mx-auto">
        <div style={styles.glassCard}>
          <div className="p-16">
            <h2 className="text-4xl font-bold gradient-text text-center mb-10">
              See It In Action
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Controls */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  Adjust the Parameters
                </h3>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-700">
                    Marketing Spend: ${marketingSpend}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={marketingSpend}
                    onChange={(e) => setMarketingSpend(Number(e.target.value))}
                    className="w-full h-2 rounded bg-gray-200 cursor-pointer"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-700">
                    Customer Total Spend: ${customerSpend}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={customerSpend}
                    onChange={(e) => setCustomerSpend(Number(e.target.value))}
                    className="w-full h-2 rounded bg-gray-200 cursor-pointer"
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-700">
                    Customer Visits: {visits}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={visits}
                    onChange={(e) => setVisits(Number(e.target.value))}
                    className="w-full h-2 rounded bg-gray-200 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Calculation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-6">
                  Live Price Calculation
                </h3>

                <div className="bg-gray-50 rounded-xl p-6">
                  {/* Base price */}
                  <div className="mb-5 pb-5 border-b-2 border-gray-200">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-500">Base Price:</span>
                      <span className="text-xl font-semibold text-gray-800">
                        ${basePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* MCD */}
                  <div className="mb-5">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-500">MCD Multiplier:</span>
                      <span className="font-semibold text-red-500">
                        ×{mcdMultiplier.toFixed(3)}
                      </span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-500">After MCD:</span>
                      <span className="text-lg font-semibold text-gray-800">
                        ${priceAfterMCD.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* RCD */}
                  <div className="mb-5">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-500">RCD Discount:</span>
                      <span className="font-semibold text-green-500">
                        -{rcdDiscount.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Final Price */}
                  <div className="pt-5 border-t-2 border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-700">
                        Final Price:
                      </span>
                      <span className="text-2xl font-bold text-indigo-500">
                        ${finalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
