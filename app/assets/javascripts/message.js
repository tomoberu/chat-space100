$(function(){
      function buildHTML(message){

        let image_html = "";
        if (message.image) {
           image_html = `<img src=${message.image} ></img>`
        }
          var html = 
          `<div class="contents__top" data-message-id=${message.id}>
            <div class="contents__top__name">
                  ${message.user_name}
            </div>
            <div class="contents__top__date">
            ${message.date}
            </div>
          </div>
          <div class="contents__top__message">
              <p class="lower-message__content">
                ${message.content}
              </p>
              ${image_html}
          </div>`
          return html;
      }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.contents').append(html);
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 'fast');         
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });
})
