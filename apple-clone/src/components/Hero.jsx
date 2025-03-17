const Hero = ({ title, subtitle, description, image, bgColor = "bg-black", textColor = "text-white" }) => {
  return (
    <section className={`relative min-h-[580px] ${bgColor} overflow-hidden`}>
      <div className="max-w-[980px] mx-auto px-4 pt-20 text-center">
        <h2 className={`text-5xl font-semibold mb-2 ${textColor}`}>
          {title}
        </h2>
        {subtitle && (
          <h3 className={`text-3xl font-normal mb-3 ${textColor}`}>
            {subtitle}
          </h3>
        )}
        {description && (
          <p className={`text-xl mb-4 ${textColor}`}>
            {description}
          </p>
        )}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <a href="#" className="text-apple-blue text-xl hover:underline">
            Learn more <i className="fas fa-chevron-right text-sm"></i>
          </a>
          <a href="#" className="text-apple-blue text-xl hover:underline">
            Buy <i className="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full max-w-[1000px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      {/* Built for Apple Intelligence Tag */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${textColor}`}>
        <p className="text-center">
          Built for{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Apple Intelligence
          </span>
          .
        </p>
      </div>
    </section>
  )
}

export default Hero
