document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(elems, {
        coverTrigger: false,
        hover: true
    });
  });