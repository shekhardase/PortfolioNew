import React from 'react';
import styled from 'styled-components';

const CardNew = ({ title, description, buttonText, buttonLink }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="card2">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: 500px;
    height: 250px;
    background-image: linear-gradient(163deg, #64748b 0%, #94a3b8 100%);
    border-radius: 20px;
    transition: all 0.3s;
    margin: 10px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 10px rgba(100, 116, 139, 0.5);
  }

  .card2 {
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    border-radius: 20px;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #f3f3f3;
    padding: 20px;
  }

  .card2:hover {
    transform: scale(1.02);
    color: #ffffff;
  }

  h2 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem; /* Default size */
    margin-bottom: 10px;
    transition: color 0.3s, transform 0.3s;
  }

  p {
    text-align: justify;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem; /* Default size */
    transition: color 0.3s, transform 0.3s;
  }

  .card2:hover h2, .card2:hover p {
    transform: scale(1.05);
    color: #94a3b8;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .card {
      max-width: 100%;
      height: auto;
    }

    .card2 {
      padding: 15px;
    }

    h2 {
      font-size: 1.2rem; /* Smaller size on mobile */
    }

    p {
      font-size: 0.9rem; /* Smaller size on mobile */
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1rem; /* Even smaller on very small screens */
    }

    p {
      font-size: 0.85rem; /* Even smaller on very small screens */
    }
  }
`;

export default CardNew;
