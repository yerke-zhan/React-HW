import React from 'react';
import { Navigate } from 'react-router-dom';

export default function NotFound() {
  
    // Redirect to home page if user tries to access a non-existent page

  return (
    <div>
      <h1>❌ 404 - Page Not Found</h1>
      <p>Бұл бет табылмады. Сізді басты бетке қайта бағыттаймыз...</p>

      <Navigate to="/" replace />
    
    </div>
  );
}
