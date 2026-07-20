"import React, { useState } from 'eact';\nimport { useNavigate, Link } from 'eact-router-dom';\nimport { api } from '../utils/api';\n\nconst Login = () => {\n  const [formData, setFormData] = useState({ email: '', password: '' });\n  const [error, setError] = useState('');\n  const navigate = useNavigate();\n\n  const handleChange = (e) => {\n    setFormData({ ...formData, [e.target.name]: e.target.value });\n  };\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    try {\n      const { data } = await api.post('/auth/login', formData);\n      localStorage.setItem('token', data.token);\n      navigate('/client-portal');\n    } catch (err) {\n      setError(err.response?.data?.error || 'Login failed');\n    }\n  };\n\n  return (\n    <div className=\"min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-colour to-secondary-colour py-12\">\n      <div className=\"bg-white rounded-2xl shadow-xl p-8 w-full max-w-md\">\n        <h1 className=\"text-3xl font-bold text-center text-primary-colour mb-2\">Welcome Back</h1>\n        <p className=\"text-center text-slate-600 mb-6\">Sign in to access your client portal</p>\n        \n        {error && (\n          <div className=\"bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm\">\\\n            {error}\n          </div>\n        )}\n\n        <form onSubmit={handleSubmit} className=\"space-y-4\">\n          <div>\\\n            <label className=\"block text-sm font-medium text-slate-700 mb-1\">Email Address</label>\\\n            <input \\\n              type=\"email\"\\
              name=\"email\"\\
              value={formData.email}\\
              onChange={handleChange}\\
              className=\"w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour\"\\
              required\\
            />\\
          </div>\\
\\
          <div>\\
            <label className=\"block text-sm font-medium text-slate-700 mb-1\">Password</label>\\
            <input \\\n              type=\"password\"\\
              name=\"password\"\\
              value={formData.password}\\
              onChange={handleChange}\\
              className=\"w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour\"\\
              required\\
            />\\
          </div>\\
\\
          <button \\\n            type=\"submit\"\\
            className=\"w-full bg-secondary-colour text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold\"\\
          >\\
            Sign In\\
          </button>\\
        </form>\\
\\
        <div className=\"mt-6 text-center\">\\
          <p className=\"text-sm text-slate-600\">\\
            Don't have an account? <Link to=\"/register\" className=\"text-secondary-colour hover:underline\">Create one</Link>\\
          </p>\\
        </div>\\
      </div>\\
    </div>\\
  );\\
};\\
\\
export default Login;"