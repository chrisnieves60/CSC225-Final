const Contact = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const message = form.elements['message'].value;
  
      // Construct the email link with subject and body
      const emailLink = `mailto:info@starrly.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
  
      // Open the user's email client
      window.location.href = emailLink;
    };
  
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-800 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="name" type="text" placeholder="Jane Doe" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-800 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="email" type="email" placeholder="jane@example.com" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-800 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none h-48" id="message" placeholder="Enter your message..." required></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
                Send Email
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default Contact;
  