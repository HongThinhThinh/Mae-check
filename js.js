function tinhDiem() {
    document.getElementById("img").style.transform = "translateX(100%)";
    document.getElementById("rs").style.transform = "translateY(-300%)";
    document.getElementById("img").style.clipPath = "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)";
    document.getElementById("img").style.transition = " all 0.9s"
    document.getElementById("rs").style.transition = " all 0.9s"
    var thunhap = document.getElementById('thunhap').value;
    var tienvay = document.getElementById('tienvay').value;

        var a = TaoSoNgauNhien(1, 50);
       
   var tv= a*0.2;   


    document.getElementById('rs').style.opacity = "1"
    document.getElementById('kq').style.display = " block"


    if (tv > 4) {
        console.log(tv);
        document.getElementById('rs').textContent = ("Pass roii nha ")
        document.getElementById('rs').style.backgroundColor = " green"
        document.getElementById('kq').textContent = ("Điểm của" +thunhap + "  là: " + tv.toFixed(1))

    }
    else {
        document.getElementById('rs').textContent = ("Retake rồi :( ")
        document.getElementById('rs').style.backgroundColor = "red"
        document.getElementById('kq').textContent = ("Điểm của" +thunhap + "  là: " + tv.toFixed(1))

    }




    if (thunhap == "" || tienvay == "") {
        document.getElementById('rs').textContent = (" Bỏ trống ăn cc hả")
        document.getElementById('kq').style.display = " none"
        document.getElementById('kq2').style.display = " none"
        var thunhap = document.getElementById('thunhap').value = "";
        var tienvay = document.getElementById('tienvay').value = "";
        document.getElementById('rs').style.marginLeft = '77px';
        

    }
    if (thunhap <0|| tienvay <0 ) {
        document.getElementById('rs').textContent = (" Nhập số âm ăn cc hả")
        document.getElementById('kq').style.display = " none"
        document.getElementById('kq2').style.display = " none"
        var thunhap = document.getElementById('thunhap').value = "";
        var tienvay = document.getElementById('tienvay').value = "";
     

    }


}

function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;}
function reset() {
    document.getElementById('kq').style.display = " none"
    document.getElementById('kq2').style.display = " none"
    document.getElementById("img").style.transform = "translateX(0)";
    document.getElementById("rs").style.transform = "translateY(-180px)";
    document.getElementById("img").style.clipPath = "none";

    document.getElementById('rs').textContent = ""

    var thunhap = document.getElementById('thunhap').value = "";
    var tienvay = document.getElementById('tienvay').value = "";
    document.getElementById('rs').style.opacity = "0"
}