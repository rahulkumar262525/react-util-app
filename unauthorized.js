import Swal from 'sweetalert2';

function CheckTokenUnauthorised() {
    Swal.fire({
        title: "Session Expired",
        text: "Your session expired, please relogin to continue!",
        icon: "error",
        confirmButtonText: "OK",
    }).then(() => {
        localStorage.clear();
        window.location.reload(); // Consider using React Router navigation
    });
}

export { CheckTokenUnauthorised }
