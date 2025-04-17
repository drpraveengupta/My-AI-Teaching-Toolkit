function submitFeedback() {
  const feedback = document.getElementById('feedback').value;
  if (feedback.trim()) {
    alert('Thank you for your feedback!');
    document.getElementById('feedback').value = '';
  } else {
    alert('Please write some feedback before submitting.');
  }
}
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
