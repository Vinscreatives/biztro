"use client"

import { useState, useEffect, useRef } from 'react'
import { Edit, ArrowUpRight, TrendingUp, Palette, Type, Plus, Sparkles, Check } from 'lucide-react'

export function BiztroDemoAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Animation timeline
  const steps = [
    { name: 'setup', duration: 2000 },
    { name: 'customize', duration: 2500 },
    { name: 'add-links', duration: 2000 },
    { name: 'theme-switch', duration: 1500 },
    { name: 'publish', duration: 2000 },
    { name: 'analytics', duration: 2000 }
  ]

  useEffect(() => {
    let startTime = Date.now()
    let currentStepStart = Date.now()

    const animate = () => {
      if (isHovered) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const now = Date.now()
      const totalElapsed = now - startTime
      const stepElapsed = now - currentStepStart

      // Calculate which step we're on
      let stepIndex = 0
      let accumulatedTime = 0

      for (let i = 0; i < steps.length; i++) {
        accumulatedTime += steps[i].duration
        if (totalElapsed < accumulatedTime) {
          stepIndex = i
          break
        }
      }

      // Reset to beginning if we've completed all steps
      if (stepIndex >= steps.length) {
        startTime = now
        currentStepStart = now
        stepIndex = 0
      }

      setCurrentStep(stepIndex)

      // Calculate progress within current step
      const stepStart = stepIndex === 0 ? 0 : steps.slice(0, stepIndex).reduce((sum, step) => sum + step.duration, 0)
      const stepProgress = (totalElapsed - stepStart) / steps[stepIndex].duration
      setAnimationProgress(Math.min(stepProgress, 1))

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100/50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `
          radial-gradient(circle at 30% 40%, rgba(255, 251, 235, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(40, 40, 40, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(249, 250, 251, 0.8) 100%)
        `
      }}
    >
      {/* Browser Header */}
      <div className="bg-[#282828] px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 bg-[#282828]/50 rounded-md px-3 py-1 text-white/60 text-xs font-mono">
          biztro/yourbrand
        </div>
      </div>

      {/* Main Interface */}
      <div className="relative h-96 bg-gradient-to-br from-[#fffbeb]/20 to-white overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #282828 1px, transparent 1px),
                linear-gradient(to bottom, #282828 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Setup Step - Username Input */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          currentStep === 0 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#282828]">Choose your username</h3>
              <p className="text-gray-600">This will be your Biztro link</p>
            </div>
            <div className="relative max-w-xs mx-auto">
              <div className="flex items-center bg-white border-2 border-[#282828]/20 rounded-lg px-4 py-3 shadow-lg">
                <span className="text-[#282828]/60 font-mono text-sm mr-2">biztro/</span>
                <span className={`font-mono text-[#282828] transition-all duration-1000 ${
                  animationProgress > 0.3 ? 'opacity-100' : 'opacity-0'
                }`}>
                  yourbrand
                  <span className={`inline-block w-0.5 h-5 bg-[#282828] ml-1 animate-pulse ${
                    animationProgress > 0.6 ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                </span>
              </div>
              <div className={`absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                animationProgress > 0.8 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}>
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Customize Step - Theme Selection */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentStep === 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#282828] mb-2">Choose your theme</h3>
              <p className="text-gray-600 text-sm">Make it your own</p>
            </div>
            <div className="flex gap-3 justify-center">
              {['Modern', 'Minimal', 'Bold', 'Classic'].map((theme, index) => (
                <div
                  key={theme}
                  className={`w-16 h-16 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    index === Math.floor(animationProgress * 4) % 4
                      ? 'border-[#282828] bg-[#282828]/10 scale-110'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #fffbeb 0%, #f3f4f6 100%)' :
                              index === 1 ? 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' :
                              index === 2 ? 'linear-gradient(135deg, #282828 0%, #1f2937 100%)' :
                              'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Links Step */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentStep === 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#282828]">Your Links</h3>
              <button className={`flex items-center gap-2 px-4 py-2 bg-[#282828] text-white rounded-lg transition-all duration-300 ${
                animationProgress > 0.5 ? 'scale-105' : 'scale-100'
              }`}>
                <Plus className="w-4 h-4" />
                Add Link
              </button>
            </div>
            <div className="space-y-3">
              <div className={`bg-white border border-gray-200 rounded-lg p-4 transition-all duration-500 ${
                animationProgress > 0.2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#282828]">Instagram</div>
                    <div className="text-sm text-gray-500">@yourbrand</div>
                  </div>
                  <div className="w-8 h-8 bg-[#282828]/10 rounded flex items-center justify-center">
                    <Edit className="w-4 h-4 text-[#282828]" />
                  </div>
                </div>
              </div>
              <div className={`bg-white border border-gray-200 rounded-lg p-4 transition-all duration-500 ${
                animationProgress > 0.4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#282828]">Website</div>
                    <div className="text-sm text-gray-500">yourbrand.com</div>
                  </div>
                  <div className="w-8 h-8 bg-[#282828]/10 rounded flex items-center justify-center">
                    <Edit className="w-4 h-4 text-[#282828]" />
                  </div>
                </div>
              </div>
              <div className={`bg-white border border-gray-200 rounded-lg p-4 transition-all duration-500 ${
                animationProgress > 0.6 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#282828]">Contact</div>
                    <div className="text-sm text-gray-500">Get in touch</div>
                  </div>
                  <div className="w-8 h-8 bg-[#282828]/10 rounded flex items-center justify-center">
                    <Edit className="w-4 h-4 text-[#282828]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Switch Step */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentStep === 3 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-6">
              <div className={`w-24 h-24 mx-auto rounded-2xl transition-all duration-1000 ${
                animationProgress > 0.3 ? 'bg-[#282828] scale-110' : 'bg-[#fffbeb] scale-100'
              } flex items-center justify-center`}>
                <Palette className={`w-10 h-10 transition-colors duration-500 ${
                  animationProgress > 0.3 ? 'text-white' : 'text-[#282828]'
                }`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#282828] mb-2">Theme Applied</h3>
                <p className="text-gray-600">Your page looks amazing!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Publish Step */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentStep === 4 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className={`w-20 h-20 mx-auto rounded-full border-4 border-[#282828]/20 transition-all duration-1000 ${
                  animationProgress > 0.5 ? 'border-green-500 bg-green-50' : ''
                } flex items-center justify-center`}>
                  {animationProgress > 0.5 ? (
                    <Check className="w-8 h-8 text-green-500" />
                  ) : (
                    <ArrowUpRight className="w-8 h-8 text-[#282828]" />
                  )}
                </div>
                {animationProgress > 0.5 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#282828] mb-2">Published Successfully!</h3>
                <p className="text-gray-600">Your Biztro page is live at biztro/yourbrand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Step */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          currentStep === 5 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#282828] mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm">Track your growth</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className={`bg-white border border-gray-200 rounded-lg p-4 text-center transition-all duration-500 ${
                animationProgress > 0.2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="text-2xl font-bold text-[#282828]">{Math.floor(animationProgress * 1000) + 50}</div>
                <div className="text-xs text-gray-500">Page Views</div>
              </div>
              <div className={`bg-white border border-gray-200 rounded-lg p-4 text-center transition-all duration-500 ${
                animationProgress > 0.4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="text-2xl font-bold text-[#282828]">{Math.floor(animationProgress * 500) + 25}</div>
                <div className="text-xs text-gray-500">Link Clicks</div>
              </div>
              <div className={`bg-white border border-gray-200 rounded-lg p-4 text-center transition-all duration-500 ${
                animationProgress > 0.6 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="text-2xl font-bold text-[#282828]">{Math.floor(animationProgress * 100) + 10}</div>
                <div className="text-xs text-gray-500">New Followers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cursor */}
        <div
          className={`absolute pointer-events-none transition-all duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            left: `${20 + Math.sin(Date.now() * 0.001) * 10}%`,
            top: `${30 + Math.cos(Date.now() * 0.001) * 15}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-4 h-4 bg-[#282828] rounded-full shadow-lg animate-pulse"></div>
        </div>
      </div>

      {/* Bottom Steps */}
      <div className="p-6 bg-white border-t border-gray-100/50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className={`space-y-3 transition-all duration-700 ${
            currentStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-[#282828]/10 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110">
              <Edit className="w-6 h-6 text-[#282828]" />
            </div>
            <h3 className="font-semibold text-[#282828]">Customize</h3>
            <p className="text-sm text-gray-600">Choose themes, colors, and layouts</p>
          </div>
          <div className={`space-y-3 transition-all duration-700 ${
            currentStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-[#282828]/10 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110">
              <ArrowUpRight className="w-6 h-6 text-[#282828]" />
            </div>
            <h3 className="font-semibold text-[#282828]">Publish</h3>
            <p className="text-sm text-gray-600">Share your unique Biztro link</p>
          </div>
          <div className={`space-y-3 transition-all duration-700 ${
            currentStep >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="w-12 h-12 bg-[#282828]/10 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110">
              <TrendingUp className="w-6 h-6 text-[#282828]" />
            </div>
            <h3 className="font-semibold text-[#282828]">Grow</h3>
            <p className="text-sm text-gray-600">Track analytics and engage visitors</p>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-[#fffbeb]/30 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
