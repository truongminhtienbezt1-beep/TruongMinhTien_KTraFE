const oSoLuong = document.getElementById("soLuong");
const oTamTinh = document.getElementById("tamTinh");
const giaSanPham = Number(document.getElementById("giaSanPham").dataset.gia); 

function dinhDangTien(so) {
    return so.toLocaleString("vi-VN") + "₫";
}

function tinhTamTinh() {
    let soLuong = parseInt(oSoLuong.value, 10); 

    if (isNaN(soLuong) || soLuong < 1) { 
        soLuong = 1;
        oSoLuong.value = 1;
    }

    oTamTinh.textContent = dinhDangTien(soLuong * giaSanPham);
}

function doiSoLuong(buoc) {
    const hienTai = parseInt(oSoLuong.value, 10) || 1;
    oSoLuong.value = Math.max(1, hienTai + buoc);
    tinhTamTinh();
}

document.getElementById("btnTang").addEventListener("click", () => doiSoLuong(1));
document.getElementById("btnGiam").addEventListener("click", () => doiSoLuong(-1));
oSoLuong.addEventListener("input", tinhTamTinh); 

document.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
        document.querySelector(".thumb.active").classList.remove("active");
        thumb.classList.add("active");
    });
});

tinhTamTinh(); 