import React from "react";
const Card = props => {
  const { images } = props;
  if (!images || images.length === 0) return <p>No images, sorry dudes</p>;
  return (
    <div className="flex flex-wrap -mx-5 overflow-hidden sm:-mx-5 md:-mx-5 lg:-mx-4 xl:-mx-16">
      {images.photo.map(item => {
        return (
          <div
            key={item.id}
            className="my-5 px-5 w-full sm:my-5 sm:px-5 sm:w-1/2 md:my-5 md:px-5 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-8 xl:px-8 xl:w-1/4   flex flex-col "
          >
            <div className="flex-grow bg-gray-50 shadow-lg rounded-sm overflow-x-hidden">
              <img
                src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                alt={item.title}
                className="block h-auto w-full"
              />

              <header className="flex flex-col leading-tight px-4">
                <a
                  href={`https://www.flickr.com/photos/${item.owner}/${item.id}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-current text-blue underline hover:no-underline text-lg pt-2"
                >
                  {item.title}
                </a>
                <div className="text-sm">
                  <span className="mr-1">by</span>
                  <a
                    href={`https://www.flickr.com/photos/${item.owner}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-current text-blue underline hover:no-underline"
                  >
                    {item.owner}
                  </a>
                </div>
              </header>

              <footer className="flex flex-col justify-between space-between leading-none pt-2 px-4">
                {item.description._content ? (
                  <p className="text-sm">
                    Description: {item.description._content}
                  </p>
                ) : null}

                <div className="py-3.5 text-xs">Tags: {item.tags}</div>
              </footer>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
