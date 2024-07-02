document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews');
  
    // Function to fetch reviews from backend
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3000/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const reviews = await response.json();
        displayReviews(reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };
  
    // Function to display reviews on the webpage
    const displayReviews = (reviews) => {
      reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review-item');
        reviewDiv.innerHTML = `
          <h2>${review.title}</h2>
          <p><strong>Author:</strong> ${review.author}</p>
          <p><strong>Rating:</strong> ${review.rating}</p>
          <p><strong>Review:</strong> ${review.reviewText}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
      });
    };
  
    // Fetch reviews when the DOM content is loaded
    fetchReviews();
  });