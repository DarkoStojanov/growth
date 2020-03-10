setTimeout(() => {
  $('#myModal').modal('show');
  $('#loader').addClass('d-none');
}, 2000);

$('#login').on('click', () => {
  $('#secondary').removeClass('d-none');
});
