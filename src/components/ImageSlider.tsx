'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ImageSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg'
];

export default function ImageSlider({ isOpen, onClose }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-4 flex flex-col items-center justify-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}