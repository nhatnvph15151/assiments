const header = {
    render() {
        return /*html*/ `
        <header class="w-full pt-2 pb-2" >
        <nav class=" m-auto max-w-7xl flex justify-between items-center bg-white  ">
          <img src="https://file.hstatic.net/200000397757/file/logo_8319db4a3fb145d39c8cb6c697d41bca.png" alt="">
          <ul class="flex text-lg ">
            <li class="pr-3 pl-3 hover:text-orange-500"><a href="/">Trang Chủ</a></li>
            <li class="pr-3 pl-3 hover:text-orange-500"><a href="/lists">Sản Phẩm</a></li>
            <li class="pr-3 pl-3 hover:text-orange-500"><a href="/details">Tin Tức</a></li>
            <li class="pr-3 pl-3 hover:text-orange-500"><a href="/admin/doashboard">Liên Hệ</a></li>
          </ul>
          <ul class="flex text-lg ">
            
           
            <li class="pr-3 pl-3 mr-2 border rounded-md text-[14px] hover:bg-orange-400 hover:text-white "><a href="/signup">Đăng Ký</a></li>
            <li class="pr-3 pl-3 border rounded-md text-[14px] hover:bg-orange-400 hover:text-white " ><a href="/signin">Đăng Nhập</a></li>
            <li class="pr-3 pl-3"><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
            <li class="pr-3 pl-3"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
          </ul>

        </nav>
      </header>
        `;
    },
};
export default header;