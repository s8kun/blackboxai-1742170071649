const ProductGrid = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  watchLogo,
  bgColor = "bg-black", 
  textColor = "text-white" 
}) => {
  return (
    <div className={`relative min-h-[500px] ${bgColor} rounded-2xl overflow-hidden`}>
      <div className="p-8 text-center">
        {/* Title with optional SERIES text */}
        <div className="mb-2">
          {title === "WATCH" ? (
            <div className="flex items-center justify-center space-x-2">
              <img 
                src={watchLogo} 
                alt="Apple Watch" 
                className="h-6"
              />
              <span className={`text-sm font-semibold ${textColor}`}>
                {subtitle}
              </span>
            </div>
          ) : (
            <h2 className={`text-4xl font-semibold ${textColor}`}>
              {title}
            </h2>
          )}
        </div>
        
        {/* Subtitle or description */}
        {subtitle && title !== "WATCH" && (
          <h3 className={`text-2xl font-normal mb-2 ${textColor}`}>
            {subtitle}
          </h3>
        )}
        {description && (
          <p className={`text-xl mb-3 ${textColor}`}>
            {description}
          </p>
        )}

        {/* Links */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <a href="#" className="text-apple-blue text-xl hover:underline">
            Learn more <i className="fas fa-chevron-right text-sm"></i>
          </a>
          <a href="#" className="text-apple-blue text-xl hover:underline">
            Buy <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center px-8">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Built for Apple Intelligence Tag */}
      {title === "iPhone" && (
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${textColor}`}>
          <p className="text-center">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Apple Intelligence
            </span>
            .
          </p>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
