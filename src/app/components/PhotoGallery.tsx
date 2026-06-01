import { useState } from 'react'
import Masonry from 'react-responsive-masonry'
import { Download } from 'lucide-react'
import { Lightbox } from './Lightbox'
import { downloadAllPhotos, downloadPhoto } from '../utils/downloadPhoto'

export interface Photo {
  url: string
  alt: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  title: string
  description?: string
}

function PhotoTile({
  photo,
  index,
  title,
  onOpen,
}: {
  photo: Photo
  index: number
  title: string
  onOpen: () => void
}) {
  const slug = title.toLowerCase().replace(/\s+/g, '-')

  const handleDownload = (event: React.MouseEvent) => {
    event.stopPropagation()
    void downloadPhoto(photo.url, `${slug}-${index + 1}.jpg`)
  }

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`View ${photo.alt}`}
      >
        <img
          src={photo.url}
          alt={photo.alt}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </button>

      <button
        type="button"
        onClick={handleDownload}
        className="absolute right-2 bottom-2 rounded-full bg-black/35 p-1.5 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-black/50 hover:text-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:opacity-0 max-md:opacity-40"
        aria-label={`Download ${photo.alt}`}
        title="Download photo"
      >
        <Download size={14} strokeWidth={2} />
      </button>
    </div>
  )
}

function MasonryGrid({
  columnsCount,
  photos,
  title,
  onOpen,
}: {
  columnsCount: number
  photos: Photo[]
  title: string
  onOpen: (index: number) => void
}) {
  return (
    <Masonry columnsCount={columnsCount} gutter="16px">
      {photos.map((photo, index) => (
        <PhotoTile
          key={`${photo.url}-${index}`}
          photo={photo}
          index={index}
          title={title}
          onOpen={() => onOpen(index)}
        />
      ))}
    </Masonry>
  )
}

export function PhotoGallery({ photos, title, description }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-serif text-4xl text-[#084d66] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{description}</p>
          )}
        </div>

        <div className="md:hidden">
          <MasonryGrid
            columnsCount={1}
            photos={photos}
            title={title}
            onOpen={setSelectedIndex}
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <MasonryGrid
            columnsCount={2}
            photos={photos}
            title={title}
            onOpen={setSelectedIndex}
          />
        </div>
        <div className="hidden lg:block">
          <MasonryGrid
            columnsCount={3}
            photos={photos}
            title={title}
            onOpen={setSelectedIndex}
          />
        </div>

        <div className="mt-16 text-center">
          {/*<button
            type="button"
            onClick={() => void downloadAllPhotos(photos, title)}
            className="rounded-full bg-[#823327] px-8 py-4 text-lg font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#084d66] hover:shadow-xl"
          >
            Download All Photos
          </button>*/}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </div>
  )
}
