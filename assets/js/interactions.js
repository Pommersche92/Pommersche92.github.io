// Like/Dislike Interactions using localStorage
(function() {
  const LIKES_KEY = 'post-likes';
  const DISLIKES_KEY = 'post-dislikes';
  const USER_REACTIONS_KEY = 'user-reactions';
  
  // Get all reactions from localStorage
  function getReactions(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }
  
  // Save reactions to localStorage
  function saveReactions(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Get user's reaction for a post
  function getUserReaction(postUrl) {
    const reactions = getReactions(USER_REACTIONS_KEY);
    return reactions[postUrl] || null;
  }
  
  // Set user's reaction for a post
  function setUserReaction(postUrl, reaction) {
    const reactions = getReactions(USER_REACTIONS_KEY);
    reactions[postUrl] = reaction;
    saveReactions(USER_REACTIONS_KEY, reactions);
  }
  
  // Update count for a post
  function updateCount(key, postUrl, increment) {
    const counts = getReactions(key);
    counts[postUrl] = (counts[postUrl] || 0) + increment;
    saveReactions(key, counts);
    return counts[postUrl];
  }
  
  // Get count for a post
  function getCount(key, postUrl) {
    const counts = getReactions(key);
    return counts[postUrl] || 0;
  }
  
  // Initialize buttons
  function initializeButtons() {
    const likeBtn = document.querySelector('.like-btn');
    const dislikeBtn = document.querySelector('.dislike-btn');
    
    if (!likeBtn || !dislikeBtn) return;
    
    const postUrl = likeBtn.getAttribute('data-post');
    const userReaction = getUserReaction(postUrl);
    
    // Display current counts
    const likeCount = getCount(LIKES_KEY, postUrl);
    const dislikeCount = getCount(DISLIKES_KEY, postUrl);
    
    likeBtn.querySelector('.like-count').textContent = likeCount;
    dislikeBtn.querySelector('.dislike-count').textContent = dislikeCount;
    
    // Set active state based on user's previous reaction
    if (userReaction === 'like') {
      likeBtn.classList.add('active');
    } else if (userReaction === 'dislike') {
      dislikeBtn.classList.add('active');
    }
    
    // Like button click handler
    likeBtn.addEventListener('click', function() {
      const currentReaction = getUserReaction(postUrl);
      
      if (currentReaction === 'like') {
        // Remove like
        updateCount(LIKES_KEY, postUrl, -1);
        setUserReaction(postUrl, null);
        likeBtn.classList.remove('active');
      } else {
        // Add like
        updateCount(LIKES_KEY, postUrl, 1);
        
        // Remove dislike if exists
        if (currentReaction === 'dislike') {
          updateCount(DISLIKES_KEY, postUrl, -1);
          dislikeBtn.classList.remove('active');
        }
        
        setUserReaction(postUrl, 'like');
        likeBtn.classList.add('active');
      }
      
      // Update display
      likeBtn.querySelector('.like-count').textContent = getCount(LIKES_KEY, postUrl);
      dislikeBtn.querySelector('.dislike-count').textContent = getCount(DISLIKES_KEY, postUrl);
    });
    
    // Dislike button click handler
    dislikeBtn.addEventListener('click', function() {
      const currentReaction = getUserReaction(postUrl);
      
      if (currentReaction === 'dislike') {
        // Remove dislike
        updateCount(DISLIKES_KEY, postUrl, -1);
        setUserReaction(postUrl, null);
        dislikeBtn.classList.remove('active');
      } else {
        // Add dislike
        updateCount(DISLIKES_KEY, postUrl, 1);
        
        // Remove like if exists
        if (currentReaction === 'like') {
          updateCount(LIKES_KEY, postUrl, -1);
          likeBtn.classList.remove('active');
        }
        
        setUserReaction(postUrl, 'dislike');
        dislikeBtn.classList.add('active');
      }
      
      // Update display
      likeBtn.querySelector('.like-count').textContent = getCount(LIKES_KEY, postUrl);
      dislikeBtn.querySelector('.dislike-count').textContent = getCount(DISLIKES_KEY, postUrl);
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeButtons);
  } else {
    initializeButtons();
  }
})();
