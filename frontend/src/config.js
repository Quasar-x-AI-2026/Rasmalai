// API base URL: use Render backend by default so local frontend can talk to it without CORS issues.
// Backend (dpis-backend.onrender.com) allows origin http://localhost:3000.
// Override with REACT_APP_API_URL for local backend (e.g. http://localhost:5000).
const API_BASE_URL = (
  typeof process !== 'undefined' && process.env.REACT_APP_API_URL
) ? process.env.REACT_APP_API_URL : 'https://dpis-backend.onrender.com';

// Log to verify it's being used
if (typeof window !== 'undefined') {
  console.log('API Base URL:', API_BASE_URL);
}

export default API_BASE_URL;
