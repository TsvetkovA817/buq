let selectedRow = null

function lkUsrsOnFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("lk_usrs_fullName").value;
    formData["email"] = document.getElementById("lk_usrs_email").value;
    formData["salary"] = document.getElementById("lk_usrs_salary").value;
    formData["city"] = document.getElementById("lk_usrs_city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("lk_usrs_tbl").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="lk_usrs_a">Изменить</a>
                       <a onClick="onDelete(this)" class="lk_usrs_a">Удалить</a>`;
}

function resetForm() {
    document.getElementById("lk_usrs_fullName").value = "";
    document.getElementById("lk_usrs_email").value = "";
    document.getElementById("lk_usrs_salary").value = "";
    document.getElementById("lk_usrs_city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("lk_usrs_fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lk_usrs_email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lk_usrs_salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lk_usrs_city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Удалить запись?')) {
        row = td.parentElement.parentElement;
        document.getElementById("lk_usrs_tbl").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    
    if (document.getElementById("lk_usrs_fullName").value == "") {
        isValid = false;
        document.getElementById("lk_usrs_fullNameValidationError").classList.remove("lk_usrs_hide");
    } else {
        isValid = true;
        if (!document.getElementById("lk_usrs_fullNameValidationError").classList.contains("lk_usrs_hide"))
            document.getElementById("lk_usrs_fullNameValidationError").classList.add("lk_usrs_hide");
    }

    if (document.getElementById("lk_usrs_email").value == "") {
        isValid = false;
        document.getElementById("lk_usrs_emailValidationError").classList.remove("lk_usrs_hide");
    } else {
        isValid = true;
        if (!document.getElementById("lk_usrs_emailValidationError").classList.contains("lk_usrs_hide"))
            document.getElementById("lk_usrs_emailValidationError").classList.add("lk_usrs_hide");
    }

    return isValid;
}