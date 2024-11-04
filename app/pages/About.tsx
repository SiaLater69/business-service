import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 py-20">
        <div className="lg:w-1/2">
          <img 
            src="/about.png" 
            alt="about" 
            className="w-full max-w-2xl h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-2xl text-gray-600 mb-5">
            ABOUT US
          </h2>
          <p className="text-gray-600 max-w-xl">
            Headquartered in the vibrant city of Riyadh, we are strategically positioned to serve as a cornerstone for businesses seeking reliability and excellence in service provision. Our management team boasts a wealth of global knowledge and extends our industry experience far beyond Saudi Arabia. With expertise from the United Kingdom (London), the UAE (Dubai and Abu Dhabi), Africa (Nigeria, Egypt, and Morocco), and India, we bring an international perspective to our services, enriching our approach with cultural diversity and global insights.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 py-20">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-2xl text-gray-600 mb-5">
            Our Goal
          </h2>
          <p className="text-gray-600 max-w-xl">
            Our mission is to help businesses succeed in the ambitious aspirations of Saudi Arabia's 2030 vision. 
        
            <p className='mt-7'>At the heart of our mission lies a dedication to excellence, innovation, and customer-centricity. Our goal is to build long-term relationships and to be known for reliability and professional excellence. Our multifaceted ranget of services offers a comprehensive service suite tailored to meet the diverse needs of our clients.</p>
          </p>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="/goal.png" 
            alt="goal" 
            className="w-full max-w-2xl h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}