import React, { useState } from 'react';
import Navbar from "./makeup/Navbar";
import Sidebar from "./makeup/Sidebar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import './owner.css';
import { Link } from 'react-router-dom';

interface Prop {
  children?: React.ReactNode;
}

interface SupplyChainProduct {
  id: string;
  title: string;
  productType: string;
  startingLocation: string;
  ownerCredibility: string;
  cost: string;
  message: string;
  status: string;
}

const truncateMessage = (message: string, wordLimit: number) => {
  const words = message.split(' ');
  if (words.length > wordLimit) {
    return `${words.slice(0, wordLimit).join(' ')} ...`;
  }
  return message;
};

const Index: React.FC<Prop> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<string>('');

  const productsPerPage = 3;

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleViewMessage = (message: string) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMessage('');
  };

  // Hardcoded data for supply chain products
  const supplyChainProducts: SupplyChainProduct[] = [
    {
      id: 'abc123',
      title: 'Agricultural Supply Chain',
      productType: 'Grains & Cereals',
      startingLocation: 'Kano',
      ownerCredibility: 'High',
      cost: '₦50,000',
      message: 'Ensuring quality from farm to table with full transparency.',
      status: 'Active',
    },
    {
      id: 'def456',
      title: 'Pharmaceutical Supply Chain',
      productType: 'Medications',
      startingLocation: 'Lagos',
      ownerCredibility: 'Verified',
      cost: '₦200,000',
      message: 'Pharmaceuticals tracked with care for safe delivery.',
      status: 'Active',
    },
    {
      id: 'ghi789',
      title: 'Organic Foods Supply Chain',
      productType: 'Vegetables & Fruits',
      startingLocation: 'Ibadan',
      ownerCredibility: 'Trusted',
      cost: '₦70,000',
      message: 'Certified organic products directly from farms.',
      status: 'Active',
    },
    {
      id: 'jkl012',
      title: 'Cosmetic Products Supply Chain',
      productType: 'Beauty & Skincare',
      startingLocation: 'Abuja',
      ownerCredibility: 'Moderate',
      cost: '₦150,000',
      message: 'Safe and ethical cosmetics supply chain.',
      status: 'Active',
    },
    {
      id: 'mno345',
      title: 'Electronic Goods Supply Chain',
      productType: 'Consumer Electronics',
      startingLocation: 'Port Harcourt',
      ownerCredibility: 'Verified',
      cost: '₦300,000',
      message: 'Tracking electronic goods with transparency for warranty support.',
      status: 'Active',
    },
  ];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = supplyChainProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(supplyChainProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex relative">
      <div className="fixed z-20 lg:hidden">
        {isMenuOpen && <Sidebar onToggleMenu={handleToggleMenu} />}
      </div>
      <div className="hidden lg:block">
        <Sidebar onToggleMenu={() => null} />
      </div>
      <div className="w-full z-10">
        <Navbar onToggleMenu={handleToggleMenu} />
        <div className='p-6'>
          <div className='flex flex-col gap-2 w-full md:flex-row md:items-center md:justify-between pb-6'>
            <div className='flex items-center gap-3'>
              <p>Welcome to Wise Hash Dashboard</p>

              <button className='px-6 py-2 flex justify-center items-center bg-green-800 rounded-md text-white'>
                Create Product
              </button>
            </div>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex'>
                <button
                  className='px-3 py-1 mx-1 border rounded disabled:opacity-50'
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <div className='flex gap-1'>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <div
                      key={index + 1}
                      className={`px-3 py-1 mx-1 border rounded cursor-pointer ${
                        currentPage === index + 1 ? 'bg-[#B8B7B7] text-white' : ''
                      }`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <button
                  className='px-3 py-1 mx-1 border rounded disabled:opacity-50'
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
              <button>Filter</button>
            </div>
          </div>

          {currentProducts.length === 0 ? (
            <div className='flex flex-col justify-center items-center h-60 gap-6'>
              <p className='text-2xl font-bold'>No Products Available</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 gap-6 w-full md:grid-cols-2 xl:grid-cols-3'>
              {currentProducts.map(product => (
                <div key={product.id} className='product-container flex flex-col gap-2 border border-[#B8B7B7] bg-green-600 rounded-lg p-4 text-black hover:text-gray-200 text-base font-semibold hover:bg-green-800 hover:border-0'>
                  <div className='flex items-center gap-1 bg-yellow-400 text-black w-1/2 p-2 rounded-full mb-3'>
                    <NotificationsIcon />
                    <p>New Product</p>
                  </div>
                  <p className='flex items-center gap-1'>
                    <span>Title:</span>
                    <span className='detail'>{product.title}</span>
                  </p>
                  <p className='flex items-center gap-1'>
                    <span>Type:</span>
                    <span className='detail'>{product.productType}</span>
                  </p>
                  <p className='flex items-center gap-1'>
                    <span>Starting Location:</span>
                    <span className='detail'>{product.startingLocation}</span>
                  </p>
                  <p className='flex items-center gap-1'>
                    <span>Owner Credibility:</span>
                    <span className='detail'>{product.ownerCredibility}</span>
                  </p>
                  <p className='flex items-center gap-1'>
                    <span>Cost:</span>
                    <span className='detail'>{product.cost}</span>
                  </p>
                  <div className='w-full flex flex-col gap-2'>
                    <p className='flex items-center gap-1'>
                      <span>Messages:</span>
                      <span className='detail'>{truncateMessage(product.message, 4)}</span>
                    </p>
                    <button 
                      className='view w-1/2 px-1 py-1 text-black bg-yellow-400 rounded-full font-medium'
                      onClick={() => handleViewMessage(product.message)}
                    >
                      View Message
                    </button>
                  </div>
                  <p className='flex items-center gap-1'>
                    <span>Status:</span>
                    <span className='detail'>{product.status}</span>
                  </p>
                  <div className='flex items-center w-full justify-between mt-4'>
                    <button className='accept px-3 py-2 text-white bg-yellow-400 rounded font-medium'>
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-4">Full Message</h2>
            <p>{selectedMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
