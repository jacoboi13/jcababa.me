import { ResponsiveImage } from "../components/responsive-image"

export default function Certificate() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex justify-center">
      <ResponsiveImage
        src="/aeacc1363b3d4207aac7cd282fd6a859.jpeg"
        alt="Certificate"
        width={800}
        height={600}
        priority
        className="shadow-lg rounded-lg"
        sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 800px"
        quality={85}
      />
    </div>
  )
}

