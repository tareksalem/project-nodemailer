$(document).ready(function(e){
    $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };
    $(document).foundation();
    $('.invisible').removeClass('invisible');
});