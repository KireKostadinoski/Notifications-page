let notificationsNumber = document.getElementById('3notifications');

let notification1 = document.getElementById('notification1');
let notification2 = document.getElementById('notification2');
let notification3 = document.getElementById('notification3');

let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');

function readNotifications(){
    notification1.classList.remove('notification-unread');
    notification2.classList.remove('notification-unread');
    notification3.classList.remove('notification-unread');

    notificationsNumber.style.display = 'none';

    dot1.style.display = "none";
    dot2.style.display = "none";
    dot3.style.display = "none";
}

