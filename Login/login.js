function bukaDialog() {
  document.getElementById("modal").style.display = "flex";
}

function tutupDialog() {
  document.getElementById("modal").style.display = "none";
}

function konfirmasiLogin() {
  tutupDialog();
}

function bukaDialogLogin() {
  document.getElementById("modalLogin").style.display = "flex";
}

function tutupDialogLogin() {
  document.getElementById("modalLogin").style.display = "none";
 }

function konfirmasiLogin() {
  tutupDialog();
  bukaDialogLogin();
}

function perbaruiPenghitung() {
  const textarea = document.getElementById("textarea");
   document.getElementById("counter").innerText = textarea.value.length;
 }

 function konfirmasiLogin() {
   window.location.href = "tugas kelompok.html";
 }

 function konfirmasiLogin() {
    const validUsername = 'admin';
    const validPassword = 'password123';

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // const message = document.getElementById("message");

    // Validasi login
    if (username === validUsername && password === validPassword) {
      message.textContent = 'Login berhasil!';
      message.style.color = 'green';
      window.location.href = "tugas_kelompok.html"; // Redirect setelah login sukses
    } else {
      message.textContent = 'Username atau password salah.';
      message.style.color = 'red';
    }
  }