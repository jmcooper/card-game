app.controller('GameController', function($scope) {
  $scope.unshuffledDeck = [
    {name: 'Frost Giant', health: 10},
    {name: 'Kirby', health: 63},
    {name: 'Pacman', health: 5},
    {name: 'Soldier', health: 1},
    {name: 'Butterfree', health: 4},
    {name: 'Stuart Little', health: 6},
    {name: 'Sally Mander', health: 5},
    {name: 'Jupiter', health: 20}
  ]

  var numPlayers = 4
  var deckSize = 2
  $scope.players = [
    {name: 'Billy', deck: []},
    {name: 'Jason', deck: []},
    {name: 'Trogdor', deck: []},
    {name: 'Nancy', deck: []}
  ]

  $scope.shuffle = function() {
    $scope.shuffledDeck = $scope.unshuffledDeck

    for (var i = $scope.unshuffledDeck.length; i >= 0; i--)
    {
      var cardsRemoved = $scope.unshuffledDeck.splice(getRandomIntInclusive(0,i) - 1,1)
      var cardRemoved = cardsRemoved[0]

      $scope.shuffledDeck.push(cardRemoved)
    }

    for (var x = 0; x < numPlayers; x++)
    {
      $scope.players[x].deck = $scope.shuffledDeck.splice(0, deckSize)
    }
  }

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
})
