let selectedFilter = "none";
let selectedFrame = "none";

$(document).ready(function () {
  $("#my-file").on("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $("#uploadedImage").attr("src", e.target.result);
        $("#imageModal").modal("show");
        applyFrameAndFilter();
      };
      reader.readAsDataURL(file);
    }
  });

  $(".frame").on("click", function () {
    selectedFrame = $(this).data("filter");
    applyFrameAndFilter();
  });

  $("#useImageBtn").on("click", function () {
    $("#finalImage").attr("src", $("#uploadedImage").attr("src")).show();
    applyFrameAndFilter("#finalImage");
  });

  function applyFrameAndFilter(target = "#uploadedImage") {
    const $image = $(target);
    $image.removeClass().addClass("img-fluid mb-3");

    if (selectedFrame !== "none") {
      const $frameContainer = $("<div>").addClass("frame-container");
      const $frame = $("<img>")
        .addClass("frame-overlay")
        .attr("src", `asset/user_image_frame_${selectedFrame}.png`);

      $image.wrap($frameContainer);
      $image.after($frame);
    } else {
      $image.unwrap(".frame-container");
      $image.siblings(".frame-overlay").remove();
    }
  }
});
