function gerarMusica() {
    const nota1 = document.getElementById('note1').value;
    const nota2 = document.getElementById('note2').value;
    const nota3 = document.getElementById('note3').value;
  
    const musicas = [
      `Música com as notas ${nota1}, ${nota2} e ${nota3}`,
      `Outra música com as notas ${nota1}, ${nota2} e ${nota3}`,
      `Mais uma música com as notas ${nota1}, ${nota2} e ${nota3}`
    ];
  
    const musicaIndex = Math.floor(Math.random() * musicas.length);
    const musicaSelecionada = musicas[musicaIndex];
  
    document.getElementById('musica').textContent = musicaSelecionada;
  }