import React from 'react';

const FrontendDeveloperPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-6 bg-white">
        <div className="container mx-auto px-4 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Frontend Developer Hiring Test</h1>
          <div className="flex space-x-4">
            <div className="text-black text-sm">
              <h2 className="text-base font-medium">About</h2>
            </div>
            <div className="text-black text-sm">
              <h2 className="text-base font-medium">Pricing</h2>
            </div>
            <div className="text-black text-sm">
              <h2 className="text-base font-medium">Review</h2>
            </div>
          </div>
        </div>
      </header>
      <main className="py-8">
        <div className="container mx-auto px-4">
          <section>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">LEARN HOW TO LAUNCH A SUCCESSFUL PODCAST</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, ligula et consectetur malesuada, purus arcu volutpat nunc, ac aliquam felis tellus vel lorem. Nullam vitae mi ac ligula consectetur eleifend. Fusce commodo augue at tellus tempor auctor. Vivamus eu metus nec tellus pharetra scelerisque.
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Get Started Now</button>
              </div>
              <div className="flex flex-col">
              <div style={{ width: '491px', height: '281px', flexShrink: 0, borderRadius: '10px', background: 'url(https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/abc/photo1.png) lightgray 50% / cover no-repeat' }}></div>
                <div className="mt-4" style={{ width: '491px', height: '281px', flexShrink: 0, borderRadius: '10px', background: 'url(https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/abc/photo2.png) lightgray 50% / cover no-repeat' }}></div>
              </div>
            </div>
          </section>

          <section className="mt-8 flex">
            <div className="w-2/3 pr-4">
              <h2 className="text-2xl font-bold mb-4">Interactive Features</h2>
              <div className="flex">
                <div className="bg-white p-4 rounded shadow mr-4">
                  <h3 className="text-lg font-bold mb-2">Interactive Features</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white p-4 rounded shadow mr-4">
                  <h3 className="text-lg font-bold mb-2">Interactive Features</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white p-4 rounded shadow mr-4">
                  <h3 className="text-lg font-bold mb-2">Interactive Features</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col items-start">
              <div>
                <h2 className="text-2xl font-bold mb-4">About the Course</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, ligula et consectetur malesuada, purus arcu volutpat nunc, ac aliquam felis tellus vel lorem. Nullam vitae mi ac ligula consectetur eleifend. Fusce commodo augue at tellus tempor auctor. Vivamus eu metus nec tellus pharetra scelerisque.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Explore Now</button>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, ligula et consectetur malesuada, purus arcu volutpat nunc, ac aliquam felis tellus vel lorem.
            </p>
            <div className="flex justify-between mt-4">
              <div className="bg-white p-4 rounded shadow w-1/3">
                <h3 className="text-lg font-bold mb-2">Basic Plan</h3>
                
                <ul className="list-disc list-inside">
                  <li>Free Access to Video Class</li>
                  <li>Free Access to Video Class</li>
                  <li>Free Access to Video Class</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow w-1/3 ml-4">
                <h3 className="text-lg font-bold mb-2">Premium Plan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis ac libero hendrerit venenatis.</p>
                <ul className="list-disc list-inside">
                  <li>Free Access to Video Class</li>
                  <li>Free Access to Video Class</li>
                  <li>Free Access to Video Class</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow w-1/3 ml-4">
                <h3 className="text-lg font-bold mb-2">Advance Plan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis ac libero hendrerit venenatis.</p>
                <ul className="list-disc list-inside">
                  <li>Free Access to Video Class</li>
                  <li>Free Access to Video Class</li>
                  <li>Free Access to Video Class</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Review From Customers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis ac libero hendrerit venenatis.
            </p>
            <div className="flex justify-between mt-4">
              <div className="bg-white p-4 rounded shadow w-1/2">
                <h3 className="text-lg font-bold mb-2">John Doe</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis ac libero hendrerit venenatis."
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow w-1/2 ml-4">
                <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis ac libero hendrerit venenatis."
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">We Have What You're Looking For</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, ligula et consectetur malesuada, purus arcu volutpat nunc, ac aliquam felis tellus vel lorem.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Get Started Now</button>
          </section>
        </div>
      </main>
      <footer className="py-4 text-center text-gray-600">
        &copy; 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default FrontendDeveloperPage;
