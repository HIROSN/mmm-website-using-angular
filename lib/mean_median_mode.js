'use strict';

var MeanMedianMode = function() {
  return {
    mean: function() {
      var numbers = this.createNumberArray(arguments);
      var sum = 0.0;

      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }

      return sum / (numbers.length || 1);
    },

    median: function() {
      var numbers = this.createNumberArray(arguments).sort(function(a, b) {
        return a - b;
      });

      var idx = Math.floor(numbers.length / 2);

      if (!idx || (numbers.length % 2)) {
        return numbers[idx] || 0;
      }

      return (numbers[idx] + numbers[idx - 1]) / 2.0;
    },

    mode: function() {
      var numbers = this.createNumberArray(arguments);
      var map = {};
      var max = 0;
      var mode = [];

      for (var i = 0; i < numbers.length; i++) {
        max = Math.max(max, map[numbers[i]] = (map[numbers[i]] || 0) + 1);
      }

      for (var number in map) {
        if (map[number] === max) {
          mode.push(Number(number));
        }
      }

      return mode.length > 1 ? mode : (mode[0] || 0);
    },

    createNumberArray: function(args) {
      var numberArray = [];

      for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === 'object') {
          numberArray = numberArray.concat(
            this.createNumberArray(args[i]));
        }
        else {
          var number = Number(args[i]);

          if (number || 0 === number) {
            numberArray.push(number);
          }
        }
      }

      return numberArray;
    }
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;
