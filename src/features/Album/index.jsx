import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhạc Pop',
      thumbnail: 'https://photo-zmp3.zmdcdn.me/banner/4/a/2/e/4a2e8ce1c5b3d3e0e3f78c976dcafd2c.jpg',
    },

    {
      id: 2,
      name: 'Nhạc Trending',
      thumbnail: 'https://photo-zmp3.zmdcdn.me/banner/c/2/7/d/c27d18dd4a5db830c73ec8f309ed0cd0.jpg',
    },

    {
      id: 3,
      name: 'Nhạc Rap',
      thumbnail: 'https://photo-zmp3.zmdcdn.me/banner/1/d/3/4/1d344706add3bd9fb098f1c6990d29b8.jpg',
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
