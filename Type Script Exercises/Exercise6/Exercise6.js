"use strict";
var Role;
(function (Role) {
    Role["SuperAdmin"] = "SuperAdmin";
    Role["Moderator"] = "Moderator";
    Role["Viewer"] = "Viewer";
})(Role || (Role = {}));
function canEdit(role) {
    if (role === Role.SuperAdmin) {
        console.log("Admin access granted");
    }
    else {
        console.log("Edit access denied");
    }
}
const myRole = Role.Viewer;
canEdit(myRole);
console.log(myRole);
const yourRole = Role.Moderator;
canEdit(yourRole);
console.log(yourRole);
// const btn = document.querySelector("button") as HTMLButtonElement;
// btn.disabled = true;
