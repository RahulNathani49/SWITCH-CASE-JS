function display() {
    var input = document.getElementById("input");
    var value = input.innerHTML;
    var value = parseInt(value);
    var result = document.getElementById("display");

    switch (value) {
        case 1:
            result.innerHTML = "TODAY IS SUNDAY";
            break;

        case 2:
            result.innerHTML = "TODAY IS MONDAY";
            break;

        case 3:
            result.innerHTML = "TODAY IS TUESDAY";
            break;

        case 4:
            result.innerHTML = "TODAY IS WEDNESDAY";
            break;

        case 5:
            result.innerHTML = "TODAY IS THURSDAY";
            break;

        case 6:
            result.innerHTML = "TODAY IS FRIDAY";
            break;

        case 7:
            result.innerHTML = "TODAY IS SATURDAY";
            break;

        default:
            alert("ENTER A NUMBER 1 to 7 !");

    }

}
