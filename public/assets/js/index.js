$(function () {
    $(".devourButton").on("click", function (event) {
        var id = $(this).data("id")
        var newState = {
            devour: true
        }
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function () {
                location.reload()
            }
        )
    })

    $(".add-burger").on("submit", function (event) {
        event.preventDefault()
        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        }
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload()
            }
        )
    })
})