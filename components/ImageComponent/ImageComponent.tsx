import { FC, useState, MouseEvent } from "react";


interface ImageComponentProps {
  imageUrl: string;
}

const ImageComponent: FC<ImageComponentProps> = ({ imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
      setIsOpen(true);
    };

    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setIsOpen(false);
      }
    };

    return (
        <>
          <div className="w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-2">
              <img
                src={imageUrl}
                alt="Image content"
                className="max-w-full align-middle rounded-md cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
          </div>
            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleClose}>
                <div className="w-4/5 h-4/5 flex items-center justify-center overflow-hidden" onClick={handleClose}>
                  <img
                      src={imageUrl}
                      alt="Image content"
                      className="max-w-full max-h-full align-middle object-contain"
                      onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
          )}
      </>
    );
};

export default ImageComponent;
