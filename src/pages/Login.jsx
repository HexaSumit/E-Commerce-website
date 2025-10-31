import React from 'react'

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Login to your account
                </p>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-indigo-600" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-indigo-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-gray-500 text-sm px-3">or</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Signup Redirect */}
                <p className="text-center text-gray-600 text-sm">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-indigo-600 font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>

    )
}

export default Login