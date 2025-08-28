const image = document.getElementById('image');
const mensagem = document.getElementById('mensagem');

image.addEventListener('mouseover', function() {
    mensagem.textContent = 'Você passou o mouse na imagem'
    mensagem.addEventListener('mouseout', function() {
        mensagem.textContent = '' 
        
    });
    mensagem.style.fontSize = '50px'
});