
$(document).ready(function () {
    $("#submit").click(function () {
        var validForm = true;

        if ($("#fName").val().match(/[^a-zA-Z]/gi)) {
            $("#fNameError").html("Only letters allowed");
            validForm = false;
        }
        else {
            $("#fNameError").html("");
            if ($("#fName").val() == "") {
                $("#fNameError").html("Please enter your first name");
                validForm = false;
            }
            
        }

        if ($("#mName").val().match(/[a-zA-Z]/gi)) {
            $("#mNameError").html("");
           
        }
        else {
            $("#mNameError").html("");
            if ($("#mName").val().match(/[^a-zA-Z]/gi)) {
                $("#mNameError").html("only letters allowed");
                validForm = false;
            }
            
        }

        if ($("#lName").val().match(/[^a-zA-Z]/gi)) {
            $("#lNameError").html("Only letters allowed");
            validForm = false;
        }
        else {
            $("#lNameError").html("");
            if ($("#lName").val() == "") {
                $("#lNameError").html("Please enter your last name");
                validForm = false;
            }
            
        }
// end name validation

        if ($("#ssn").val().match(/(?!000|666)[0-9]{3}([ -]?)(?!00)[0-9]{2}\1(?!0000)[0-9]{4}$/gi)) {
            $("#ssnError").html("");
            validForm = false;
        }
        else {
            $("#ssnError").html("use proper format 123-12-1234");
            if ($("#ssn").val() == "") {
                $("#ssnError").html("Please enter your SSN#");
                validForm = false;
            }
            
        }
//end SSN validation

        if ($("#maritalStatus").val().match(/[^a-zA-Z]/gi)) {
            $("#maritalStatusError").html("Only letters allowed");
            validForm = false;
        }
        else {
            $("#maritalStatusError").html("");
            
        }

        if ($("#DOB").val().match(/[^a-zA-Z0-9/-]/gi)) {
            $("#DOBError").html("only letters,numbers, slashes and dashes allowed");
            validForm = false;
        }
        else {
            $("#DOBError").html("");
            if ($("#DOB").val() == "") {
                $("#DOBError").html("Please enter your birthday");
                validForm = false;
            }
            
        }

        if ($("#driverLicense").val().match(/[^a-zA-Z0-9-]/gi)) {
            $("#driverLicenseError").html("only letters,numbers, and dashes allowed");
            validForm = false;
        }
        else {
            $("#driverLicenseError").html("");
            if ($("#driverLicense").val() == "") {
                $("#driverLicenseError").html("Please enter your driver license number");
                validForm = false;
            }
            
        }

        if ($("#phone").val().match(/[^0-9-]/gi)) {
            $("#phoneError").html("only numbers and dashes allowed");
            validForm = false;
        }
        else {
            $("#phoneError").html("");
            if ($("#phone").val() == "") {
                $("#phoneError").html("Please enter your phone number");
                validForm = false;
            }
            
        }

        if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi)) {
            $("#emailError").html("");
            validForm = false;
        }
        else {
            $("#emailError").html("invalid format");
            if ($("#email").val() == "") {
                $("#emailError").html("Please enter your email address");
                validForm = false;
            }
            
        }

        if ($("#currentAddress").val().match(/[^a-zA-Z0-9 .]/gi)) {
            $("#currentAddressError").html("Special characters not allowed");
            validForm = false;
        }
        else {
            $("#currentAddressError").html("");
            if ($("#currentAddress").val() == "") {
                $("#currentAddressError").html("Please enter your address");
                validForm = false;
            }
            
        }

        if ($("#cityStateZip").val().match(/[^a-zA-Z0-9, -]/gi)) {
            $("#cityStateZipError").html("Only letters, dashes, commas, spaces allowed");
            validForm = false;
        }
        else {
            $("#cityStateZipError").html("");
            if ($("#cityStateZip").val() == "") {
                $("#cityStateZipError").html("Please enter your city, state and zip");
                validForm = false;
            }
            
        }

        if ($("#lengthOfTimeCurrentAddress").val().match(/[^a-zA-Z0-9 ]/gi)) {
            $("#lengthOfTimeCurrentAddressError").html("Only letters, dashes, commas, spaces allowed");
            validForm = false;
        }
        else {
            $("#lengthOfTimeCurrentAddressError").html("");
            if ($("#lengthOfTimeCurrentAddress").val() == "") {
                $("#lengthOfTimeCurrentAddressError").html("Please enter the amount of time you were at your current address");
                validForm = false;
            }
            
        }
// end current address
        if ($("#previousAddress").val().match(/[^a-zA-Z0-9 .]/gi)) {
            $("#previousAddressError").html("Special characters not allowed");
            validForm = false;
        }
        else {
            $("#previousAddressError").html("");
            if ($("#previousAddress").val() == "") {
                $("#previousAddressError").html("");
                validForm = false;
            }
            
        }

        if ($("#cityStateZip").val().match(/[^a-zA-Z0-9, -]/gi)) {
            $("#cityStateZipError").html("Only letters, dashes, commas, spaces allowed");
            validForm = false;
        }
        else {
            $("#cityStateZipError").html("");
            if ($("#cityStateZip").val() == "") {
                $("#cityStateZipError").html("");
                validForm = false;
            }
            
        }

        if ($("#lengthOfTimePreviousAddress").val().match(/[^a-zA-Z0-9 ]/gi)) {
            $("#lengthOfTimePreviousAddressError").html("Only letters, dashes, commas, spaces allowed");
            validForm = false;
        }
        else {
            $("#lengthOfTimePreviousAddressError").html("");
            if ($("#lengthOfTimePreviousAddress").val() == "") {
                $("#lengthOfTimePreviousAddressError").html("");
                validForm = false;
            }
            
        }

        if ($("#reasonForLeaving").val().match(/[^a-zA-Z0-9 ?.!]/gi)) {
            $("#reasonForLeavingError").html("special characters not allowed");
            validForm = false;
        }
        else {
            $("#reasonForLeavingError").html("");
            if ($("#reasonForLeaving").val() == "") {
                $("#reasonForLeavingError").html("Please enter a reason for leaving");
                validForm = false;
            }
            
        }

        if ($("#employer").val().match(/[^a-zA-Z ]/gi)) {
            $("#employerError").html("Only letters allowed");
            validForm = false;
        }
        else {
            $("#employerError").html("");
            if ($("#employer").val() == "") {
                $("#employerError").html("Please enter your employer");
                validForm = false;
            }
            
        }

        if ($("#workOccupation").val().match(/[^a-zA-Z ]/gi)) {
            $("#workOccupationError").html("special characters not allowed");
            validForm = false;
        }
        else {
            $("#workOccupationError").html("");
            if ($("#workOccupation").val() == "") {
                $("#workOccupationError").html("Please enter your Occupation");
                validForm = false;
            }
            
        }

        if ($("#salary").val().match(/[^a-zA-Z0-9/,$ ]/gi)) {
            $("#salaryError").html("special characters not allowed");
            validForm = false;
        }
        else {
            $("#salaryError").html("");
            if ($("#salary").val() == "") {
                $("#salaryError").html("Please enter your salary");
                validForm = false;
            }
            
        }

        if ($("#supervisor").val().match(/[^a-zA-Z ]/gi)) {
            $("#supervisorError").html("special characters not allowed");
            validForm = false;
        }
        else {
            $("#supervisorError").html("");
            if ($("#supervisor").val() == "") {
                $("#supervisorError").html("Please enter your first name");
                validForm = false;
            }
            
        }

        if ($("#supervisorPhone").val().match(/[^0-9- ]/gi)) {
            $("#supervisorPhoneError").html("special characters not allowed");
            validForm = false;
        }
        else {
            $("#supervisorPhoneError").html("");
            if ($("#supervisorPhone").val() == "") {
                $("#supervisorPhoneError").html("Please enter your supervisor's phone");
                validForm = false;
            }
            
        }

        if (validForm) {
            alert("Valid form will be submitted");
        } else {
            alert("Invalid form. Display form and error messages");
        }



    });
});

