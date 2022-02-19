
import header from "../components/header";
import footer from "../components/footer";
import newLists from "../components/newlists";

const lists = {
 async render() {
    return /* html*/ `  
        ${header.render()}
       <div class="banner max-w-7xl m-auto">
        <img class="block text-center"  width="100%" height="550" src="https://file.hstatic.net/200000397757/file/slideshow_1_a81e9991039d431197bd4aec957627e1_master.jpg" alt="">
        <div class="text absolute top-[50%] right-[150px] text-lg">
          <p class="text-right">
            <h2 class="text-5xl font-bold text-right flex flex-col	">LOFTFY - SALE</h2>
            <p class="text-xl">SWAG IT - COLLECTION WHICH TAKES YOU IN ROYAL CLASS</p>
           <button class=" block text-right bg-white p-3 hover:text-white hover:bg-black" >Xem Ngay</button>
          </p>
        </div>
      </div>
        <div class="bg-white">
  <div class="max-w-7xl mx-auto py-4 px-4 ">
    
   ${await newLists.render()}
  </div>
</div>
 ${footer.render()}
        `;
  },
};
export default lists;