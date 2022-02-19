import { getAll } from "../../../api/product";
import headerAdmin from "../../components/headerAdmin";
const listAdmin = {
  async  render() {
      const {data} = await getAll();
        return /*html */`
        ${headerAdmin.render()}
        <div class="min-h-full">
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <a href="/admin/add"><h1 class="text-xl border bg-cyan-500 text-white rounded-md px-4 py-1 hover:bg-cyan-600">Add New</h1></a>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-auto p-4">
        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pirce</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          ${data.map((products,index)=> /*html */`
           <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${products.img}" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">${products.title}</div>
                   
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${products.price}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
            <!-- More people... -->
          </tbody>
          `
            ).join("")}
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
    </div>


        `;
    },
};
export default listAdmin;