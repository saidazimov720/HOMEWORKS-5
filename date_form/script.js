var dateList = [];
function addDate(form, date) {
    if (!isValidDateFormat(form)) {
        return "Please enter a valid date format (e.g., DD-MM-YYYY).";
    }
    if (!isValidDate(date, form)) {
        return "Please enter a valid date according to the format " + form + ".";
    }
    var formattedDate = formatDate(date, form);
    dateList.push(formattedDate);

    return "Date added successfully.";
}
function isValidDateFormat(format) {
    return format === "DD-MM-YYYY" || format === "MM-DD-YYYY" || format === "YYYY-MM-DD";
}

function isValidDate(date, format) {
    return date.trim() !== "";
}

function formatDate(date, format) {
    var parts = date.split("-");
    if (format === "DD-MM-YYYY") {
        return parts[2] + "-" + parts[1] + "-" + parts[0];
    } else if (format === "MM-DD-YYYY") {
        return parts[2] + "-" + parts[0] + "-" + parts[1];
    }
    else if (format === "YYY-MM-DD") {
        return parts[0] + "-" + parts[1] + "-" + parts[2];
    }
     else {
        return date; 
    }
}
function displayDates() {
    var dates = "";
    for (var i = 0; i < dateList.length; i++) {
        dates += dateList[i] + "\n";
    }
    return "Dates:\n" + dates;
}

var form = prompt("Enter the date form (e.g., DD-MM-YYYY):");
var date = prompt("Enter the date:");
var result = addDate(form, date);
if (result === "Date added successfully.") {
    alert(displayDates());
} else {
    alert(result);
}
