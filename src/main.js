import Navigo from "navigo";
import homePage from "./page/homePage";
import lists from "./page/lists";
import details from "./page/details";
import doashboard from "./page/admin/doashboard";
import listsAdmin from "./page/admin/listsAdmin";
import addNew from "./page/admin/add";
import editAdmin from "./page/admin/edit";
import signin from "./page/admin/signin";
import Signup from "./page/admin/signup";


const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    // home page
    "/": () => print(homePage),
    "/lists": () => print(lists),
    "/lists/:id": (data) => print(details, data.data.id),
    // admin
    "/admin/doashboard": () => print(doashboard),
    "/admin/add": () => print(addNew),
    "/signin": () => print(signin),
    "/signup": () => print(Signup),
    "/admin/:id/edit": ({ data }) => print(editAdmin, data.id),
    "/admin/listsAdmin": () => print (listsAdmin)
});
router.resolve();