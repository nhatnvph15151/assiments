import header from "../components/header";
import banner from "../components/banner";
import footer from "../components/footer";
import newLists from "../components/newlists";
const homePage = {
   async render() {
        
        return /*html */ `
        <div>
        ${header.render()}
        </div>   
        <div>
        ${banner.render()}
        </div>
        <div>
        ${await newLists.render()}
        </div>
        <div>
        ${footer.render()}
        </div>  
        `;
    },
};
export default homePage;