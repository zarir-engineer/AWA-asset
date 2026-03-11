import React from 'react';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#ffffff',
      fontFamily: '"Amazon Ember", Arial, sans-serif', // Closest standard font
      padding: '50px 20px',
      textAlign: 'center'
    }}>

      {/* --- 1. TOP TEXT SECTION --- */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{
          fontSize: '90px',
          fontWeight: 300, 
          color: '#767676', // Amazon's specific gray
          margin: '0',
          lineHeight: '1',
          letterSpacing: '-2px'
        }}>
          SORRY
        </h1>
        <h2 style={{
          fontSize: '40px',
          fontWeight: 300,
          color: '#767676',
          margin: '5px 0 15px 0',
          letterSpacing: '-1px'
        }}>
          we couldn't find that page
        </h2>
        <p style={{ fontSize: '20px', color: '#555', margin: 0, fontWeight: 400 }}>
          Try searching or go to <Link to="/" style={{ color: '#0066c0', textDecoration: 'none' }}>AWA Asset's home page</Link>.
        </p>
      </div>

      {/* --- 2. IMAGE & CAPTION SECTION --- */}
      {/* alignItems: 'flex-end' makes sure the caption sticks to the bottom paws of the dog */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end', 
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        
        {/* Replace this src with the path to your actual photo */}
        <img 
          src="/images/dog-01.png" 
          alt="Barkley the dog" 
          style={{ 
            height: '400px', // Adjust this depending on how big your image file is
            width: 'auto',
            objectFit: 'contain'
          }} 
        />

        {/* Caption Text (Bottom Right) */}
        <div style={{ textAlign: 'left', paddingBottom: '30px', marginLeft: '20px' }}>
          <div style={{ 
            fontSize: '32px', 
            color: '#767676', 
            fontWeight: 300,
            marginBottom: '4px' 
          }}>
            Barkley
          </div>
          <Link to="/about" style={{ color: '#0066c0', textDecoration: 'none', fontSize: '16px' }}>
            Meet the dogs of AWA Asset
          </Link>
        </div>
        
      </div>
    </div>
  );
}