// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// jQuery.ajaxSetup({ 
//   'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
// })

// jQuery.fn.submitWithAjax = function() {
//   this.submit(function() {
//     $.post(this.action, $(this).serialize(), null, "script");
//     return false;
//   })
//   return this;
// };

// $(document).ready(function() {
//   $("#new_review").submitWithAjax();
// })
jQuery.ajaxSetup({
  'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
})

$(document).ready(function(){
  $("#new_review").submit(function(){
    $.post($(this).attr("action"), $(this).serialize(), null, "script")
    return false;
  })
})