import { getAll } from "../../api/product";

const newLists = {
  async  render (){
        const {data}= await getAll();
        return /*html */ `
        <main class="mt-5 w-full">
        <div class="max-w-7xl m-auto">
          <div class="khuyenmai">
            <h1 class="text-center mb-5 text-2xl">SẢN PHẨM</h1>
            <div class="product flex justify-between grid grid-cols-5 gap-6 ">
            ${data.map((product)=> /*html*/ `
            <a href="#/lists/${product.id}">
              <div class="product-item overflow-hidden">
                <img  class="hover:border-black hover:border w-[260px] h-[200px] object-cover" 
                src="${product.img}" alt="">
                <div class="product-item-text leading-7 mt-2">
                  <p class="text-sm">${product.title}</p>                
                  <div class="flex">
                    <p class="text-red-600 text-base block">${product.price}</p>
                  <del class="text-base ml-2">${product.saleof}</del>
                  </div>
                </div>
              </div>
             </a>  
            `).join("")
          }   
            </div>
          </div>



          <div class="danhmuc w-full flex mt-10 overflow-hidden ">
          <div class="danhmuc-img-left overflow-hidden w-full relative">
            <img width="100%" class=" hover:scale-110"
            src="https://file.hstatic.net/200000397757/file/second_banner_image_1_7c7fbf2137a940858be32e4840e5a73e_1024x1024.jpg"
            alt="">
            <div class="danhmuc-left-text  text-white text-2xl absolute bottom-20 left-16">
              <h3 class="uppercase">High performance</h3>
              <p class="capitalize">sale up to 10% off</p>
            </div>
          </div>
          <div class="danhmuc-img-right overflow-hidden w-full relative">
            <img width="100%" class=" hover:scale-110"
            src="https://file.hstatic.net/200000397757/file/second_banner_image_2_5d1f7e10c0084af89cdf76a427f970f8_1024x1024.jpg"
            alt="">
            <div class="danhmuc-right-text text-white text-2xl absolute bottom-20 left-16">
              <h3 class="uppercase">Red Sale ends april 30</h3>
              <p class="capitalize">sale up to 40% off</p>
            </div>
          </div>
          </div>
        </div>
      </main>
        `;
    },
};
export default newLists;