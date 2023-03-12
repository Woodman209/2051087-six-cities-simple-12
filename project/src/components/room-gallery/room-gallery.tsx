/* eslint-disable @typescript-eslint/no-unused-vars */
import { image } from 'faker';
import { Images } from '../../types/type';

type RoomGalleryProps = {
  images: Images;
}

export default function RoomGallery({ images }: RoomGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.map((img) => (
            <div className="property__image-wrapper"
              key={img}
            >
              <img
                className="property__image"
                src={img}
                alt="Interior"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
