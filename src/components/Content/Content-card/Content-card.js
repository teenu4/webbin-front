import React from 'react';

const ContentCard = () => {
  return (
    <>
      <div class="w-5/12 rounded overflow-hidden shadow-lg mb-8">
        <img class="w-full" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Sunset in the mountains"/>
        <div class="flex items-center justify-between px-6 py-4">
          <div class="font-bold text-xl mb-2">Name of pattern</div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Like
          </button>
        </div>
      </div>
    </>
  )
};

export default ContentCard;