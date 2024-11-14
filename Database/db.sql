create database camargo_esportes;
use camargo_esportes;

create table noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    data_publicacao DATE NOT NULL,
    autor VARCHAR(100),
    categoria VARCHAR(50)
);

INSERT INTO noticias (titulo, conteudo, data_publicacao, autor, categoria) VALUES
('Time A vence o Time B no campeonato regional', 'O Time A venceu o Time B por 3 a 1 na última partida do campeonato regional, consolidando sua posição no topo da tabela.', '2024-11-13', 'João da Silva', 'Futebol'),
('Jogador X se lesiona em treino e desfalca o time', 'O jogador X sofreu uma lesão no joelho durante o treino desta manhã e deve ficar fora das próximas partidas.', '2024-11-13', 'Maria Oliveira', 'Futebol'),
('Time de basquete local se classifica para as finais', 'Com uma vitória impressionante de 98 a 90, o time de basquete local avançou para as finais do torneio estadual.', '2024-11-13', 'Carlos Mendes', 'Basquete'),
('Atleta Y quebra recorde nacional na maratona', 'O atleta Y estabeleceu um novo recorde nacional ao completar a maratona em 2 horas e 5 minutos.', '2024-11-13', 'Ana Sousa', 'Atletismo'),
('Time Z conquista título após disputa acirrada', 
 'O Time Z venceu o campeonato após uma partida acirrada contra o Time W, garantindo o troféu com um placar de 2 a 1.', 
 '2024-11-13', 'Lucas Pereira', 'Futebol'),

('Tenista A vence o grande torneio internacional', 
 'Com uma vitória em sets diretos, a tenista A superou sua adversária e conquistou o título no torneio internacional.', 
 '2024-11-13', 'Clara Gomes', 'Tênis'),

('Seleção brasileira se prepara para amistoso', 
 'A seleção brasileira está em treinamento intensivo para o amistoso da próxima semana, buscando testar novas estratégias de jogo.', 
 '2024-11-13', 'Eduardo Lima', 'Futebol'),

('Maratonista B realiza preparação especial para a Olimpíada', 
 'Em busca da medalha de ouro, o maratonista B está realizando uma preparação diferenciada para a Olimpíada deste ano.', 
 '2024-11-13', 'Paula Souza', 'Atletismo'),

('Piloto C garante pole position na última corrida da temporada', 
 'O piloto C conquistou a pole position na última etapa do campeonato, prometendo uma emocionante corrida final.', 
 '2024-11-13', 'Bruno Andrade', 'Automobilismo'),

('Equipe D de vôlei vence clássico e segue invicta no campeonato', 
 'Em um confronto emocionante, a equipe D venceu seu maior rival e permanece invicta no campeonato estadual.', 
 '2024-11-13', 'Fernanda Costa', 'Vôlei'),

('Lutador E defende o cinturão com vitória por nocaute', 
 'O lutador E manteve seu título de campeão com uma vitória por nocaute no segundo round.', 
 '2024-11-13', 'Carlos Monteiro', 'MMA'),

('Jogador F é destaque no basquete com triplo-duplo', 
 'O jogador F brilhou na quadra, registrando um triplo-duplo que garantiu a vitória de sua equipe.', 
 '2024-11-13', 'Rafael Pinto', 'Basquete'),

('Time G de rugby conquista classificação histórica para a final', 
 'Com uma atuação impecável, o Time G se classificou para a final do campeonato, pela primeira vez em sua história.', 
 '2024-11-13', 'Vanessa Melo', 'Rugby'),

('Esquiadora H conquista ouro no mundial de inverno', 
 'A esquiadora H superou suas concorrentes e garantiu a medalha de ouro na categoria slalom gigante.', 
 '2024-11-13', 'Julia Nunes', 'Esportes de Inverno');

