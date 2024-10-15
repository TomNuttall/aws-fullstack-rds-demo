-- Custom SQL migration file, put you code below! --
CREATE OR REPLACE VIEW CardsView AS
SELECT 
  Card.id,
  Card.name,
  Card.value,
  Card.shiny AS isShiny,
  NULL As userId
FROM Card

UNION
  
SELECT 
  Card.id,
  Card.name,
  Card.value,
  Card.shiny AS isShiny,
  CardToUser.userId AS userId
FROM Card
INNER JOIN CardToUser ON CardToUser.cardId = Card.id;