const Footer = () => {
    return (
      <footer className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-gray-100 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Hostel Fest. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Facebook</a>
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Instagram</a>
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  