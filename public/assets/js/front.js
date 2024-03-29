// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-this").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("devour");

    console.log("newDevour" , newDevour);

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed sleep to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#new-burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-this").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/"+id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger with id:", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })
});
