'use strict';

/**
 * @ngdoc service
 * @name yoangularApp.lorem
 * @description
 * # lorem
 * Factory in the yoangularApp.
 */
angular.module('yoangularApp')
  .factory('lorem', function () {
    var meaningOfLife = 42;

    // Public API here
    return {
      life: function () {
        return meaningOfLife;
      },
      items: function () {
        return [
          {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula blandit urna, sit amet dapibus magna facilisis id. Proin ac vulputate ante, et tincidunt sem. Sed at nisi turpis. Fusce efficitur porttitor eros, vitae pellentesque est sollicitudin at. Nam feugiat lacus ante, sed rhoncus metus bibendum id. Suspendisse potenti. Nulla sit amet tellus facilisis, pharetra enim commodo, scelerisque nisi. Curabitur ex urna, faucibus eget neque sed, consectetur finibus eros. Duis arcu risus, suscipit in sem eget, eleifend dictum nunc.',
            image: 'images/bg/low-res/summer/1.png'
          },
          {
            title: 'Etiam sed condimentum tortor',
            description: 'Etiam sed condimentum tortor, commodo vulputate lorem. Sed viverra risus molestie velit lacinia vestibulum. Proin pulvinar, lorem in molestie condimentum, sem est consectetur urna, sit amet efficitur ante lorem id odio. Duis tincidunt nunc odio, vulputate maximus justo bibendum nec. In pharetra nisl lorem, nec suscipit dolor malesuada ut. Cras at lorem justo. Sed dictum, purus a cursus pellentesque, felis purus efficitur velit, eget volutpat erat eros eget dui. Sed ex elit, fermentum id dictum sed, iaculis vitae augue. Maecenas feugiat felis leo. Donec a leo tempus, vehicula purus imperdiet, blandit magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus pulvinar ipsum et posuere viverra. Nunc ac magna odio. Fusce eros elit, rutrum ac est at, hendrerit fringilla quam. Nullam egestas mollis pulvinar. Nullam tempus quam id ante fringilla, ac sollicitudin urna convallis.',
            image: 'images/bg/low-res/summer/2.png'
          },
          {
            title: 'Maecenas at eros',
            description: 'Maecenas at eros est. Nam sollicitudin leo risus, quis porta est sodales nec. Curabitur aliquam luctus eros, in consequat justo molestie sit amet. Etiam dapibus facilisis erat et auctor. Sed iaculis dignissim faucibus. Integer tristique augue in dolor dictum vehicula. Maecenas imperdiet elementum purus in feugiat. Duis eu mi id sapien pharetra faucibus id vel ante. Morbi convallis ligula risus.',
            image: 'images/bg/low-res/summer/3.png'
          },
          {
            title: 'Pellentesque rutrum',
            description: 'Pellentesque rutrum dignissim ultricies. Pellentesque consequat leo eu placerat mollis. Integer fermentum nec enim sed fermentum. Morbi viverra rhoncus euismod. Phasellus mattis imperdiet ornare. Phasellus arcu est, interdum a porta sit amet, venenatis dignissim nisl. Donec finibus lacus suscipit, maximus elit quis, feugiat leo.',
            image: 'images/bg/low-res/summer/4.png'
          },
          {
            title: 'Proin interdum',
            description: 'Proin interdum iaculis rhoncus. Ut ultrices felis at lorem lobortis sagittis. Nunc varius sagittis tempus. Fusce tempus dui quis libero tincidunt commodo. Morbi maximus magna in lectus facilisis elementum. Donec eleifend vitae libero ut pretium. Suspendisse in sodales lectus, sed ornare ex. Proin quis lorem id odio mattis lobortis et a leo. Sed tempus gravida urna aliquam mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In imperdiet gravida turpis. Nullam dolor lacus, placerat in rhoncus id, lobortis vel lacus. Sed non volutpat est. Maecenas vestibulum augue a orci tincidunt, quis finibus mauris rutrum. Curabitur varius mauris dui, in scelerisque nisl auctor nec.',
            image: 'images/bg/low-res/summer/5.png'
          }
        ];
      },
      images: function () {
        return [
          'images'
        ];
      }
    };
  });
