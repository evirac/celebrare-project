$(document).ready(function () {
  $("#my-file").on("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#uploadedImage").attr("src", e.target.result);
        $("#imageModal").modal("show");
      };
      reader.readAsDataURL(file);
    }
  });
});
