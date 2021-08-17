import React from 'react';
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: 'https://www.metmuseum.org/-/media/images/art/collection-landing-page/your-collection/metpublications.jpg?as=1&la=en&mh=424&mw=672',
    thumbnail: 'https://www.metmuseum.org/-/media/images/art/collection-landing-page/your-collection/metpublications.jpg?as=1&la=en&mh=224&mw=372',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function View() {
    
    return (<ImageGallery items={images} />
      )
  }
