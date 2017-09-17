function updateRemainingChars(){
  const textLength = jQuery("#question-tf").val().length;

  $("#text_counter").html(200 - textLength);
}

$("#question-tf").on("change keyup paste", updateRemainingChars);
