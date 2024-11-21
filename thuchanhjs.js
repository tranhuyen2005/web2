function hienthidanhsachlop() {
    /*1. Tạo biến danh sách lớp*/
    const danhsachlop= [
    { hovaten:"Trần Thị Thu Huyền", gioitinh:"Nữ", noisinh:"Hà Nội" },
    { hovaten:"Nguyễn Công Mạnh", gioitinh:"Nam", noisinh:"Hà Tĩnh" },
    { hovaten:"Nguyễn Quang Huy", gioitinh:"Nam", noisinh:"Hà Tĩnh" },
    { hovaten:"Đỗ Thị Lan Hương", gioitinh:"Nữ", noisinh:"Hải Phòng" },
    { hovaten:"Hoàng Thị Hiền", gioitinh:"Nữ", noisinh:"Hải Phòng" },
    { hovaten:"Đỗ Hà Duyên", gioitinh:"Nữ", noisinh:"Hà Nam" },
    { hovaten:"Phạm Ngọc Ánh", gioitinh:"Nữ", noisinh:"Thái Bình" },
    { hovaten:"Nguyễn Thị Yến Nhi", gioitinh:"Nữ", noisinh:"Thái Bình" },
    { hovaten:"Ninh Thị Lành", gioitinh:"Nữ", noisinh:"Nam Định" }
    ];
    /*2. Lấy phần tử html có id là "danh-sach-lop"*/
    const danhsachhtml = document.getElementById("danh-sach-lop");
    /*3. Dùng javascript để in danh sach ra html*/
    let noidunghtml = `<table border="1" cellspacing="0" cellpadding="8">`;
        noidunghtml += "<tr><th>Họ và tên</th><th>Giới tính</th><th>Nơi sinh</th></tr>";
        danhsachlop.forEach((thanhvien) => {
            noidunghtml+=  `
            <tr>
                <td>${thanhvien.hovaten}</td>
                <td>${thanhvien.gioitinh}</td>
                <td>${thanhvien.noisinh}</td>
            </tr>
        `;
    });

    noidunghtml += "</table>";

    /* Gắn nội dung HTML vừa tạo vào phần tử "danh-sach-lop"*/
    danhsachhtml.innerHTML = noidunghtml;
}

/* Gọi hàm để hiển thị danh sách khi trang web tải xong*/
hienthidanhsachlop();