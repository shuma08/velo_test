import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { firstImg } from '../components/logos/firstboximg.png';

let locations = [
    {
      name: 'Roman',
      location: 'Texas',
      likes: 150,
      picture: '../components/logos/firstboximg.png',
      date: '2021-06-07',
      id: 1

    },
    {
      name: 'Ruslan',
      location: 'Peterburg',
      likes: 176,
      picture: '../components/logos/secondboximg.png',
      date: '2021-06-03',
      id: 2
    },
    {
      name: 'Oleg',
      location: 'Netherland',
      likes: 256,
      picture: '../components/logos/thirdboximg.png',
      date: '2021-06-02',
      id: 3
    },
    {
      name: 'Petro',
      location: ' LVIV',
      likes: 280,
      picture: '../components/logos/fourboximg.png',
      date: '2021-06-01',
      id: 4
    },
    {
      name: 'Van Dam',
      location: 'Kyiv',
      likes: 400,
      picture: '../components/logos/fifthboximg.png',
      date: '2021-05-30',
      id: 5
    },
    {
      name: 'Krakov',
      location: 'Poland',
      likes: 210,
      picture: '../components/logos/sixboximg.png',
      date: '2021-06-04',
      id: 6
    }
  ];
    const Photo = (props) => {
      const { src, author, location, likes } = props;

      return (
          <div className="upper-block">
              <div className="img-container">
                  <img src={src} alt={author} />
              </div>
              <div className="bottom-block">
                  <div>
                      <p><b>{author}</b></p>
                      <p>{location}</p>
                  </div>
                  <div className="likes"><FontAwesomeIcon icon={faHeart} />{likes}</div>
              </div>
          </div>
      );
  };

  const PhotosContainer = () => {
    const renderLocation = () => {
      return locations.map(location => {
         return <Photo src={location.picture} author={location.name} likes={location.likes} key={location.id} />;
      });
    };

      return (
          <div className="upper-box-container">
              {renderLocation()}
          </div>
      );
  };

  export default PhotosContainer;