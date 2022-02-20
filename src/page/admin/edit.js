import { update } from "../../../api/product";
import { get } from "../../../api/product";
import headerAdmin from "../../components/headerAdmin";
import axios from "axios";

const editAdmin = {
        async render(id) {
        const { data } = await get(id);
        return /*html */ `
         ${headerAdmin.render()}
            <div class="mt-5 md:mt-0 md:col-span-2 max-w-7xl m-auto">
            <form class="mt-10" id="form-edit-product" action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <label for="company-website"  class="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text" value="${data.title}"  id="title-product" class="px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-[5px] sm:text-sm border-gray-300" placeholder="Tiêu đề">
                    </div>
                   </div>
                   <div class="col-span-3 sm:col-span-2">
                        <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text" value="${data.price}"  id="price-product" class=" px-3 py-2 first:focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-[5px] sm:text-sm border-gray-300" placeholder="Price">
                    </div>
                   </div>
                   <div class="col-span-3 sm:col-span-2">
                        <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Sale Of
                        </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        
                        <input type="text"  value="${data.saleof}" id="saleof-product" class=" px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-[5px] sm:text-sm border-gray-300" placeholder="Price">
                    </div>
                   </div>
                   
                 </div>
      
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Desc
                    </label>
                    <div class="mt-1">
                      <textarea id="desc-product" value="${data.desc}"  rows="3" class="shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nội dung..."></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div class="mt-1 flex items-center">
                      <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <div>
                      <input type="file" value="${data.img}" id="image-product" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <img width="150" height="200"  class="ml-5 object-cover" src="${data.img}" id="previewImage" />                         
                      </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 flex justify-between sm:px-6">
               
                <a class=" py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="news">Trở về</a>
              
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                  </div>
              </div>
            </form>
            </div> `;},
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-product");
        const imgProduct = document.querySelector("#image-product");
        const imgPreview = document.querySelector('#previewImage');
        let imgUploadedLink = "";

        imgProduct.addEventListener("change", async (e) => {
            imgPreview.src = URL.createObjectURL(imgProduct.files[0])
        });

        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = imgProduct.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "vannhat");

                const { data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/nhatnvph15151/image/upload",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData,
                });
                imgUploadedLink = data.url
            }

            update({
                id,
                title: document.querySelector("#title-product").value,
                desc: document.querySelector("#desc-product").value,
                saleof: document.querySelector("#saleof-product").value,
                img: imgUploadedLink ? imgUploadedLink : imgPreview.src,
                price: document.querySelector("#pric5oduct").value,
            })
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error));
        });
    }
};
export default editAdmin;