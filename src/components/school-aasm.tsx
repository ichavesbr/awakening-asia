"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Users, Calendar, MapPin, ChevronRight } from "lucide-react"

export function SchoolAASM() {
  return (
    <section className="py-16 bg-gray-900 text-white relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/school.png')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-5xl font-bold mb-6 title-section-school md:text-ellipsis">
            Awakening Asia School of Ministry
          </p>

          <p className="text-xl mb-8 subtitle-section-school">
            Raising up pioneers of the Gospel in Asia: Radical lovers of God who will powerfully advance the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: BookOpen,
              title: "Biblical Foundation",
              description: "Get established in the Word of God",
            },
            { icon: Users, title: "Community Building", description: "Learn to build healthy communities" },
            {
              icon: Calendar,
              title: "Intimacy with God",
              description: "Cultivate deep personal relationship with God",
            },
            {
              icon: MapPin,
              title: "Kingdom Leadership",
              description: "Be equipped for discipleship and church planting",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 group cursor-pointer">
              <div className="bg-[rgb(241,196,15)] p-3 rounded-full">
                <item.icon className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-[rgb(241,196,15)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[rgb(241,196,15)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Join our vibrant learning community today!</p>
          <Button className="bg-[rgb(241,196,15)] text-gray-900 hover:bg-[rgb(221,176,0)] mr-4 mb-4">
            Schedule a Visit
          </Button>
          <Button
            variant="outline"
            className="border-[rgb(241,196,15)] text-[rgb(241,196,15)] hover:bg-[rgb(241,196,15)] hover:text-gray-900">
            Learn More About Our Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
