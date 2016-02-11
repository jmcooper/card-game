'use strict';

app.controller('GameController', function($scope) {
  var unshuffledDeck = [
    {name: 'Link', health: 10, attackDamage: 5, image: 'link.png'},
    {name: 'Kirby', health: 63, attackDamage: 20},
    {name: 'Pacman', health: 5, attackDamage: 3},
    {name: 'Soldier', health: 1, attackDamage: 1},
    {name: 'Butterfree', health: 4, attackDamage: 6},
    {name: 'Stuart Little', health: 6, attackDamage: 2},
    {name: 'Sally Mander', health: 5, attackDamage: 30},
    {name: 'Jupiter', health: 20, attackDamage: 10}
  ]
  var numPlayers = 4
  var deckSize = 2

  $scope.players = [
    {name: 'Billy', deck: []},
    {name: 'Jason', deck: []},
    {name: 'Trogdor', deck: []},
    {name: 'Nancy', deck: []}
  ]

  var currentPlayer = $scope.players[0]

  $scope.cardSelected = function(card) {
    var currentCardBelongsToCurrentPlayer, attackingCard
    for (var i = 0; i < currentPlayer.deck.length; i++) {
      if (currentPlayer.deck[i].attacking)
        attackingCard = currentPlayer.deck[i]

      if (currentPlayer.deck[i] === card)
        currentCardBelongsToCurrentPlayer = true

    }

    if (currentCardBelongsToCurrentPlayer) {
      card.attacking = !card.attacking;
    }
    else {
      if (attackingCard)
        card.health -= attackingCard.attackDamage
    }


  }

  $scope.killPlayer1Card1 = function() {
    $scope.players[0].deck.splice(0,1)
  }

  shuffleAndDeal()

  function shuffleAndDeal() {
    $scope.shuffledDeck = unshuffledDeck

    for (var i = unshuffledDeck.length; i >= 0; i--)
    {
      var cardsRemoved = unshuffledDeck.splice(getRandomIntInclusive(0,i) - 1,1)
      var cardRemoved = cardsRemoved[0]

      $scope.shuffledDeck.push(cardRemoved)
    }

    for (var x = 0; x < numPlayers; x++)
    {
      $scope.players[x].deck = $scope.shuffledDeck.splice(0, deckSize)
    }
  }

  $scope.getCardStyle = function(card) {
    return {'background-image': 'url(/img/' + card.image + ')', 'background-size': '100% 100%'}
  }

  $scope.cardEnter = function(card) {
    card.hoverImage = '/img/' + card.image
  }

  $scope.cardLeave = function(card) {
    card.hoverImage = null
  }

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
})
