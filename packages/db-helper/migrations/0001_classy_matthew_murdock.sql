-- Custom SQL migration file, put you code below! --
CREATE OR REPLACE VIEW CardsView AS
SELECT 
  CardToUser.*,
	User.userHash AS userName,
	Card.name AS cardName,
	Card.value AS cardValue,
	Card.shiny AS isShiny
FROM CardToUser
LEFT JOIN User ON User.id = CardToUser.userId
LEFT JOIN Card ON Card.id = CardToUser.cardId;