(function () {


  var mypromise = $.ajax({
    url: 'http://json-data.herokuapp.com/forms',
    dataType: 'json',
    success: function(data){
      console.log(data);

      var itemTemplate = $('#info-template').text();

      var renderTemplate = _.template(itemTemplate);

      _.each(data, function(i){
        var freshHTML = renderTemplate(i);
        $('#TheScript').append(freshHTML);
      })
    }
  });


// let url = 'http://json-data.herokuapp.com/forms';


// //Go fetch our dataand do something with it
// let promise = $.getJSON(url);
// promise.then(function (res){
//   doSomething(res);
// });

// //Templates
// let genericInput = _.template($('#generic-form').text());

// //Our do something function
// let doSomething = function(arr){

//   _.each(arr, function(item){

//     var htmlBlock;

//     if(item.type === 'text' || item.type === ''){
//       htmlBlock = genericInput(item);
//     }
//     $('form').append(htmlBlock);
//   })
// }





}());
