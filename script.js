function CHECKKHODAM(event) {
    event.preventDefault(); // Perbaiki penulisan preventDefault

    let nama = $('#search').val(); // Mengambil input nama

    // Validasi jika nama kosong
    if (nama === '') {
        alert('Nama Tidak boleh kosong!');
    } else {
        // Status Khodam
        let status = ['isi', 'kosong']; 
        const randomStatus = Math.floor(Math.random() * status.length); // Pilih status secara acak

        if (randomStatus === 0) {
            // Daftar Khodam yang dapat dipilih
            let khodam = [
                'Pocong Gadung',
                'Nyi Roro Kidul',
                'Kuntilanak',
                'Jenglot',
                'Jin Hitam'
            ];
            const randomKhodam = Math.floor(Math.random() * khodam.length); // Pilih Khodam secara acak

            // Tampilkan hasil pencarian
            $('#result').html(`${nama.toUpperCase()} - Khodam kamu (${khodam[randomKhodam]})`);
        } else {
            // Jika status kosong
            $('#result').html(`${nama.toUpperCase()} - Kosong`);
        }
        
        // Bersihkan input setelah pencarian
        $('#search').val('');
    }
}

// Menangani event submit form, agar lebih fleksibel
$(document).ready(function() {
    $('#search-form').submit(CHECKKHODAM); // Ganti click dengan submit
});

