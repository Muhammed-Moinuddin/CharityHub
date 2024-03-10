import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen full-width">
      <div className="w-96 p-8 rounded-lg shadow-md border-t-4 border-gradient">
        <h2 className="text-3xl font-semibold mb-4 text-purple-600 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 pb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full border-2 rounded-md py-2 px-3 focus:outline-none text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-200 pb-2">Password:</label>
            <input type="password" id="password" name="password" className="w-full border-2 rounded-md py-2 px-3 focus:outline-none text-white" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring text-white">Login</button>
        </form>
      </div>
    </div>
  )
}
export default Login