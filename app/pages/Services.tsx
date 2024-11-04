import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#FDF6F4] py-16">
      {/* Top Text Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center border border-blue-400 p-8 rounded-lg bg-white/80 backdrop-blur-sm">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team of experts serves as your access point to an expansive network of certified business resources and reputable agencies worldwide, distinguished by their unwavering commitment to exceeding expectations.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex justify-center items-center">
        <div className="relative w-[1316px] h-[705px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Services.png"
              alt="City skyline"
              width={1316}
              height={705}
              className="object-cover"
            />
            <div className="absolute inset-0 " />
          </div>

          <div className="relative h-full flex flex-col justify-between p-12">
            {/* Services Header */}
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Our mission is to be a trusted partner for companies seeking to thrive within the dynamic landscape of Saudi Arabia&apos;s evolving economy. We help businesses fully access, both the national and international, potential of Saudi Arabia&apos;s talent pool, seamlessly navigating the intricacies of immigration processes and laws to supply your business with the tools to succeed.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-2 text-center uppercase tracking-wider">
                  Recruitment
                  <br />
                  Talent Acquisition
                </h3>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-2 text-center uppercase tracking-wider">
                  HR & Advisory
                </h3>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-2 text-center uppercase tracking-wider">
                  Hospitality
                  <br />
                  Operations
                </h3>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-2 text-center uppercase tracking-wider">
                  Finance
                  <br />
                  Consultancy
                </h3>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-2 text-center uppercase tracking-wider">
                  Manpower Supply
                </h3>
              </div>

              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-2 text-center uppercase tracking-wider">
                  Transportation
                  <br />
                  & Logistics
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}