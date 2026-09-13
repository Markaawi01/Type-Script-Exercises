enum Role {
    SuperAdmin = "SuperAdmin",
    Moderator = "Moderator",
    Viewer = "Viewer",
}

function canEdit(role: Role): void {
    if (role === Role.SuperAdmin) {
        console.log("Admin access granted");
    } else {
        console.log("Edit access denied");
    }
}

const myRole: Role = Role.Viewer;

canEdit(myRole);
console.log(myRole);

const yourRole: Role = Role.Moderator;

canEdit(yourRole);
console.log(yourRole);

// const btn = document.querySelector("button") as HTMLButtonElement;

// btn.disabled = true;