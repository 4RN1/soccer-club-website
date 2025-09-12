import '../css/Gallery.css'
import Navbar from '../components/Navbar'
import FooterComp from '../components/FooterComp'
import { useEffect, useState } from 'react'
import client from '../sanity.Client'

function Gallery() {
  const [images, setImages] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch photos
  useEffect(() => {
    client.fetch(`*[_type=="photo"]{
      _id,
      title,
      caption,
      image{asset->{_id,url}}
    }`)
      .then(data => {
        setImages(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  // Fetch videos
useEffect(() => {
  client.fetch(`*[_type == "videogallery"]{
    _id,
    title,
    video[]{
      file{asset->{url}},
      embedUrl,
      description
    }
  }`)
  .then(data => setVideos(data))
  .catch(err => console.error(err))
}, [])


  if (loading) return <p>Loading gallery...</p>

  return (
    <div className="gallery">
      <Navbar />
    <div className='images'>
      <h1>გალერეა</h1>
</div>
      {/* Photos */}
      <h2 className='photos-heading'>ფოტოები</h2>
      <div className='photos-grid'>
        {images.length > 0 ? images.map(photo => (
          <div key={photo._id} className='photo-item'>
            <img
              src={photo.image?.asset?.url || '/placeholder.jpg'}
              alt={photo.caption || photo.title || 'Gallery image'}
             className='gallery-img'/>
            {photo.caption && <p>{photo.caption}</p>}
          </div>
        )) : <p>No images found</p>}
      </div>

      {/* Videos */}
      <h2 className='videos-heading'>ვარჯიშის ვიდეოები</h2>
      <div className='videos-grid'>
        {videos.map(item => (
  <div key={item._id}>
    {item.video?.length > 0 ? item.video.map((v, idx) => (
      <div key={idx} className="video-item">

        {/* Show uploaded video */}
        {v.file?.asset?.url && (
          <video controls>
            <source src={v.file.asset.url} type="video/mp4" />
          </video>
        )}

        {/* Show embed link (YouTube/Vimeo) */}
        {v.embedUrl && (
          <iframe
            src={v.embedUrl.replace("watch?v=", "embed/")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {v.description && <p>{v.description}</p>}
      </div>
    )) : <p>No videos uploaded</p>}
  </div>
))}


      </div>

      <FooterComp />
    </div>
  )
}

export default Gallery
