$("container").load(function() {
    $(this).fadeIn(1000);
  }).each(function() {
    if(this.complete) $(this).load();
  });