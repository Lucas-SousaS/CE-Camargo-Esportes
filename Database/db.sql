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
 '2024-11-13', 'João da Silva', 'Futebol', 'https://preview.redd.it/uno-henrique-apenas-v0-ffupm07d8iea1.jpg?auto=webp&s=337d9a48067b0badb004a6a22d5664578741ce63'),
 
('Jogador X se lesiona em treino e desfalca o time', 
 'O jogador X sofreu uma lesão no joelho durante o treino desta manhã e deve ficar fora das próximas partidas.', 
 '2024-11-13', 'Maria Oliveira', 'Futebol', 'https://th.bing.com/th/id/OIP.J-mhEnhrhR8Wm4cVvBTYigHaH0?rs=1&pid=ImgDetMain'),

('Time de basquete local se classifica para as finais', 
 'Com uma vitória impressionante de 98 a 90, o time de basquete local avançou para as finais do torneio estadual.', 
 '2024-11-13', 'Carlos Mendes', 'Basquete', 'https://th.bing.com/th/id/OIP.VSnVy3ax7BbbOO7ee9tA5wHaGA?w=199&h=180&c=7&r=0&o=5&pid=1.7'),

('Atleta Y quebra recorde nacional na maratona', 
 'O atleta Y estabeleceu um novo recorde nacional ao completar a maratona em 2 horas e 5 minutos.', 
 '2024-11-13', 'Ana Sousa', 'Atletismo', 'https://i0.wp.com/meupeixao.com.br/wp-content/uploads/2021/06/75962c5f84184f71a68e2068187629b1.jpg?w=1200&ssl=1'),

('Time Z conquista título após disputa acirrada', 
 'O Time Z venceu o campeonato após uma partida acirrada contra o Time W, garantindo o troféu com um placar de 2 a 1.', 
 '2024-11-13', 'Lucas Pereira', 'Futebol','https://th.bing.com/th/id/OIP.VSnVy3ax7BbbOO7ee9tA5wHaGA?w=199&h=180&c=7&r=0&o=5&pid=1.7'),

('Tenista A vence o grande torneio internacional', 
 'Com uma vitória em sets diretos, a tenista A superou sua adversária e conquistou o título no torneio internacional.', 
 '2024-11-13', 'Clara Gomes', 'Tênis', 'https://filhodepeixe.wordpress.com/wp-content/uploads/2019/12/basilio-santos.jpg'),

('Seleção brasileira se prepara para amistoso', 
 'A seleção brasileira está em treinamento intensivo para o amistoso da próxima semana, buscando testar novas estratégias de jogo.', 
 '2024-11-13', 'Eduardo Lima', 'Futebol', 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2016/09/12/57d6c0ae5ea35.jpeg'),

('Maratonista B realiza preparação especial para a Olimpíada', 
 'Em busca da medalha de ouro, o maratonista B está realizando uma preparação diferenciada para a Olimpíada deste ano.', 
 '2024-11-13', 'Paula Souza', 'Atletismo', 'https://i.uai.com.br/YqQQNFqTuUnKaHxfZ1AAnIBPr_o=/1200x675/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2022/08/20/297775/20220820110833744378o.jpg'),

('Piloto C garante pole position na última corrida da temporada', 
 'O piloto C conquistou a pole position na última etapa do campeonato, prometendo uma emocionante corrida final.', 
 '2024-11-13', 'Bruno Andrade', 'Automobilismo', 'https://10ef71c6.rocketcdn.me/wp-content/uploads/2023/07/Bolsonaro___Reproducao____Metropoles.jpg'),

('Equipe D de vôlei vence clássico e segue invicta no campeonato', 
 'Em um confronto emocionante, a equipe D venceu seu maior rival e permanece invicta no campeonato estadual.', 
 '2024-11-13', 'Fernanda Costa', 'Vôlei', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3iik6L7mcmXFX_jzoRAyCev7hNYfnGDqTA&s'),

('Lutador E defende o cinturão com vitória por nocaute', 
 'O lutador E manteve seu título de campeão com uma vitória por nocaute no segundo round.', 
 '2024-11-13', 'Carlos Monteiro', 'MMA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfXeZYZc3SrSjVsamnJzTtpT2tAH41nHJVw&s'),

('Jogador F é destaque no basquete com triplo-duplo', 
 'O jogador F brilhou na quadra, registrando um triplo-duplo que garantiu a vitória de sua equipe.', 
 '2024-11-13', 'Rafael Pinto', 'Basquete', 'https://pbs.twimg.com/media/F4-OnhmXYAAMewE.jpg'),

('Time G de rugby conquista classificação histórica para a final', 
 'Com uma atuação impecável, o Time G se classificou para a final do campeonato, pela primeira vez em sua história.', 
 '2024-11-13', 'Vanessa Melo', 'Rugby', 'https://www.diariodosertao.com.br/wp-content/uploads/2018/07/jailson-mende.jpg'),

('Esquiadora H conquista ouro no mundial de inverno', 
 'A esquiadora H superou suas concorrentes e garantiu a medalha de ouro na categoria slalom gigante.', 
 '2024-11-13', 'Julia Nunes', 'Esportes de Inverno', 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/02/25085830/popo-x-bambam.jpg');
