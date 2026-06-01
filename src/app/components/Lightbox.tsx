import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'  /*Download,*/
import type { Photo } from './PhotoGallery'
/*import { downloadPhoto } from '../utils/downloadPhoto'*/

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentPhoto = photos[currentIndex]
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1)
      } else if (event.key === 'ArrowRight' && currentIndex < photos.length - 1) {
        onNavigate(currentIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [currentIndex, onClose, onNavigate, photos.length])

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1)
    }
  }

  /*const handleDownload = () => {
    void downloadPhoto(currentPhoto.url, `photo-${currentIndex + 1}.jpg`)
  }*/

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      handleNext()
    } else if (touchEndX.current - touchStartX.current > 75) {
      handlePrevious()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-1.5 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X size={22} />
      </button>

      {/*<button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handleDownload()
        }}
        className="absolute top-4 right-16 z-50 rounded-full bg-white/10 p-1.5 text-white transition-colors hover:bg-white/20"
        aria-label="Download"
      >
        <Download size={22} />
      </button>*/}

      <div className="absolute top-4 left-4 z-50 rounded-full bg-black/30 px-4 py-2 text-lg font-medium text-white">
        {currentIndex + 1} / {photos.length}
      </div>

      {currentIndex > 0 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            handlePrevious()
          }}
          className="absolute top-1/2 left-4 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Previous"
        >
          <ChevronLeft size={26} />
        </button>
      )}

      {currentIndex < photos.length - 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            handleNext()
          }}
          className="absolute top-1/2 right-4 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label="Next"
        >
          <ChevronRight size={26} />
        </button>
      )}

      <img
        src={currentPhoto.url}
        alt={currentPhoto.alt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}
