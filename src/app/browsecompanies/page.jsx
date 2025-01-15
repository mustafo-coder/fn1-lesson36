import React from 'react';
import Image from 'next/image';
import { Coinbase, Kraken, Robinhood, Square, Stripe, Truebill} from '../images/index';

const BrowseCompanies = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6 ">
        <div className="flex gap-4 mb-4 border border-gray p-5">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Company title or keyword"
              className="w-full p-2 border-b-2"
            />
          </div>
          <span className='h-10 w-[1px] border border-gray'></span>
          <div className="flex-1">
          <select className='w-full p-2.5 bg-white border-b-2'>
              <option value="1">Florence, Italy</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2">
            Search
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Popular: Twitter, Microsoft, Apple, Facebook
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters */}
        <div className="w-64 space-y-6">
          <div>
            <h3 className="font-medium mb-2">Industry</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Advertising</span>
                <span className="text-gray-500 ml-1">(43)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Business Service</span>
                <span className="text-gray-500 ml-1">(4)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Blockchain</span>
                <span className="text-gray-500 ml-1">(5)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Cloude</span>
                <span className="text-gray-500 ml-1">(15)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Consumer Tech</span>
                <span className="text-gray-500 ml-1">(5)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Education</span>
                <span className="text-gray-500 ml-1">(34)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>FinTech</span>
                <span className="text-gray-500 ml-1">(45)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Gaming</span>
                <span className="text-gray-500 ml-1">(33)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Food & Beverage</span>
                <span className="text-gray-500 ml-1">(5)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Healthcare</span>
                <span className="text-gray-500 ml-1">(3)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Hostinng</span>
                <span className="text-gray-500 ml-1">(5)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Media</span>
                <span className="text-gray-500 ml-1">(4)</span>
              </label>
              
              
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Blockchain</span>
                <span className="text-gray-500 ml-1">(5)</span>
              </label>
              {/* Add more industries as needed */}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Company Size</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>1-50</span>
                <span className="text-gray-500 ml-1">(25)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>51-150</span>
                <span className="text-gray-500 ml-1">(57)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>151-250</span>
                <span className="text-gray-500 ml-1">(45)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>251-500</span>
                <span className="text-gray-500 ml-1">(4)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>501-1000</span>
                <span className="text-gray-500 ml-1">(43)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>1000-above</span>
                <span className="text-gray-500 ml-1">(23)</span>
              </label>
              {/* Add more size ranges as needed */}
            </div>
          </div>
        </div>

        {/* Company Listings */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">All Companies</h2>
            <div className="flex items-center gap-4">
              <select className="border p-2 rounded">
                <option>Most relevant</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
              <div className="flex gap-2">
                <button className="p-2 border rounded">
                  <div className="w-5 h-5 relative">
                  <i class="fa fa-th-large" aria-hidden="true" className='text-black'></i>

                  </div>
                </button>
                <button className="p-2 border rounded">
                  <div className="w-5 h-5 relative">
                  <i class="fa fa-bars" aria-hidden="true"></i>

                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stripe */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={Stripe} 
                    alt="Stripe" 
                    layout="fill" 
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Stripe</h3>
                    <span className="text-blue-600">7 Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe's software tools...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Business
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Payment gateway
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Truebill */}
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={Truebill} 
                    alt="Truebill" 
                    layout="fill" 
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Truebill</h3>
                    <span className="text-blue-600">7 Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Business
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={Square} 
                    alt="Truebill" 
                    layout="fill" 
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Truebill</h3>
                    <span className="text-blue-600">7 Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Business
                    </span>
                  </div>
                </div>
              </div>
            </div>


          <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={Coinbase} 
                    alt="Truebill" 
                    layout="fill" 
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Truebill</h3>
                    <span className="text-blue-600">7 Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Business
                    </span>
                  </div>
                </div>
              </div>
            </div>


          <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={Robinhood} 
                    alt="Truebill" 
                    layout="fill" 
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Truebill</h3>
                    <span className="text-blue-600">7 Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Business
                    </span>
                  </div>
                </div>
              </div>
            </div>

          <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={Kraken} 
                    alt="Truebill" 
                    layout="fill" 
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Truebill</h3>
                    <span className="text-blue-600">7 Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...
                  </p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      Business
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex justify-center gap-2 mt-6">
            <button className="p-2 border w-10 rounded">&lt;</button>
            <button className="p-2 border w-10 rounded bg-blue-600 text-white">1</button>
            <button className="p-2 border w-10 rounded">2</button>
            <button className="p-2 border w-10 rounded">3</button>
            <button className="p-2 border w-10 rounded">4</button>
            <button className="p-2 border w-10 rounded">5</button>
            <span className="p-2 w-10">...</span>
            <button className="p-2 w-10 border rounded">33</button>
            <button className="p-2 w-10 border rounded">&gt;</button>
          </div>
          </div>

          
        </div>
      </div>
  );
};

export default BrowseCompanies;