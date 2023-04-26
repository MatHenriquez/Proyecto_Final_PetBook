import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/solid';

function HeartButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center space-x-1 ${liked ? 'text-green-500' : 'text-gray-500'}`}
    >
      <HeartIcon className="h-5 w-5" />
      <span>{liked ? 'Liked' : 'Like'}</span>
    </button>
  );
}

export default HeartButton;