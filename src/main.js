import Navigo from "navigo";
import homePage from "./page/homePage";
import lists from "./page/lists";
import details from "./page/details";
import doashboard from "./page/admin/doashboard";
import listsAdmin from "./page/admin/listsAdmin";
import addNew from "./page/admin/add";
import editAdmin from "./page/admin/edit";


const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(homePage),
    "/lists": () => print(lists),
    "/lists/:id": (data) => print(details, data.data.id),
    "/admin/doashboard": () => print(doashboard),
    "/admin/add": () => print(addNew),
    "/admin/:id/edit": ({ data }) => print(editAdmin, data.id),
    "/admin/listsAdmin": () => print (listsAdmin)
});
router.resolve();