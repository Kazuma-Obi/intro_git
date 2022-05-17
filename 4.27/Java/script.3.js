//入力必須
$(function(){
    $('#submit_btn').on('click', function(){
      if($('#name').val() === ''){
        alert('名前を入力してください！');
        $('#name').focus();
        return false;
      }
      
  });
});
