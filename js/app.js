// Firebase yapılandırması ve başlatılması
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // Diğer Firebase yapılandırma detayları
};
firebase.initializeApp(firebaseConfig);

// Google Pay ve Firebase oturum açma işlevleri
document.getElementById('donateButton').addEventListener('click', function() {
  // Google Pay ile bağış yapma işlevini buraya ekleyin
});

document.getElementById('loginButton').addEventListener('click', function() {
  // Firebase ile giriş yapma işlevini buraya ekleyin
});
const footer = document.getElementById('footer');
const footerToggle = document.getElementById('footerToggle');

let isFooterHidden = true;

footerToggle.addEventListener('click', () => {
    isFooterHidden = !isFooterHidden;
    if (isFooterHidden) {
        footer.style.transform = 'translateY(100%)';
    } else {
        footer.style.transform = 'translateY(0)';
    }
});
