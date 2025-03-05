'use client';

import { useState } from 'react';
import Image from "next/image";
import { CameraIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import ImageSlider from '@/components/ImageSlider';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
  const [isImageSliderOpen, setIsImageSliderOpen] = useState(false);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <Image
              src="/dew.png"
              alt="Dew logo"
              width={768}
              height={768}
            />
          </div>

          {/* Profile Info */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Condor</h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">DEW motor oil — avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya. Mutaxassislarimiz avtomobilingiz dvigatelining ishonchli himoyasini taʼminlash uchun har bir detalga alohida eʼtibor qaratmoqda.</p>

          {/* Social Links */}
          <div className="w-full space-y-4">
            <a
              href="https://instagram.com/condoroiluz1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="flex items-center">
                <CameraIcon className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-200" />
                <span className="text-gray-700 dark:text-gray-200 font-medium">Instagram</span>
              </span>
              <span className="text-gray-400 dark:text-gray-300">→</span>
            </a>

            <a
              href="https://t.me/avtomobile_moylari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="flex items-center">
                <PaperAirplaneIcon className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-200" />
                <span className="text-gray-700 dark:text-gray-200 font-medium">Telegram</span>
              </span>
              <span className="text-gray-400 dark:text-gray-300">→</span>
            </a>

            <a
              href="#videos"
              onClick={(e) => {
                e.preventDefault();
                setIsVideoPlayerOpen(true);
              }}
              className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Videos</span>
              </span>
              <span className="text-gray-400 dark:text-gray-300">→</span>
            </a>

            <button
              onClick={() => setIsImageSliderOpen(true)}
              className="flex items-center justify-between w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Images</span>
              </span>
              <span className="text-gray-400 dark:text-gray-300">→</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 w-full">
            <div className="flex justify-center space-x-6">
              <a
                href="https://t.me/avtomobil_moylari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <PaperAirplaneIcon className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/condoroiluz1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <CameraIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <ImageSlider isOpen={isImageSliderOpen} onClose={() => setIsImageSliderOpen(false)} />
      <VideoPlayer isOpen={isVideoPlayerOpen} onClose={() => setIsVideoPlayerOpen(false)} />
    </div>
  );
}
