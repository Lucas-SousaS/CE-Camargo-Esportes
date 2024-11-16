CREATE DATABASE camargo_esportes;

USE camargo_esportes;


CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    data_publicacao DATE NOT NULL,
    autor VARCHAR(100),
    categoria VARCHAR(50),
    imagem_url VARCHAR(255)  
);

INSERT INTO noticias (titulo, conteudo, data_publicacao, autor, categoria, imagem_url) VALUES
('Time A vence o Time B no campeonato regional', 
 'O Time A venceu o Time B por 3 a 1 na última partida do campeonato regional, consolidando sua posição no topo da tabela.', 
 '2024-11-13', 'João da Silva', 'Futebol', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),
 
('Jogador X se lesiona em treino e desfalca o time', 
 'O jogador X sofreu uma lesão no joelho durante o treino desta manhã e deve ficar fora das próximas partidas.', 
 '2024-11-13', 'Maria Oliveira', 'Futebol', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Time de basquete local se classifica para as finais', 
 'Com uma vitória impressionante de 98 a 90, o time de basquete local avançou para as finais do torneio estadual.', 
 '2024-11-13', 'Carlos Mendes', 'Basquete', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Atleta Y quebra recorde nacional na maratona', 
 'O atleta Y estabeleceu um novo recorde nacional ao completar a maratona em 2 horas e 5 minutos.', 
 '2024-11-13', 'Ana Sousa', 'Atletismo', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Time Z conquista título após disputa acirrada', 
 'O Time Z venceu o campeonato após uma partida acirrada contra o Time W, garantindo o troféu com um placar de 2 a 1.', 
 '2024-11-13', 'Lucas Pereira', 'Futebol','https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Tenista A vence o grande torneio internacional', 
 'Com uma vitória em sets diretos, a tenista A superou sua adversária e conquistou o título no torneio internacional.', 
 '2024-11-13', 'Clara Gomes', 'Tênis', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Seleção brasileira se prepara para amistoso', 
 'A seleção brasileira está em treinamento intensivo para o amistoso da próxima semana, buscando testar novas estratégias de jogo.', 
 '2024-11-13', 'Eduardo Lima', 'Futebol', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Maratonista B realiza preparação especial para a Olimpíada', 
 'Em busca da medalha de ouro, o maratonista B está realizando uma preparação diferenciada para a Olimpíada deste ano.', 
 '2024-11-13', 'Paula Souza', 'Atletismo', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Piloto C garante pole position na última corrida da temporada', 
 'O piloto C conquistou a pole position na última etapa do campeonato, prometendo uma emocionante corrida final.', 
 '2024-11-13', 'Bruno Andrade', 'Automobilismo', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Equipe D de vôlei vence clássico e segue invicta no campeonato', 
 'Em um confronto emocionante, a equipe D venceu seu maior rival e permanece invicta no campeonato estadual.', 
 '2024-11-13', 'Fernanda Costa', 'Vôlei', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Lutador E defende o cinturão com vitória por nocaute', 
 'O lutador E manteve seu título de campeão com uma vitória por nocaute no segundo round.', 
 '2024-11-13', 'Carlos Monteiro', 'MMA', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Jogador F é destaque no basquete com triplo-duplo', 
 'O jogador F brilhou na quadra, registrando um triplo-duplo que garantiu a vitória de sua equipe.', 
 '2024-11-13', 'Rafael Pinto', 'Basquete', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Time G de rugby conquista classificação histórica para a final', 
 'Com uma atuação impecável, o Time G se classificou para a final do campeonato, pela primeira vez em sua história.', 
 '2024-11-13', 'Vanessa Melo', 'Rugby', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2024/11/Mike-Tyson-Jake-Paul-Boxe-scaled-aspect-ratio-512-320.jpg'),

('Esquiadora H conquista ouro no mundial de inverno', 
 'A esquiadora H superou suas concorrentes e garantiu a medalha de ouro na categoria slalom gigante.', 
 '2024-11-13', 'Julia Nunes', 'Esportes de Inverno', 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/02/25085830/popo-x-bambam.jpg');


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro'),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
